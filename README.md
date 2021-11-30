---
title: Dendi LIS endpoint
keywords: 
last_updated:  September 20, 2021
tags: []
summary: "Detailed description of the API of the Dendi LIS endpoint."
---

## Overview

The Dendi LIS endpoint allows you to interact with the Dendi API.

Some of the features are:

- Creation of Orders
- Creation and Sync of Patients
- Webhooks for automatic updates when Orders are ready or rejected

Apart from some helpers you will see that in order to use the REST API of Dendi you will be making regular HTTP request to the REST API with some optional parameters for filtering. 
To see the available parameters go check [API Documentation](https://documenter.getpostman.com/view/12233883/T1Dv9FYf#intro).

## Configuration

To comunicate to Dendi LIS you will only need 3 fields:

1. **URL of the API of Dendi:** This will be the url where the request will be sent.
 with your credentials for Dendi LIS</li>
2. **API Token:** It can be generated making a request to `{{site_root}}/api/api-token-auth/` with your credentials on the body like:
```
{
    username: {{username}}
    password: {{password}}
}
```
3. **Webhooks Token:** It can be any password that you want. It will be used to validate webhooks coming to the endpoint, so if the password doesn't match, the webhook will be discarded.

## Webhooks

 In order to use API Web-hooks you'll need to configure them on Dendi LIS. This can be done under Admin Tools > Lab Setup > Webhooks. 
 - Under **Webhook Callback URL** be sure to put the corresponding Slingr App URL like `https://<yourAppName>.slingrs.io/<env>/endpoints/dendi/orders`
 - Be sure to copy the same token on **Webhook Callback Auth** and on the Dendi LIS endpoint configuration.The token will be injected on the headers of the webhook on the `autorization` header.

## Javascript API

The Javascript API provides direct access to the Dendi LIS API so you can make regular HTTP requests. 

### HTTP requests

You can make `GET`,`PUT`, `POST` and `DELETE` request to the Dendi LIS API via generics, or using helpers.
We recomend using helpers as they are more convenient and easy to read:

```js
//Using a generic GET/PUT/POST/DELETE:
var dendiPatients = app.endpoints.dendi.get('/patients');
var dendiPatient = app.endpoints.dendi.put('/patients/' + patientId, {"birth_date": "1980-01-05"});
var dendiOrder = app.endpoints.dendi.post('/orders',{   
    "account_uuid": "aebb58c9-f21d-442f-af47-d82471f79f20",
    "provider_uuid": "a4f995e8-4f9d-4561-9db5-0d1167485231",
    "patient_uuid": "18b659b2-bee5-4902-b0d6-6b11b2a08554",
    ...
});
var dendiOrder = app.endpoints.dendi.delete('/orders/' + orderId);

//The same calls using helpers:
var dendiPatients = app.endpoints.dendi.patients.get();
var dendiPatient = app.endpoints.dendi.patients.put(patientId,{"birth_date": "1980-01-05"});
var dendiOrder = app.endpoints.dendi.orders.post({   
    "account_uuid": "aebb58c9-f21d-442f-af47-d82471f79f20",
    "provider_uuid": "a4f995e8-4f9d-4561-9db5-0d1167485231",
    "patient_uuid": "18b659b2-bee5-4902-b0d6-6b11b2a08554",
    ...
});
var dendiOrder = app.endpoints.dendi.orders.delete(orderId);
```

Also, you can filter the items you want to get by sending params to the call:

```js
var dendiOrder = app.endpoints.dendi.orders.get({uuid: "58191b62-2c1d-427e-907d-b307446e0c2c"});//using params to filter the results
```

## Date Format

Dendi uses the following formats:  
- `YYYY-MM-DD` for dates
- `YYYY-MM-DD'T'HH:mm:ss.SSSXXX` for date time.

For more information refer to the [API Documentation](https://documenter.getpostman.com/view/12233883/T1Dv9FYf#intro) to know wich one to use.

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
