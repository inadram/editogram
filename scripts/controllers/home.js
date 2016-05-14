'use strict';

function homeController($scope, $state, googleLogin) {
    $scope.signin = function () {
        $state.go('editogramHome');
    };

    $scope.submit = function () {
        googleLogin.login().then(function () {
            $state.go('editogram.documents');
        })
    };
}
angular
    .module('editogramApp')
    .controller('homeController', ['$scope', '$state', 'googleLogin', homeController]);
