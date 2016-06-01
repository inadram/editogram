'use strict';

function documentsController(googleDocument, $scope) {

    getAllDocuments();

    function getAllDocuments(continuationToken) {
        googleDocument.getAll(continuationToken).then(function (response) {
            $scope.documents = $scope.documents || [];
            var documents = response.response.result;
            $scope.lastToken = documents[documents.length-1].continuationToken;
            $scope.documents.push.apply($scope.documents, documents);
            
        });
    }

    $scope.loadMore = function () {
        $scope.push(getAllDocuments($scope.lastToken))
    }
}

angular
    .module('editogramApp')
    .controller('documentsController', ['googleDocument', '$scope', documentsController]);
