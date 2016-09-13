/**
 * Created by pjpandey on 9/9/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.student')
        .factory('Student', Student);

    function Student() {

        var Student = {};
        var Total;

        var service = {
            getFstName : getFstName,
            getLstName : getLstName,
            getState : getState,
            getCountry : getCountry,
            getCity : getCity,
            getCollege : getCollege,
            getDepartment :  getDepartment,
            getContact : getContact,
            getEmail : getEmail,
            getAge : getAge,
            getSex : getSex,
            getStudent : getStudent,
            setStudent : setStudent,
            getName : getName,
            setTotal : setTotal,
            getTotal : getTotal
        };

        return service;

        ////////////////

        function setTotal(total) {
            return Total = total
        }

        function getTotal() {
            return Total;
        }

        function getFstName() {
            return Student.fst_name
        }

        function getLstName() {
            return Student.lst_name;
        }

        function getState() {
            return Student.state;
        }

        function getSex() {
            return Student.sex;
        }

        function getAge() {
            return Student.age;
        }

        function getCountry() {
            return Student.country;
        }

        function getCity() {
            return Student.city;
        }

        function getName() {
            return Student.fst_name + ' ' + Student.lst_name;
        }

        function getStudent() {
            return Student;
        }

        function setStudent(stdnt) {
            return Student = stdnt;
        }

        function getContact() {
            return Student.contact;
        }

        function getEmail() {
            return Student.email;
        }

        function getCollege() {
            return Student.college;
        }

        function getDepartment() {
            return Student.department;
        }
    }
})();