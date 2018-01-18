(function () {
    'use strict';

    angular.module("angularAPP")
        .service("getTop", getTop);

    getTop.$inject = ['lightbox', 'SETUP', 'global'];

    function getTop(lightbox, SETUP, global) {

        var service = {
            getUsers: getUsers
        };


        return service;

        function getUsers() {

            //abrir cargador
            var apiClient = apigClientFactoryPragma.newClient({
                apiKey: SETUP.apiKeyPragma,//apiKey
                accessKey: global.accessKeyId,
                secretKey: global.secretAccessKey,
                sessionToken: global.sessionToken,
                region: 'us-east-2'
            });

            return apiClient.servicesPanamarusiaservicesGetTopPost({}, {day:""});
        }


    }

}());