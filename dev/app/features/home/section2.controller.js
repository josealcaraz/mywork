(function () {
    'use strict';
    angular
        .module('angularAPP')
        .controller('section2Controller', section2Controller);

    section2Controller.$inject = ['$location', 'global', 'scroll'];

    function section2Controller($location, global, scroll) {

        var vm = this;

        vm.pathname = location.pathname;
        vm.terms = terms;
        vm.init = init;
        
        function terms() {
            $location.path("/terminos");
        }

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
        function init(params) {
            var animation = bodymovin.loadAnimation({
                container: document.getElementById('animacion1Premio'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: "img/imgJson/palacio.json"
            })
        }
           
            
        



    }
})();

