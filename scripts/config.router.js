'use strict';


angular
    .module('editogramApp')
    .run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.$on('$stateChangeSuccess', function () {
                window.scrollTo(0, 0);
            });
            FastClick.attach(document.body);
        },
    ])
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            // For unmatched routes
            $urlRouterProvider.otherwise('/');

            // Application routes
            $stateProvider
                .state('editogram', {
                    abstract: true,
                    templateUrl: 'views/common/layout.html',
                })
                .state('editogram.documents', {
                    url: '/documents',
                    templateUrl: 'views/documents.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load('scripts/controllers/documents.js');
                        }]
                    }   ,
                    data: {
                        title: 'Documents',
                    }
                })

                .state('editogram.editor', {
                    url: '/editor',
                    templateUrl: 'views/editor.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load('scripts/controllers/editor.js');
                        }]
                    },
                    data: {
                        title: 'new Document',
                    }
                })

                .state('editogramHome', {
                    templateUrl: 'views/common/home.html',
                })
                .state('editogramHome.home', {
                    url: '/',
                    templateUrl: 'views/home.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                {
                                    serie: true,
                                    files: [
                                        'https://apis.google.com/js/client.js?onload=checkAuth'
                                    ]
                                }]).then(function () {
                                return $ocLazyLoad.load('scripts/controllers/home.js').then(function () {
                                    return $ocLazyLoad.load('scripts/service/googleLogin.js');
                                });
                            });

                        }]
                    },
                    data: {
                        appClasses: 'bg-white usersession',
                        contentClasses: 'full-height'
                    }
                })


        }])
    .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            debug: false,
            events: false
        });
    }]);
