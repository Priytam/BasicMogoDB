/**
 * Created by pjpandey on 9/12/2016.
 */
(function() {
    'use strict';

    angular.module('app.clg')
        .config(configure);

    function configure($routeProvider) {
        $routeProvider.when("/clg",
            {
                templateUrl: "college/clg.html",
                controller: "CLGCtrl",
                controllerAs: "vm",
                resolve: {
                    colleges : function (CLGApi) {
                        return CLGApi.all().then(_collect);
                        function _collect(res) {
                            return res.data;
                        }
                    }
                }
            }
        );
    }
})();