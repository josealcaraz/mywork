(function () {
    'use strict';

    angular.module("angularAPP")
        .service("saveUser", saveUser);

    saveUser.$inject = ['lightbox', 'SETUP', 'global'];

    function saveUser(lightbox, SETUP, global) {

        var service = {
            setUser: setUser
        };
      

        return service;

        function setUser(_phone, _emailUser, _nameUser) {

            //abrir cargador
            var apiClient = apigClientFactoryPragma.newClient({
                apiKey: SETUP.apiKeyPragma,//apiKey
                accessKey: global.accessKeyId,
                secretKey: global.secretAccessKey,
                sessionToken: global.sessionToken,
                region: 'us-east-2'
            });
           
            apiClient.servicesPanamarusiaservicesRegisterUserPost({}, { phoneNumber: _phone, email: _emailUser, name: _nameUser })
                .then(function (response) {
                    if (response.data.Status===0){
                        lightbox.open("lbexito");
                        dataLayer.push({ 'event': 'pushEventGA', 'categoria': 'NequiTeLlevaARusia', 'accion': 'ClicRegistroCelular', 'etiqueta': 'RegistroExitoso' }); 
                    }else if(response.data.Status === 1){
                        lightbox.open("lbexito");
                    }else{
                        console.log(response);
                    }
                    
                    
                }).catch(function (error) {
                    //Código en caso de error  
                    console.log(error);
                });
        }


    }

}());