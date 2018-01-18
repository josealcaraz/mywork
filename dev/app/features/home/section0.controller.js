(function () {
    'use strict';
    angular
        .module('angularAPP')
        .controller('section0Controller', section0Controller);

    section0Controller.$inject = ['$location', 'global', 'lightbox'];

    function section0Controller($location, global, lightbox) {

        var vm = this;
        vm.pathname = location.pathname;
        vm.init = init;

        $(document).mousemove(function (event) {
            var posX = event.pageX / 20;
            var posY = event.pageY / 20;
            $(".balon").css("transform", "translate3d(" + posX + "px, " + posY + "px, 0px)");

        });

        function init() {
            
            
        }
           




    }
})();

