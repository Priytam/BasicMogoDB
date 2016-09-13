/**
 * Created by pjpandey on 9/12/2016.
 */
(function() {
    'use strict';

    angular.module('app.core')
        .run(run);

    function run(StudentApi, Student, DPTApi, DPT, CLGApi, CLG) {
        StudentApi.all().then(setTotalStudent);
        function setTotalStudent(res) {
            Student.setTotal(res.data.length);
        }

        DPTApi.all().then(setTotalDPT);
        function setTotalDPT(res) {
            DPT.setTotal(res.data.length);
        }

        CLGApi.all().then(setTotalCLG);
        function setTotalCLG(res) {
            CLG.setTotal(res.data.length);
        }
    }
})();
