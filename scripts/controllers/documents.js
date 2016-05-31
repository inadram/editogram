'use strict';

function documentsController(googleDocument, $scope) {

    getAllDocuments();

    function getAllDocuments(continuationToken) {
        googleDocument.getAll(continuationToken).then(function (response) {
            $scope.documents = response.response.result;
        });
    }


    $scope.loadMore = function (continuationToken) {
      $scope.push(getAllDocuments(continuationToken))
    }
}

angular
    .module('editogramApp')
    .controller('documentsController', ['googleDocument','$scope', documentsController]);
