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
    .constant('clientId','329602615387-ae6ftegcmp75g8am2v23h097e0hl83pe.apps.googleusercontent.com')
    .constant('scope', ['email', 'profile', 'https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/documents'])
    .constant('loadApis', {
        'drive' : 'v2'
    });
