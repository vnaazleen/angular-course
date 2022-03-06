(function() {
'use strict';

    angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.message=""
        $scope.menu = ""
        $scope.color = ""


        $scope.checkMenu = function () {
            if($scope.menu == "") {
                $scope.color = "red"
                $scope.message = "Please enter data first";
                return;
            }

            $scope.color = "green"
            var totalItems = $scope.menu.split(",").length;
            if(totalItems <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        }
    }
})();