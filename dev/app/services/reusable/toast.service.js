(function() {
	'use strict';
	
	angular.module("angularAPP")
		.factory( "toast" , toast );


	function toast () {  
        var service = {
		 	ini: false,
		 	start: start,
		 	log: log,
		 	events: events,
		 	hiden: hiden,
		};
		
		return service;

		function start(obj){
        	this.toastWrapId = document.getElementById(obj.toastWrapId);
        	this.messageWrap = document.getElementById(obj.messageWrap);
        	this.closeBtn = document.getElementById(obj.closeBtn);
        	this.autoClose = obj.autoClose;
        	this.timeClose = obj.timeClose || 5000;
        	this.events();
        };

        function events(){
        	var self = this;
        	this.closeBtn.addEventListener("click", function(){self.hiden.apply(self)})
        }

        function log(p_message, className){
   
        	var self = this;
        	this.classNameAfter = className;
        	if(this.autoClose) {
				setTimeout(function(){self.hiden.apply(self)}, this.timeClose);
			}
    		this.messageWrap.innerHTML = p_message;
    		this.toastWrapId.classList.add(className);
    		this.toastWrapId.parentElement.classList.add("toastOpen");
			console.log("entro a toast");
        };

        function hiden(){
    		this.toastWrapId.classList.remove(this.classNameAfter);
    		this.toastWrapId.parentElement.classList.remove("toastOpen");
        };
	};
}());