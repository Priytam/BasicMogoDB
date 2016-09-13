/**
 * Created by pjpandey on 9/8/2016.
 */
(function() {
    'use strict';

    angular.module('app.clg')
        .controller("CLGCtrl", CLGCtrl);

    function CLGCtrl(CLG, colleges){
        var vm = this;

        vm.removeStudent = removeStudent;
        vm.clgs = colleges;

        activate();
        ////////////////

        function activate() {
        }

        function removeStudent(){
            College.remove().then(successCallback, errorCallback);
        }

        function successCallback(res){
            vm.res = res.data;
        }

        function errorCallback(err){
            vm.err = err.data;
        }
    }

})();
