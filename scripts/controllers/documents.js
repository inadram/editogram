'use strict';

function documentsController(googleDocument, $scope) {
    googleDocument.create().then(function (response) {
        console.log(response);
    })
}

angular
    .module('editogramApp')
    .controller('documentsController', ['googleDocument','$scope', documentsController]);
