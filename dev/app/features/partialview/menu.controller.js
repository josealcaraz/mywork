(function () {
    'use strict';
    angular
        .module('angularAPP')
        .controller('menuController', menuController);

    menuController.$inject = ['global', 'scroll', '$location', '$scope', '$document'];

    function menuController(global, scroll, $location, $scope, $document) {
        var vm = this;
       
        vm.datosmenu = global;
        vm.menu = menu;
        vm.pathname = location.pathname;
        vm.barraScroll = 0;
        vm.registro = registro;

        vm.elemento1 = $(document).height();
        vm.elemento2 = $(document).height();
        vm.elemento3 = $(document).height();

        //vm.activityActive = global.activityActive = getActivity;
        angular.element(document).ready(function () {
            
            vm.elemento1=$('#section0').height();
            vm.elemento3 = $('#section2').height();
            
            $(window).scroll(function () {
                var barra = $(window).scrollTop();
                vm.barraScroll = barra; 
                //console.log(vm.barraScroll >= vm.elemento1);
                if(barra == 0){
                    global.animatedLogo.goToAndPlay(0);          
                }
                if (barra >= (vm.elemento1 + global.tamanioseccion2-150)) {
                    var imagen = document.getElementById("logoNequiFooter");
                    if (imagen != undefined) {
                        imagen.src = vm.pathname + "img/home/logo_nequi_azul.svg";
                    }
                 
                    $('#fp-nav ul li a span').addClass("purple");   
                                 
                    $('.linkTyC').addClass("linkS3");
                    $('.navMenu').addClass("navMenuSection");
                    $('.logoNequiMobile').addClass("logoNequiMobileSection");
                    $('.activeMenu').removeClass("activeMenu");
                    $('#premios').addClass("activeMenu");
                    $('#header').addClass("section");
                    $('.logoNequi').addClass('showLogo');
                } else if (barra >= vm.elemento1-50) {
                    var imagen = document.getElementById("logoNequiFooter");
                    if (imagen != undefined) {
                        imagen.src = vm.pathname + "img/home/logo_nequi_blanco.svg";
                    }    
                    $('#fp-nav ul li a span').removeClass("purple");                 
                    $('.linkTyC').addClass("linkS2");
                    $('.linkTyC').removeClass("linkS3");
                    $('.navMenu').addClass("navMenuSection");
                    $('.logoNequiMobile').addClass("logoNequiMobileSection");
                    $('.activeMenu').removeClass("activeMenu");
                    $('#como').addClass("activeMenu");
                    $('#header').addClass("section");
                    $('.logoNequi').addClass('showLogo');
                } else {
                    var imagen = document.getElementById("logoNequiFooter");
                    if (imagen != undefined) {
                        imagen.src = vm.pathname + "img/home/logo_nequi_blanco.svg";
                    }    
                    $('#fp-nav ul li a span').removeClass("purple");              
                    $('.linkTyC').removeClass("linkS2");
                    $('.linkTyC').removeClass("linkS3");
                    $('.navMenu').removeClass("navMenuSection");
                    $('.logoNequiMobile').removeClass("logoNequiMobileSection");
                    $('#header').removeClass("section");      
                    $('.activeMenu').removeClass("activeMenu");
                    $('.logoNequi').removeClass("showLogo");
                    $('#inicio').addClass("activeMenu");
                }
            });
            scroll.scrollTo(0);
        });
        function registro() {
            $location.path("/registro");
        }
        function menu(numMenu) {
            vm.elemento1 = $('#section0').height();
            switch (numMenu) {
                case 0:
                    scroll.scrollTo(0);
                    break;
                case 1:
                    if (screen.width < 990) {
                        scroll.scrollTo(vm.elemento1 - 50);
                    }else{
                        scroll.scrollTo(vm.elemento1);
                    }
                    
                    break;
                case 2:
                    if (screen.width < 990) {
                        scroll.scrollTo(vm.elemento1 + global.tamanioseccion2 +50);
                    }else{
                        scroll.scrollTo(vm.elemento1 + global.tamanioseccion2);
                    }
                    
                    break;
                case 3:
                    scroll.scrollTo(vm.elemento1*3);
                    break;
            
                default:
                    break;
            }
        }
    }
})();