package io.slingr.endpoints.dendiLIS;

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
import org.apache.http.entity.ContentType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Random;

/**
 * <p>Sample endpoint
 *
 * <p>Created by lefunes on 01/12/16.
 */
@SlingrEndpoint(name = "dendiLIS")
public class DendiLISEndpoint extends HttpEndpoint {
    private static final Logger logger = LoggerFactory.getLogger(DendiLISEndpoint.class);

    @ApplicationLogger
    private AppLogs appLogger;

    @EndpointProperty
    private String API_URL;

    @EndpointProperty
    private String apiToken;

    public DendiLISEndpoint() {
    }

    @EndpointProperty
    private String dendiEnvironment;

    @Override
    public String getApiUri(){
        return API_URL;
    }

    @Override
    public void endpointStarted() {
        //Dendi expects the Authorization header with "Token+whitespace+token" so we pass it like this
        httpService().setupAuthenticationHeader("Token"," "+this.apiToken);
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
