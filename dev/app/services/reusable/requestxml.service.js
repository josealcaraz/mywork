(function() {
	'use strict';

	angular.module("angularAPP")
	.service( "requestxml" , requestxml );

	requestxml.$inject = ["$http","$location","$q"];

	function requestxml ($http,$location,$q) {
        
		var service = {
		 	servicerequest: servicerequest,
            xmlToJson: xmlToJson,
            buildBody: buildBody
		};

		return service;

		function servicerequest(obj){
            var defered = $q.defer(); 
            var promise = defered.promise;
			var vm = this;
            
            var request=buildBody({
                name: obj.name,
                params: obj.params       
            });
            var type ={}
            var urlService = obj.url, methodService = "POST";

            if( $location.host() === "localhost" ){
                urlService = obj.urllocal,  methodService = "GET";
            }
	        $http({
	                method: methodService,
	                url: urlService,
                    headers: {
                        'Content-Type': 'text/xml'
                    },
                    data: request
	            }).then(function(response){
                    var parser = new DOMParser();
                    var xmlDoc = parser.parseFromString(response.data,"text/xml");
                    response = service.xmlToJson(xmlDoc)['soap:Envelope']['soap:Body'][obj.name + 'Response'][obj.name + 'Result']['#text'];
                    response = JSON.parse(response);
                    defered.resolve(response);
                }, function(response){
                    defered.reject(response);
                });
            return promise;
	 	};

        function buildBody(p_obj) {
            var tam=p_obj.params.length;
            var TEMPLATEHEAD,
                TEMPLATEFOOTER;

            TEMPLATEHEAD = 
                        '<?xml version="1.0" encoding="utf-8"?>'+
                            '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'+
                                '<soap:Body>';

            TEMPLATEFOOTER = 
                            '</soap:Body>'+
                        '</soap:Envelope>';
            var temp = '';
            temp = '<' + p_obj.name + ' xmlns="http://tempuri.org/">';
            for(var i =0;i<tam;i++){
                temp += '<' + p_obj.params[i].key + '>'+p_obj.params[i].val+'</' + p_obj.params[i].key + '>';
            }
            temp += '</' + p_obj.name + '>';

            temp = TEMPLATEHEAD + temp + TEMPLATEFOOTER;
            
            return temp;
        };

         function xmlToJson(xml) {
    
            // Create the return object
            var obj = {};

            if (xml.nodeType == 1) { // element
            // do attributes
            if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
                for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                }
            }
            } else if (xml.nodeType == 3) { // text
            obj = xml.nodeValue;
            }

            // do children
            if (xml.hasChildNodes()) {
            for(var i = 0; i < xml.childNodes.length; i++) {
                var item = xml.childNodes.item(i);
                var nodeName = item.nodeName;
                if (typeof(obj[nodeName]) == "undefined") {
                obj[nodeName] = service.xmlToJson(item);
                } else {
                if (typeof(obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(service.xmlToJson(item));
                }
            }
            }
            return obj;
        };

	};

}());