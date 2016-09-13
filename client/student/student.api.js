/**
 * Created by pjpandey on 9/9/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.student')
        .factory('StudentApi', StudentApi);

    function StudentApi($http) {

        var allStudentPromise;

        var service = {
            save : save,
            update : update,
            remove : remove,
            all : all
        };

        return service;

        ////////////////

        function save(std) {
            return $http.post('/api/student', std);
        }

        function all() {
            return $http.get('/api/student');
        }

        function update() {
            return $http.get('/api/Priytam/Male?graduation=B.Tech&employed=Intel&designation=Developer');
        }

        function remove() {
            return $http.get('/api/Priytam/Male?graduation=B.Tech&employed=Intel&designation=Developer');
        }
    }
})();