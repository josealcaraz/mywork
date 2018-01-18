(function() {
   'use strict';
   angular
       .module('angularAPP')
       .controller('exitoController', exitoController);

    exitoController.$inject = ['$location', 'global', 'lightbox', '$timeout'];

    function exitoController($location, global, lightbox, $timeout) {
       var vm = this;    
       vm.pathname = location.pathname;
       vm.home= home;
        function home() { 
            global.registro = false;
            lightbox.close("lbexito");
            $location.path("/home");
        }
        $timeout(function () {
            var animation = bodymovin.loadAnimation({
                container: document.getElementById('animationGifExito'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: "img/imgJson/jugador_feliz.json"
            })
        }, 100);
  

       
    }
    

})();