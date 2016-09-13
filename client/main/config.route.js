/**
 * Created by pjpandey on 9/12/2016.
 */
(function() {
    'use strict';

    angular.module('app.main')
        .config(configure);

    function configure($routeProvider) {
        $routeProvider.when("/",
            {
                templateUrl: "main/main.html",
                controller: "MainCtrl",
                controllerAs: "vm",
                resolve: {
                    colleges : function (CLGApi) {
                        return CLGApi.all().then(_collect);
                        function _collect(res) {
                            return res.data;
                        }
                    },
                    departments : function (DPTApi) {
                        return DPTApi.all().then(_collect);
                        function _collect(res) {
                            return res.data;
                        }
                    }
                }
            }
        );
    }
})();