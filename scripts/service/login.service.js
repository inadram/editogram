angular.module('editogramApp').service('login.service', ['$q', 'clientId', 'scope', function ($q, clientId, scope) {
    
  var isTokenValid = function() {
    var token = gapi.auth.getToken();
    return (token && Date.now() < token.expires_at);
  };
    
  var buildAuthRequest = function(immediateMode, user) {
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
    
  var executeRequest = function(request) {
      gapi.auth.authorize(request, function (result) {
           alert(JSON.stringify(result));
      });
      return false;
  };
    
  this.login = function (user) {
    var request = buildAuthRequest(false, user);
    return executeRequest(request);
  };
    
  this.checkAuth = function(user) {
    var request = buildAuthRequest(true, user);
    return executeRequest(request);
  };

}]);
