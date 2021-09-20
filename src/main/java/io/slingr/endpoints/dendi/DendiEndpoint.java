package io.slingr.endpoints.dendi;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.framework.annotations.*;
import io.slingr.endpoints.services.AppLogs;
import io.slingr.endpoints.services.HttpService;
import io.slingr.endpoints.services.exchange.Parameter;
import io.slingr.endpoints.services.rest.RestMethod;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import io.slingr.endpoints.ws.exchange.WebServiceRequest;
import io.slingr.endpoints.ws.exchange.WebServiceResponse;
import org.apache.commons.io.IOUtils;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.entity.ContentType;
import org.apache.http.impl.client.HttpClientBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import java.util.UUID;

/**
 * <p>Sample endpoint
 *
 * <p>Created by lefunes on 01/12/16.
 */
@SlingrEndpoint(name = "dendi")
public class DendiEndpoint extends HttpEndpoint {
    private static final Logger logger = LoggerFactory.getLogger(DendiEndpoint.class);

    @ApplicationLogger
    private AppLogs appLogger;

    @EndpointProperty
    private String API_URL;

    @EndpointProperty
    private String API_TOKEN;

    public DendiEndpoint() {
    }

    @Override
    public String getApiUri(){
        return API_URL;
    }

    @Override
    public void endpointStarted() {
        //Dendi expects the Authorization header with "Token+whitespace+token" so we pass it like this
        httpService().setupAuthenticationHeader("Token"," "+this.API_TOKEN);
        // the loggers, endpoint properties, data stores, etc. are initialized at this point. the endpoint is ready to be used
        logger.info("Endpoint is started");
    }

    @Override
    public void endpointStopped(String cause) {
        logger.info(String.format("Endpoint is stopping - cause [%s]", cause));
    }

    @EndpointFunction(name = "_get")
    public Json get(FunctionRequest request) {
        try {
            // continue with the default processor
            return defaultGetRequest(request);
        } catch (EndpointException restException) {
            throw restException;
        }
    }

    @EndpointFunction(name = "_put")
    public Json put(FunctionRequest request) {
        try {
            // continue with the default processor
            return defaultPutRequest(request);
        } catch (EndpointException restException) {
            throw restException;
        }
    }

    @EndpointFunction(name = "_post")
    public Json post(FunctionRequest request) {
        try {
            // continue with the default processor
            Json req = request.getRequest();
            appLogger.warn("API_URL is: "+this.API_URL);

            appLogger.warn("THE req ON _post IS: "+req.toString());
            return defaultPostRequest(request);
        } catch (EndpointException restException) {
            throw restException;
        }
    }

    @EndpointFunction(name = "_delete")
    public Json delete(FunctionRequest request) {
        try {
            // continue with the default processor
            return defaultDeleteRequest(request);
        } catch (EndpointException restException) {
            throw restException;
        }
    }

    @EndpointFunction(name = "_getReportFile")
    public Json getReportFile(Json pdfData) throws IOException {

        System.out.println("Se ejecuta getReportFile y pdfData es: "+pdfData.toString());
        List<Json> reportsList = pdfData.jsons("results").get(0).jsons("reports");
        String reportUrl = reportsList.get(reportsList.size()-1).string("pdf_file");
        System.out.println("reportUrl es: "+reportUrl);

        String fileName = "report-" + UUID.randomUUID() + ".pdf";

        HttpClient httpClient = HttpClientBuilder.create().build();
        HttpGet get = new HttpGet(reportUrl);
        InputStream is = null;
        String status = "ok";
        int statusCode = 200;
        boolean hasFile = true;
        Json fileJson = Json.map();
        try {
            HttpResponse response = httpClient.execute(get);
            if (response.getStatusLine().getStatusCode() != 200) {
                status = "fail";
                statusCode = response.getStatusLine().getStatusCode();
                System.out.println("Content Type es: "+response.getEntity().getContentType().getValue());
                if (response.getEntity() == null || response.getEntity().getContentType() == null /*||
                        !StringUtils.equals(response.getEntity().getContentType().getValue(), "application/xml")*/) {
                    hasFile = false;
                }
            }
            if (hasFile) {
                is = response.getEntity().getContent();
                ContentType contentType = ContentType.getOrDefault(response.getEntity());
                System.out.println("contentType es: "+contentType);
                String mimeType = contentType.getMimeType();
                System.out.println("mimeType es: "+mimeType);
                appLogger.info(String.format("Starting upload of pdf report [%s]", fileName));
                fileJson = files().upload(fileName, is, mimeType);
                appLogger.info(String.format("Report was upload successfully as [%s]", fileName));
            } else {
                appLogger.warn(String.format("Report was not received. Status code [%s]", response.getStatusLine().getStatusCode()));
            }
        } catch (IOException e) {
            String ERROR_MESSAGE = "Error to fetch report file";
            logger.error(ERROR_MESSAGE, e);
            appLogger.error(ERROR_MESSAGE, e);
            status = "error";
            statusCode = 500;
        } finally {
            /*
            resp.set("status", status);
            resp.set("statusCode", statusCode);
             */
            IOUtils.closeQuietly(is);
        }
        System.out.println("fileJson es: "+fileJson.toString());
        return fileJson;
    }

    @EndpointWebService(path = "/orders", methods = {RestMethod.POST})
    private WebServiceResponse processWebhook(WebServiceRequest request) {
        Json requestBody = (Json) request.getBody();
        events().send("processWebhook", HttpService.defaultWebhookConverter(request));

        return new WebServiceResponse();
    }

    @EndpointWebService(path = "/test", methods = RestMethod.GET)
    public WebServiceResponse getResponse() throws Exception {

        final int value = (int) Math.floor(Math.random()*1000);
        appLogger.info(String.format("Request value [%s]", value));

        final Object appResponse = events().sendSync("requestInformation", Json.map().set("value", value));
        appLogger.info(String.format("Request response from server [%s]", appResponse));

        final WebServiceResponse response = new WebServiceResponse(Json.map()
                .set("value", value)
                .set("appResponse", appResponse)
        );
        response.setHttpCode(202); // HTTP code: 202 Accepted
        response.setHeader(Parameter.CONTENT_TYPE, ContentType.APPLICATION_JSON.getMimeType());
        response.setHeader("value", value);

        logger.info(String.format("Response from server: [%s]", response.getBody().toString()));
        return response;
    }
}
