/**
 * Created by pjpandey on 9/9/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.dpt')
        .factory('DPTApi', DPTApi);

    function DPTApi($http) {

        var service = {
            save : save,
            update : update,
            remove : remove,
            all : all,
            read : read
        };

        return service;

        ////////////////
        function save(dpt) {
            return $http.post('/api/department', dpt);
        }

        function all() {
            return $http.get('/api/department');
        }

        function read(id) {
            return $http.get('/api/department/' + id);
        }

        function update() {
            return $http.get('/api/Priytam/Male?graduation=B.Tech&employed=Intel&designation=Developer');
        }

        function remove() {
            return $http.get('/api/Priytam/Male?graduation=B.Tech&employed=Intel&designation=Developer');
        }


    }
})();