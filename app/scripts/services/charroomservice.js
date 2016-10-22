'use strict';

/**
 * @ngdoc service
 * @name myAppApp.charRoomService
 * @description
 * # charRoomService
 * Factory in the myAppApp.
 */
angular.module('myAppApp')
  .factory('charRoomService', function ($q,$http) {
    var service = {
      getChatHistory:getChatHistory,
      submitChat:submitChat
    };

    var serverAddress = "http://localhost:3000/chat/";

    function getChatHistory(){
      var deferred = $q.defer();
      $http.get(serverAddress+"getChatHistory")
        .success(function(data){
          deferred.resolve(data);
        }).error(function(err){
          deferred.reject(err);
          console.log('failed to get data');
        });
      return deferred.promise;
    }

    function submitChat(chatString){
      var deferred = $q.defer();
      var data = {chat:chatString};
      $http.post(serverAddress+"submitChat",data)
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
