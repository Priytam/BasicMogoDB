/**
 * Created by pjpandey on 9/12/2016.
 */
(function() {
    'use strict';

    angular.module('app.student')
        .config(configure);

    function configure($routeProvider) {
        $routeProvider.when("/student",
            {
                templateUrl: "student/student.html",
                controller: "StudentCtrl",
                controllerAs: "vm",
                resolve: {
                    students : function (StudentApi) {
                        return StudentApi.all().then(_collect);
                        function _collect(res) {
                            return res.data;
                        }
                    }
                }
            }
        );
    }
})();