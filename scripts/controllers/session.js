'use strict';

function sessionCtrl($scope, $state) {
  $scope.signin = function () {
    $state.go('user.signin');
  };

  $scope.submit = function () {
    $state.go('app.home');
  };
}

angular
  .module('urbanApp')
  .controller('sessionCtrl', ['$scope', '$state', sessionCtrl]);
