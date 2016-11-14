angular.module("http01",[])
.controller("http01Controller", function($scope, $http){
    var data = $scope.data = {};
    $scope.msg = "hello world";
    $scope.tab = function () {
            $http({
                method: 'get',
                url: '../data/data.json'
            })
            .success(function(d){
                $scope.msg = d;
                // $scope.$apply();
            })
        }
})