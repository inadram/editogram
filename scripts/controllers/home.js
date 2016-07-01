'use strict';

function homeController($scope, $state, googleLogin) {
    $scope.home = function () {
        $state.go('editogramHome');
    };

    this.login = function () {
        googleLogin.login().then(function () {
            $state.go('editogram.documents');
        })
    }
}
angular
    .module('editogramApp')
    .controller('homeController', ['$scope', '$state', 'googleLogin', homeController]);
