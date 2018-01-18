(function() {
    "use strict";
    angular
        .module('angularAPP')
        .config(routes);

    routes.$inject = ["$routeProvider"];
    
    function routes($routeProvider ) {
        $routeProvider  
            .when("/home", {
                templateUrl : "app/features/home/home.view.html",
                controller  : "homeController",
                controllerAs: "vm",
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
  

})();
