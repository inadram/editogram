'use strict';

/**
 * @ngdoc overview
 * @name editogramApp
 * @description
 * # urbanApp
 *
 * Main module of the application.
 */
angular
    .module('editogramApp', [
        'ui.router',
        'ngAnimate',
        'ui.bootstrap',
        'oc.lazyLoad',
        'ngStorage',
        'ngSanitize',
        'ui.utils',
        'ngTouch'
    ])
    .constant('apiKey', null)
    .constant('clientId', '329602615387-pgiles9j9h4hhh14s8697ub7umsiakqj.apps.googleusercontent.com')
    .constant('scope', ['email', 'profile', 'https://www.googleapis.com/auth/drive'])
    .constant('loadApis', {
        'drive' : 'v2'
    })
    .constant('COLORS', {
        'default': '#e2e2e2',
        primary: '#09c',
        success: '#2ECC71',
        warning: '#ffc65d',
        danger: '#d96557',
        info: '#4cc3d9',
        white: 'white',
        dark: '#4C5064',
        border: '#e4e4e4',
        bodyBg: '#e0e8f2',
        textColor: '#6B6B6B',
    });
