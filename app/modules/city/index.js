'use strict';

var router = require('./city.router.js');
var cityController = require('./city.controller.js');
var cityService = require('./city.service.js');

require('./cityTable.html');
require('./table.scss');

module.exports = angular.module('frontendTest.city', [])
    .config(['$stateProvider', '$urlRouterProvider', router])
    .service( 'CityService', ['$q', '$http', cityService])
    .controller( 'CityController', ['CityService', cityController]);