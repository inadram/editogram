'use strict';

function documentsController(googleDocument, $scope) {
    googleDocument.getAll().then(function (response) {
        $scope.documents =response.response.result;
    })
}

angular
    .module('editogramApp')
    .controller('documentsController', ['googleDocument','$scope', documentsController]);
