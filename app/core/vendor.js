'use strict';

module.exports = function () {
    /* JS */
    window.$ = require('jquery'); //TODO: move this global require to webpack config
    require('angular');


    /* Styles from NPM */
    require('!style!css!angular-material/angular-material.min.css');

    /* Styles */
    require('../index.scss');
};