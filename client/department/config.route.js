/**
 * Created by pjpandey on 9/12/2016.
 */
(function() {
    'use strict';

    angular.module('app.dpt')
        .config(configure);

    function configure($routeProvider) {
        $routeProvider.when("/dpt",
            {
                templateUrl: "department/dpt.html",
                controller: "DPTCtrl",
                controllerAs: "vm",
                resolve: {
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