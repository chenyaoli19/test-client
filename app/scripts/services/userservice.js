'use strict';

/**
 * @ngdoc service
 * @name myAppApp.userService
 * @description
 * # userService
 * Factory in the myAppApp.
 */
angular.module('myAppApp')
  .factory('userService', function ($q,$http) {
    var service = {
        getAllUsers:getAllUsers,
        getUsersByFood:getUsersByFood,
        getUsersByAge:getUsersByAge
      },
    serverAddress = 'http://localhost:3000/';

    function getAllUsers(){
      var deferred = $q.defer();
      $http.get(serverAddress+'users')
        .success(function(data){
          deferred.resolve(data);
        }).error(function(err){
          deferred.reject(err);
          console.log('failed to get data');
        });
      return deferred.promise;
    }

    function getUsersByFood(food){
      var deferred = $q.defer();
      $http.get(serverAddress+'users/findByFood/'+food)
        .success(function(data){
          deferred.resolve(data);
        }).error(function(err){
          deferred.reject(err);
          console.log('failed to get data');
        });
      return deferred.promise;
    }

    function getUsersByAge(lb,ub){
      var deferred = $q.defer(),
          data = {lowerBound:lb,upperBound:ub};
      $http.post(serverAddress+'users/ageGroup',data)
        .success(function(data){
          deferred.resolve(data);
        }).error(function(err){
          deferred.reject(err);
          console.log('failed to get data');
        });
      return deferred.promise;
    }

    return service;
  });
