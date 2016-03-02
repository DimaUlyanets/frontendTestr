'use strict';
// load all dependencies
require('./vendor')();

//// load the main app file
var appModule = require('../main');


angular.element(document).ready(function () {
    angular.bootstrap(document, [appModule.name], {
    });
});