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
        });
        
    }
})();

