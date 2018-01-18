/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var apigClientFactory = {};
apigClientFactory.newClient = function (config) {
    var apigClient = { };
    if(config === undefined) {
        config = {
            accessKey: '',
            secretKey: '',
            sessionToken: '',
            region: '',
            apiKey: undefined,
            defaultContentType: 'application/json',
            defaultAcceptType: 'application/json'
        };
    }
    if(config.accessKey === undefined) {
        config.accessKey = '';
    }
    if(config.secretKey === undefined) {
        config.secretKey = '';
    }
    if(config.apiKey === undefined) {
        config.apiKey = '';
    }
    if(config.sessionToken === undefined) {
        config.sessionToken = '';
    }
    if(config.region === undefined) {
        config.region = 'us-east-1';
    }
    //If defaultContentType is not defined then default to application/json
    if(config.defaultContentType === undefined) {
        config.defaultContentType = 'application/json';
    }
    //If defaultAcceptType is not defined then default to application/json
    if(config.defaultAcceptType === undefined) {
        config.defaultAcceptType = 'application/json';
    }

    
    // extract endpoint and path from url
    var invokeUrl = 'https://kksofdo2af.execute-api.us-east-1.amazonaws.com/prod';
    var endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
    var pathComponent = invokeUrl.substring(endpoint.length);

    var sigV4ClientConfig = {
        accessKey: config.accessKey,
        secretKey: config.secretKey,
        sessionToken: config.sessionToken,
        serviceName: 'execute-api',
        region: config.region,
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var authType = 'NONE';
    if (sigV4ClientConfig.accessKey !== undefined && sigV4ClientConfig.accessKey !== '' && sigV4ClientConfig.secretKey !== undefined && sigV4ClientConfig.secretKey !== '') {
        authType = 'AWS_IAM';
    }

    var simpleHttpClientConfig = {
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var apiGatewayClient = apiGateway.core.apiGatewayClientFactory.newClient(simpleHttpClientConfig, sigV4ClientConfig);
    
    
    
    apigClient.servicesBalanceserviceGetbalancePost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesBalanceserviceGetbalancePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-balanceservice-getbalance').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesBalanceserviceGetbalancePostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesBalanceserviceGetbalanceOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesBalanceserviceGetbalanceOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-balanceservice-getbalance').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesBalanceserviceGetbalanceOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesCashinserviceCashinPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesCashinserviceCashinPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-cashinservice-cashin').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesCashinserviceCashinPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesCashinserviceCashinOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesCashinserviceCashinOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-cashinservice-cashin').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesCashinserviceCashinOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesCashoutserviceCashoutPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesCashoutserviceCashoutPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-cashoutservice-cashout').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesCashoutserviceCashoutPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesCashoutserviceCashoutOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesCashoutserviceCashoutOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-cashoutservice-cashout').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesCashoutserviceCashoutOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesCashoutserviceCashoutconsultPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesCashoutserviceCashoutconsultPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-cashoutservice-cashoutconsult').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesCashoutserviceCashoutconsultPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesCashoutserviceCashoutconsultOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesCashoutserviceCashoutconsultOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-cashoutservice-cashoutconsult').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesCashoutserviceCashoutconsultOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesClientserviceValidateclientPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesClientserviceValidateclientPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-clientservice-validateclient').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesClientserviceValidateclientPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesClientserviceValidateclientOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesClientserviceValidateclientOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-clientservice-validateclient').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesClientserviceValidateclientOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesDaysalesserviceGetdaysalesPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesDaysalesserviceGetdaysalesPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-daysalesservice-getdaysales').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesDaysalesserviceGetdaysalesPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesDaysalesserviceGetdaysalesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesDaysalesserviceGetdaysalesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-daysalesservice-getdaysales').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesDaysalesserviceGetdaysalesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesHistoricalmovementsserviceGethistoricalmovementsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesHistoricalmovementsserviceGethistoricalmovementsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-historicalmovementsservice-gethistoricalmovements').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesHistoricalmovementsserviceGethistoricalmovementsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesHistoricalmovementsserviceGethistoricalmovementsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesHistoricalmovementsserviceGethistoricalmovementsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-historicalmovementsservice-gethistoricalmovements').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesHistoricalmovementsserviceGethistoricalmovementsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesKeysserviceGetpublicPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesKeysserviceGetpublicPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-keysservice-getpublic').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesKeysserviceGetpublicPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesKeysserviceGetpublicOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesKeysserviceGetpublicOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-keysservice-getpublic').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesKeysserviceGetpublicOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesNequipointserviceGetnequipointsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesNequipointserviceGetnequipointsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-nequipointservice-getnequipoints').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesNequipointserviceGetnequipointsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesNequipointserviceGetnequipointsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesNequipointserviceGetnequipointsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-nequipointservice-getnequipoints').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesNequipointserviceGetnequipointsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesNequipointserviceInfonequipointPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesNequipointserviceInfonequipointPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-nequipointservice-infonequipoint').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesNequipointserviceInfonequipointPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesNequipointserviceInfonequipointOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesNequipointserviceInfonequipointOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-nequipointservice-infonequipoint').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesNequipointserviceInfonequipointOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesPaymentserviceGeneratecodeqrPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesPaymentserviceGeneratecodeqrPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-paymentservice-generatecodeqr').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesPaymentserviceGeneratecodeqrPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesPaymentserviceGeneratecodeqrOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesPaymentserviceGeneratecodeqrOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-paymentservice-generatecodeqr').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesPaymentserviceGeneratecodeqrOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesPaymentserviceGetstatuspaymentPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesPaymentserviceGetstatuspaymentPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-paymentservice-getstatuspayment').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesPaymentserviceGetstatuspaymentPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesPaymentserviceGetstatuspaymentOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesPaymentserviceGetstatuspaymentOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-paymentservice-getstatuspayment').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesPaymentserviceGetstatuspaymentOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesPaymentserviceUnregisteredpaymentPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesPaymentserviceUnregisteredpaymentPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-paymentservice-unregisteredpayment').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesPaymentserviceUnregisteredpaymentPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesPaymentserviceUnregisteredpaymentOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesPaymentserviceUnregisteredpaymentOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-paymentservice-unregisteredpayment').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesPaymentserviceUnregisteredpaymentOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesPocketservicesGetpocketPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesPocketservicesGetpocketPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-pocketservices-getpocket').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesPocketservicesGetpocketPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesPocketservicesGetpocketOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesPocketservicesGetpocketOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-pocketservices-getpocket').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesPocketservicesGetpocketOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesTransferservicesTransferPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesTransferservicesTransferPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-transferservices-transfer').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesTransferservicesTransferPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesTransferservicesTransferOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesTransferservicesTransferOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/-services-transferservices-transfer').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesTransferservicesTransferOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesRechargephoneservicesRechargecellphonePost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesRechargephoneservicesRechargecellphonePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/services-rechargephoneservices-rechargecellphone').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesRechargephoneservicesRechargecellphonePostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.servicesRechargephoneservicesRechargecellphoneOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var servicesRechargephoneservicesRechargecellphoneOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/services-rechargephoneservices-rechargecellphone').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(servicesRechargephoneservicesRechargecellphoneOptionsRequest, authType, additionalParams, config.apiKey);
    };
    

    return apigClient;
};
