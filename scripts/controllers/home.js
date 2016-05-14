'use strict';

function homeController($scope, $state, loginService) {
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
    .controller('homeController', ['$scope', '$state', 'login.service', homeController]);
