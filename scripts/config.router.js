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
                .state('app', {
                    abstract: true,
                    templateUrl: 'views/common/layout.html',
                })
                .state('app.home', {
                    url: '/',
                    templateUrl: 'views/home.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                {
                                    insertBefore: '#load_styles_before',
                                    files: [
                                        'styles/climacons-font.css',
                                        'vendor/rickshaw/rickshaw.min.css'
                                    ]
                                },
                                {
                                    serie: true,
                                    files: [
                                        'vendor/d3/d3.min.js',
                                        'vendor/rickshaw/rickshaw.min.js',
                                        'vendor/flot/jquery.flot.js',
                                        'vendor/flot/jquery.flot.resize.js',
                                        'vendor/flot/jquery.flot.pie.js',
                                        'vendor/flot/jquery.flot.categories.js',
                                    ]
                                },
                                {
                                    name: 'angular-flot',
                                    files: [
                                        'vendor/angular-flot/angular-flot.js'
                                    ]
                                }]).then(function () {
                                return $ocLazyLoad.load('scripts/controllers/home.js');
                            });
                        }]
                    },
                    data: {
                        title: 'Home',
                    }
                })


                // UI Routes
                .state('app.ui', {
                    template: '<div ui-view></div>',
                    abstract: true,
                    url: '/ui',
                })
                .state('app.ui.new', {
                    url: '/new-document',
                    templateUrl: 'views/form-editors.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load('scripts/controllers/editor.js');
                        }]
                    },
                    data: {
                        title: 'new Document',
                    }
                })

                .state('user', {
                    templateUrl: 'views/common/session.html',
                })
                .state('user.signin', {
                    url: '/signin',
                    templateUrl: 'views/extras-signin.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                {
                                    serie: true,
                                    files: [
                                        'https://apis.google.com/js/client.js?onload=checkAuth'
                                    ]
                                }]).then(function () {
                                return $ocLazyLoad.load('scripts/controllers/session.js').then(function () {
                                    return $ocLazyLoad.load('scripts/service/login.service.js');
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
