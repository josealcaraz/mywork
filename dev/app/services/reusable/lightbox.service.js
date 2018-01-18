(function() {
    'use strict';
    angular
        .module('angularAPP')
        .factory('lightbox', lightbox);

    lightbox.$inject = ['global', 'ngDialog', '$timeout'];
    
    function lightbox(global, ngDialog, $timeout) {
        var service = {
            open: open,
            close: close,
            closeAll: closeAll,
            register: register,
            openPreload: openPreload,
            closePreload: closePreload
        };
        return service;
        
        function register() {
        	this.lbexito = {
			    templateUrl : "app/features/partialview/exito.view.html",
			    controller  : "exitoController",
                className   : 'mainPopUp',
			    controllerAs: "vm",
                name: "lbexito",
                closeByDocument: false
            }
            this.lbVideo = {
                templateUrl: "app/features/partialview/lbVideo.view.html",
                controller: "lbVideoController",
                className: 'mainPopUp',
                controllerAs: "vm",
                name: "lbVideo",
                closeByDocument: false
            }
            
        }

        function open(alias) {
            ngDialog.open(this[alias]);
            /*Cierra el menu si se encuentra abierto en moviles*/
           
        }

        function close(alias) {
            document.getElementById("preload").classList.remove("show");
            ngDialog.close(this[alias].name);
        }

        function closeAll() {
            ngDialog.closeAll();
        }

        function openPreload() {
            document.getElementById("preload").classList.add("show");
        }

        function closePreload() {
            document.getElementById("preload").classList.remove("show");
        }
        
    
        
    }
})();