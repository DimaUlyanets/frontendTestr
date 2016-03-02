'use strict';
/**
 * App Modules
 */
require('./modules/city');

var uiRouter = require('angular-ui-router');//TODO: move these requires to separate file
var ngAnimate = require('angular-animate');
var ngAria = require('angular-aria');
var ngMaterial = require('angular-material');

var frontendTest = angular.module("frontendTest", [uiRouter, ngAnimate, ngAria, ngMaterial,
    'frontendTest.city']);

module.exports = frontendTest;