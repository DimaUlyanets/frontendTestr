'use strict';

module.exports = function($q, $http) {

    var apiUrl = 'http://52.29.128.199/test/api.php';//TODO: move this to configuration file

    return {
        getCities: getCities
    };

    function getCities(options){
        options = options ? $.param(options) : '';
        var deferred = $q.defer();
        $http.get(apiUrl + '?' + options).then(function(resp) {
            deferred.resolve(resp.data);
        }, function(err) {
            deferred.reject(err);
        });
        return deferred.promise;
    }


};