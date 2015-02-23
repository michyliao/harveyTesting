angular.module('starter.controllers', [])

.controller('ChatsCtrl', function($scope, Chats) {

})

.controller('LoginCtrl', function ($scope){
  console.log('In Login Ctrl');
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
