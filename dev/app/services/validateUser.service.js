(function () {
    'use strict';

    angular.module("angularAPP")
        .service("validateUser", validateUser);

    validateUser.$inject = ['lightbox', 'SETUP', 'global', 'saveUser'];

    function validateUser(lightbox, SETUP, global, saveUser) {

        var service = {
            getUser: getUser
        };
        

        return service;

        function getUser(_phone_number, _value) {
            //abrir cargador
            var apiClient = apigClientFactory.newClient({
                apiKey: SETUP.apiKey,//apiKey
                accessKey: global.accessKeyId,
                secretKey: global.secretAccessKey,
                sessionToken: global.sessionToken
            });
            var CHANNEL = "MF-001";
            var CLIENTID = "123";
            // Construye a partir del celular y valor a recargar el mensaje de entrada
            var getBodyValidateClient = function (phoneNumber, value) {
                var messageId = new Date().getTime().toString();
                return {
                    "RequestMessage": {
                        "RequestHeader": {
                            "Channel": CHANNEL,
                            "RequestDate": new Date().toJSON(),
                            "MessageID": messageId.substring(messageId.length - 9),
                            "ClientID": CLIENTID,
                            "Address": {
                                "DeviceAddress": "1.1.1.1",
                                "NetworkAddress": "1.1.1.1"
                            },
                            "Destination": {
                                "ServiceName": "RechargeService",
                                "ServiceOperation": "validateClient",
                                "ServiceRegion": "C001",
                                "ServiceVersion": "1.0.0"
                            }
                        },
                        "RequestBody": {
                            "any": {
                                "validateClientRQ": {
                                    "phoneNumber": phoneNumber.toString(),
                                    "value": value.toString()
                                }
                            }
                        }
                    }
                };
            };
            apiClient.servicesClientserviceValidateclientPost({}, getBodyValidateClient(_phone_number, _value))
                .then(function (response) {
                    if (response.data.ResponseMessage.ResponseHeader.Status.StatusDesc === "SUCCESS") {
                        saveUser.setUser(_phone_number,"","");
                        
                    } else {
                        dataLayer.push({ 'event': 'pushEventGA', 'categoria': 'NequiTeLlevaARusia', 'accion': 'ClicRegistroUsuarioNoNequi', 'etiqueta': 'RegistroExitoso' });
                        angular.element(document.getElementById("registro")).scope().vm.openRegister();
                    }

                }).catch(function (error) { 
                    console.log(error);
                });
        }

        
    }

}());