angular.module('editogramApp').service('googleDocument', ['$q', function ($q) {

    var scriptId = "Ma6ncAq21JtoBzBI8bNMYHnwViysYH0JF";

    var makeRequest = function (command) {
        return gapi.client.request({
            'root': 'https://script.googleapis.com',
            'path': 'v1/scripts/' + scriptId + ':run',
            'method': 'POST',
            'body': {'function': command}
        });
    };

    var execute = function (command) {
        var deferred = $q.defer();
        makeRequest(command).execute(function (resp) {
            deferred.resolve(resp);
        });
        return deferred.promise;
    };

    this.getAll = function () {
       return execute('getAll');
    };

    this.create = function () {
        return execute('create');
    };

}]);
