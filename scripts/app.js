'use strict';

angular
    .module('editogramApp', [
        'ui.router',
        'ui.bootstrap',
        'oc.lazyLoad',
        'ngStorage',
        'ngSanitize',
        'ngTouch'
    ])
    .constant('apiKey', null)
    .constant('clientId', '329602615387-pgiles9j9h4hhh14s8697ub7umsiakqj.apps.googleusercontent.com')
    .constant('scope', ['email', 'profile', 'https://www.googleapis.com/auth/drive'])
    .constant('loadApis', {
        'drive' : 'v2'
    });
