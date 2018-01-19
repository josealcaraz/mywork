(function () {
    'use strict';
    angular
        .module('angularAPP')
        .controller('section2Controller', section2Controller);

    section2Controller.$inject = ['$location', 'global', 'scroll'];

    function section2Controller($location, global, scroll) {

        var vm = this;

        vm.pathname = location.pathname;
 
        angular.element(document).ready(function () {

            $('.sliderSection3').slick({
                dots: true,
                arrows: false,
                speed: 500,
                //fade: true,
                infinite: false,
                cssEase: 'linear'


            }); 
        });
        
           
            
        



    }
})();

