(function() {
	'use strict';
    
    angular.module("angularAPP")
	.service( "scroll" , scroll );
    //scroll.$inject = [];

	function scroll(){

        var service={
            scrollTo: scrollTo
        }
        return service;
        
        function scrollTo(element, time){
            time || ( time = 300 );
            //Se resta el alto y le margin del menu para que no tape los titulos
            $('html, body').animate({ scrollTop: element}, time);
        };     
	};
}());

