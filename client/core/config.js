(function() {
    'use strict';

    angular.module('app.core')
        .config(configure);

    function configure($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptor');

    }
})();
