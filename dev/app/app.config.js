(function() {
"use strict";
	angular
	    .module('angularAPP')
	    .run(run);
	run.$inject = ['$rootScope','lightbox','toast'];
	
	function run($rootScope,lightbox,toast) {		
		lightbox.register();
		
		toast.start({toastWrapId: 'myToast', messageWrap: 'toasMsgWrap',
                        closeBtn: 'toastClose', autoClose: true, timeClose: 6000})
	}
	
})();