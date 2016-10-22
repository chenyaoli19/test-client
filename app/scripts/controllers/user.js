'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('UserCtrl', function ($scope,userService) {
    $scope.users = [];
    $scope.usersByFood = [];
    $scope.usersByAge = [];
    userService.getAllUsers().then(function(response){
      $scope.users = response.users;
    },function(err){
      console.log('error to find users: ',err);
    });
    //add a user
    $scope.addUser = function(){

    };
    //watches on the inputs
    $scope.$watch('food',function(newValue){
      userService.getUsersByFood(newValue).then(function(response){
        $scope.usersByFood = response.users;
      },function(err){
        console.log('error find user by food: ',err);
      });
    });
    $scope.$watch('lowerAge',function(newLBValue){
      userService.getUsersByAge(newLBValue,$scope.upperAge).then(function(response){
        $scope.usersByAge = response.users;
      },function(err){
        console.log('error find user by age: ',err);
      });
    });
    $scope.$watch('upperAge',function(newUBValue){
      userService.getUsersByAge($scope.lowerAge,newUBValue).then(function(response){
        $scope.usersByAge = response.users;
      },function(err){
        console.log('error find user by age: ',err);
      });
    });
  });
