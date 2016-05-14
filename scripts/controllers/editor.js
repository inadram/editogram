'use strict';

function editorController($scope) {
   $scope.opt1 = {
    toolbar: {
      fa: true
    }
  };
}

angular
  .module('editogramApp')
  .controller('editorController', ['$scope', editorController]);
