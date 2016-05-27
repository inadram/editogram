angular.module('editogramApp').service('googleLogin', ['$q', 'clientId', 'scope', function ($q, clientId, scope) {

    var isTokenValid = function () {
        var token = gapi.auth.getToken();
        return (token && Date.now() < token.expires_at);
    };

    var buildAuthRequest = function (immediateMode, user) {
        var request = {
            client_id: clientId,
            scope: scope,
            immediate: immediateMode
        };
        if (user) {
            request.login_hint = user;
            request.authuser = -1;
        }
        return request;
    };

    var executeRequest = function (request) {
            if (isTokenValid()) {
                return gapi.auth.getToken();
            } else {
                var deferred = $q.defer();
                gapi.auth.authorize(request, function (result) {
                    if (result && !result.error) {
                        deferred.resolve(result);
                    } else {
                        var error = result ? result.error : 'Unknown authentication error';
                        deferred.reject(error);
                    }
                });
                return deferred.promise;
            }
    };

    this.login = function (user) {
        var request = buildAuthRequest(false, user);
        return executeRequest(request);
    };
   
}]);
