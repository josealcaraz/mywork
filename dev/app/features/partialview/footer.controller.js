(function () {
    'use strict';
    angular
        .module('angularAPP')
        .controller('footerController', footerController);

    footerController.$inject = ['$location', '$scope', 'scroll'];

    function footerController($location, $scope, scroll) {
        var vm = this;
        vm.pathname = location.pathname;
        vm.registro = registro;
        vm.subirHome = subirHome;

        function registro() {
            $location.path("/registro");
        }

        function subirHome(){
            scroll.scrollTo(0);
        }
        

    }
})();