'use strict';

function newFile(){
     return {
        restrict: 'E',
        templateUrl:'views/directive/button/newFile.html'
    };
}

angular.module('editogramApp').directive('newFile', newFile);