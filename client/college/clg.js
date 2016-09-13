/**
 * Created by pjpandey on 9/9/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.clg')
        .factory('CLG', CLG);

    function CLG(CLGApi) {

        var CLG = {};
        var Total;

        var service = {
            getName : getName,
            getState : getState,
            getCity : getCity,
            getCountry : getCountry,
            getEmail : getEmail,
            getContact : getContact,
            init : init,
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

        function getState() {
            return CLG.course;
        }

        function getCity() {
            return CLG.city;
        }

        function getCountry() {
            return CLG.country;
        }

        function getEmail() {
            return CLG.email;
        }

        function getContact() {
            return CLG.contact;
        }

        function getName() {
            return CLG.name;
        }

        function init(id) {
            CLGApi.read(id).then(gotCLG);
            function gotCLG(res) {
                CLG = res.data;
            }
        }
    }
})();