/**
 * Created by pjpandey on 9/8/2016.
 */
(function() {
    'use strict';

    angular.module('app.student')
        .controller("StudentCtrl", StudentCtrl);

    function StudentCtrl(Student, students){
        var vm = this;

        vm.saveStudent = saveStudent;
        vm.removeStudent = removeStudent;
        vm.stds = students;
        activate();
        ////////////////

        function activate() {
            vm.totalStudent = Student.getTotal();
        }

        function saveStudent(){
            Student.save().then(successCallback, errorCallback);
        }

        function removeStudent(){
            Student.remove().then(successCallback, errorCallback);
        }

        function successCallback(res){
            vm.res = res.data;
        }

        function errorCallback(err){
            vm.err = err.data;
        }
    }

})();
