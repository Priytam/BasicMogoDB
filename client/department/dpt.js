/**
 * Created by pjpandey on 9/9/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.dpt')
        .factory('DPT', DPT);

    function DPT(DPTApi) {

        var DPT = {};
        var Total;

        var service = {
            getName : getName,
            getCourses : getCourses,
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

        function getCourses() {
            return DPT.course;
        }

        function getName() {
            return DPT.name;
        }

        function init(id) {
            DPTApi.read(id).then(gotDPT);
            function gotDPT(res) {
                DPT = res.data;
            }
        }
    }
})();