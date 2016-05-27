'use strict';

angular
  .module('editogramApp')
  .controller('AppCtrl', ['$scope', '$http', '$localStorage',
        function AppCtrl($scope, $http, $localStorage) {

      $scope.mobileView = 767;

      $scope.app = {
        name: 'editogram',
        layout: {
          isSmallSidebar: false,
          sidebarTheme: '',
          headerTheme: ''
        }
      };

      $scope.user = {
        fname: 'Samuel',
        lname: 'Perkins',
        jobDesc: 'Human Resources Guy'
      };

      if (angular.isDefined($localStorage.layout)) {
        $scope.app.layout = $localStorage.layout;
      } else {
        $localStorage.layout = $scope.app.layout;
      }

      $scope.$watch('app.layout', function () {
        $localStorage.layout = $scope.app.layout;
      }, true);
    }
]);
