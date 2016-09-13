/**
 * Created by pjpandey on 9/8/2016.
 */
(function() {
    'use strict';

    angular.module('app.dpt')
        .controller("DPTCtrl", DPTCtrl);

    function DPTCtrl(DPT, departments){
        var vm = this;
        vm.removeStudent = removeStudent;
        vm.dpts = departments;
        activate();
        ////////////////

        function activate() {
        }

        function removeStudent(){
            DPT.remove().then(successCallback, errorCallback);
        }

        function successCallback(res){
            vm.res = res.data;
        }

        function errorCallback(err){
            vm.err = err.data;
        }
    }

})();
