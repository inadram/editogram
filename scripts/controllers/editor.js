'use strict';

function editorCtrl($scope) {
   $scope.opt1 = {
    toolbar: {
      fa: true
    }
  };
}

angular
  .module('editogramApp')
  .controller('editorCtrl', ['$scope', editorCtrl]);
