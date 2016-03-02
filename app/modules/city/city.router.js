'use strict';

module.exports = function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/cities");


    $stateProvider
        .state('cities', {
            url: "/cities",
            controller: "CityController as vm",
            templateUrl: "cityTable.html"
        })

};