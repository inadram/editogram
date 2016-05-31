angular.module('editogramApp').directive('preloader', function preloader($rootScope, $timeout) {
      return {
        restrict: 'EA',
        link: function (scope, element) {
          $rootScope.$on('$stateChangeStart', function () {
            $timeout(function () {
              element.removeClass('ng-hide');
            });
          });

          $rootScope.$on('$stateChangeSuccess', function () {
            $rootScope.$watch('$viewContentLoaded', function () {
              $timeout(function () {
                element.addClass('ng-hide');
              }, 1500);
            });
          });

        }
      };
    }
);