'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:CharroomCtrl
 * @description
 * # CharroomCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('CharroomCtrl', function ($scope,charRoomService) {
    //$scope.chatHistory = [];
    $scope.chat = '';
    $scope.submitChat = function(){
      charRoomService.submitChat($scope.chat).then(function(response){
        getChatHistory();
      });
    };

    function getChatHistory(){
      //call the service API to get chat history
      charRoomService.getChatHistory().then(function(response){
        $scope.chatHistory = response.chatHistory;
      });
    }

    getChatHistory();

  });
