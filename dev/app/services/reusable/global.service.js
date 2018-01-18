(function() {
   'use strict';
    angular
       .module('angularAPP')
       .value('global', {
          instructions : false,
          compraTicket:false,
          sesionIniciada: false,
          activityActive: true,
          userstop: 0,
          useractive: false,
           menuInicio:true,
           menuParticipa:false,
           tamanioseccion2:0,
           registro:false,
           animatedLogo: null,
           entroAtop: true,
           userNoInscrito: false,
           accessKeyId: "",
           secretAccessKey: "",
           sessionToken: ""



       });
})();