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
  .module('editogramApp')
  .controller('sessionCtrl', ['$scope', '$state', sessionCtrl]);
