
(function() {
	'use strict';

	angular.module("angularAPP")
	.factory( "pushAnalytics" , pushAnalytics );

	pushAnalytics.$inject = ["global"];

	function pushAnalytics (global) {  
        var service = {
		 	setConfigAnalytics: setConfigAnalytics
		};

		return service;

		function setConfigAnalytics(_args){
			        
            var obj0 = {
				'method': 'send',
				'type': 'event',
				'category': _args[0],
				'action': _args[1],
				'label': _args[2]
			};

			var obj1 = {
				'method': 'p_corporativo.send',
				'type': 'event',
				'category': _args[0],
				'action': _args[1],
				'label': _args[2]
			};
			var obj2 = {
				'method': 'p_pragma.send',
				'type': 'event',
				'category': _args[0],
				'action': _args[1],
				'label': _args[2]
			};
			var obj3 = {
				'method': 'p_pragma2.send',
				'type': 'event',
				'category': _args[0],
				'action': _args[1],
				'label': _args[2]
			};

			Analytics.push(obj0);
			Analytics.push(obj1);
			Analytics.push(obj2);   
			Analytics.push(obj3); 
        }
	};

}());