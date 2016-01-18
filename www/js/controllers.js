angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $ionicPlatform, $state, Camera) {

  //Take Photo
  $scope.takePhoto = function() {
    Camera.getPicture(
      // Success callback
      function(data) {
        $scope.image = "data:image/jpeg;base64," + data;
      },
      // Error callback
      function() {
        $ionicPopup.alert({ title: 'Falhou', template: 'Não foi possível tirar a foto. Tente novamente, por favor.' });
      }
    );
  };
});