(function() {
    'use strict';
    angular
        .module('angularAPP')
        .controller('homeController', homeController);

    homeController.$inject = ['lightbox', '$location',  '$scope'];

    function homeController(lightbox, $location, $scope) {
  
        var vm = this;
        vm.pathname = location.pathname;
        vm.top= top;
        vm.openTerms = openTerms;
        var circle = $(".circle");
        // The 'animated' bool serves as a toggle \\
        var animated = false;
        

        var circle2 = $(".circleTYC");
        var animated2 = false;


        function openTerms() {
            $('.circleTYC').addClass("circleActive");
            $(".circleTYC").css("border-radius", "50%");
            if (!animated2) {
                circle2.velocity({
                    "width": "2000px",
                    "height": "2000px",
                    backgroundColor: "#DAFAF7"
                }, 300, [0.4, 0.0, 0.2, 1]);
                // Animate top and left properties with different easings \\
                // to create an arc-like movement path                    \\
                circle2.velocity({
                    "top": "50%"
                }, {
                        duration: 300,
                        easing: "easeInSine",
                        queue: false
                    });
                circle2.velocity({
                    "left": "50%"
                }, {
                        duration: 300,
                        easing: "easeOutSine",
                        queue: false
                    });

                // Toggle the animated bool to active the return animation \\
                // on the next click                                       \\
                animated2 = !animated2;
                setTimeout(function () {
                    $location.path("/terminos");
                    $scope.$apply();
                }, 300);

            }
        }

        
        angular.element(document).ready(function () {
           
            
            lightbox.closePreload();
        });

        function top() {
            $('.circle').addClass("circleActive");
            if (!animated) {
                circle.velocity({
                    "width": "2000px",
                    "height": "2000px",
                    backgroundColor: "#66AB4D"
                }, 300, [0.4, 0.0, 0.2, 1]);
                // Animate top and left properties with different easings \\
                // to create an arc-like movement path                    \\
                circle.velocity({
                    "top": "50%"
                }, {
                        duration: 300,
                        easing: "easeInSine",
                        queue: false
                    });
                circle.velocity({
                    "left": "50%"
                }, {
                        duration: 300,
                        easing: "easeOutSine",
                        queue: false
                    });

                // Toggle the animated bool to active the return animation \\
                // on the next click                                       \\
                animated = !animated;
                setTimeout(function () {
                    $location.path("/game");
                    $scope.$apply();
                }, 300);
                  
            } /*else {
                circle.velocity({
                    "width": "100px",
                    "height": "100px",
                    "border-radius": "50%",
                    backgroundColor: "#8BC34A"
                }, 250, [0.4, 0.0, 0.2, 1]);
                circle.velocity({
                    "top": "90%"
                }, {
                        duration: 250,
                        easing: "easeOutSine",
                        queue: false
                    });
                circle.velocity({
                    "left": "95%"
                }, {
                        duration: 250,
                        easing: "easeInSine",
                        queue: false
                    });
                animated = !animated;
            }*/
            
        }
        vm.someOptions = {
            navigation: true,
            navigationPosition: 'right',
            scrollBar: true,
            responsiveWidth: 990,

        }
        
  
    }
})();

