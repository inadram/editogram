angular.module('editogramApp').service('googleDocument', [function () {

    var scriptId = "Ma6ncAq21JtoBzBI8bNMYHnwViysYH0JF";

    this.makeRequest = function (command) {
        return gapi.client.request({
            'root': 'https://script.googleapis.com',
            'path': 'v1/scripts/' + scriptId + ':run',
            'method': 'POST',
            'body': {'function': command}
        });
    };
    
    this.createDocument = function () {
        this.makeRequest('create').execute(function (resp) {
            console.log(resp);
        });
    }

}]);
