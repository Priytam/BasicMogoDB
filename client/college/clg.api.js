/**
 * Created by pjpandey on 9/9/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.clg')
        .factory('CLGApi', CLGApi);

    function CLGApi($http) {

        var service = {
            save : save,
            update : update,
            remove : remove,
            all : all,
            read : read
        };

        return service;

        ////////////////
        function save(clg) {
            return $http.post('/api/college', clg);
        }

        function all() {
            return $http.get('/api/college');
        }

        function read(id) {
            return $http.get('/api/college/' + id);
        }

        function update() {
            return $http.get('/api/Priytam/Male?graduation=B.Tech&employed=Intel&designation=Developer');
        }

        function remove() {
            return $http.get('/api/Priytam/Male?graduation=B.Tech&employed=Intel&designation=Developer');
        }


    }
})();