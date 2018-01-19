(function () {
    'use strict';
    angular
        .module('angularAPP')
        .controller('section1Controller', section1Controller);

    section1Controller.$inject = ['$location', 'global','scroll'];

    function section1Controller($location, global, scroll) {

        var vm = this;
    
        vm.pathname = location.pathname;

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
                $('.sliderSection2 .slick-dots li button').css('color', '#fff');
                for (var i=0; i < nextSlide;i++){
                    $('.sliderSection2 .slick-dots li button')[i].style.background = 'rgba(255, 255, 255, 0.4)';
                    $('.sliderSection2 .slick-dots li button')[i].style.color = '#fff';
                }
            });
        });
        
    }
})();

