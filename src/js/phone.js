/**
 * Created by Administrator on 2016/10/18.
 */
angular.module('phone',['pp.service'])
    .controller('phoneController',function($scope, MainService,$rootScope){
        var data = $scope.data = {};
        var actions = $scope.actions = {};
        //MainService.aHrefClass = 'phone';
        $rootScope.aHrefClass = 'phone';
    });