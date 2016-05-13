'use strict';

function sessionCtrl($scope, $state, loginService) {
    $scope.signin = function () {
        $state.go('user.signin');
    };

    $scope.submit = function () {
        loginService.login().then(function () {
            $state.go('app.home');
        })
    };
}
angular
    .module('editogramApp')
    .controller('sessionCtrl', ['$scope', '$state', 'login.service', sessionCtrl]);
