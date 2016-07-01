'use strict';

function documentFile(){
     return {
        restrict: 'E',
        templateUrl:'views/directive/button/document.html'
    };
}

angular.module('editogramApp').directive('document', documentFile);