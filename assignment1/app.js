(function() {
'use strict';

    angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.message=""
        $scope.menu = ""
        $scope.color = ""
        $scope.borderColor= "";  


        $scope.checkMenu = function () {
            if($scope.menu == "") {
                $scope.color = {"color":"red"}
                $scope.borderColor={"border-color":"red"};  
                $scope.message = "Please enter data first";
                return;
            }

            $scope.color = {"color":"green"}
            $scope.borderColor={"border-color":"green"};  
            var totalItems = $scope.menu.split(",").length;
            if(totalItems <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        }
    }
})();