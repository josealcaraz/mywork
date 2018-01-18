(function () {
    'use strict';
    angular
        .module('angularAPP')
        .controller('section1Controller', section1Controller);

    section1Controller.$inject = ['$location', 'global','scroll'];

    function section1Controller($location, global, scroll) {

        var vm = this;
    
        vm.pathname = location.pathname;
        vm.clickNext = clickNext;
        vm.init = init;


        function clickNext() {
            $('.sliderSection2').slick('slickNext');
            if(screen.width<990){
                scroll.scrollTo($('#section0').height() - 50); 
            }             
        }
   

        angular.element(document).ready(function () {
            
            $('.sliderSection2').slick({
                dots: true,
                arrows: false,
                speed: 500,
                //fade: true,
                infinite: false,
                cssEase: 'linear'

                
            });
            global.tamanioseccion2 = $('#section1').height();
            $('.sliderSection2').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                
                $('.sliderSection2 .slick-dots li button').css('background', 'none');
                $('.sliderSection2 .slick-dots li button').css('color', '#FAD2DF');
                for (var i=0; i < nextSlide;i++){
                    $('.sliderSection2 .slick-dots li button')[i].style.background = '#fff';
                    $('.sliderSection2 .slick-dots li button')[i].style.color = '#F44880';
                }
            });
        });
        function init() {
            
        
            var animation = bodymovin.loadAnimation({             
                container: document.getElementById('animacion1'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: "img/imgJson/icon_descarga.json"
            })
            var animation = bodymovin.loadAnimation({
                container: document.getElementById('animacion3'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: "img/imgJson/icon_podium.json"
            })
            var animation = bodymovin.loadAnimation({
                container: document.getElementById('animacion4'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: "img/imgJson/icon_paso4_muneco.json"
            })
            var animation = bodymovin.loadAnimation({
                container: document.getElementById('animacion2'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: "img/imgJson/icon_pagar.json"
            })
            
        }
        


    }
})();

