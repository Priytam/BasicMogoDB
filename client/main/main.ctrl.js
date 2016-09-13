/**
 * Created by pjpandey on 9/8/2016.
 */
(function() {
    'use strict';

    angular.module('app.main')
        .controller("MainCtrl", MainCtrl);

    function MainCtrl(Student, StudentApi, DPTApi, CLGApi, DPT, CLG, colleges, departments){
        var vm = this;

        vm.saveStudent = saveStudent;
        vm.addDepartment = addDepartment;
        vm.addCollege = addCollege;
        vm.dpt = {};
        vm.std = {};
        vm.clg = {};
        vm.clgs = colleges;
        vm.dpts = departments;
        activate();
        ////////////////

        function activate() {
            vm.totalStudent = Student.getTotal();
            vm.totalClg = CLG.getTotal();
            vm.totalDepts = DPT.getTotal();
        }

        function addDepartment(){
            vm.dpt.course = vm.dpt.course.split(',');
            DPTApi.save(vm.dpt).then(successCallback, errorCallback);
        }

        function addCollege(){
            CLGApi.save(vm.clg).then(successCallback, errorCallback);
        }

        function saveStudent(){
            vm.std.college = vm.std.college._id;
            vm.std.department = vm.std.department._id;
            StudentApi.save(vm.std).then(successCallback, errorCallback);
        }

        function successCallback(res){
            vm.res = res.data;
        }

        function errorCallback(err){
            vm.err = err.data;
        }
    }

})();
