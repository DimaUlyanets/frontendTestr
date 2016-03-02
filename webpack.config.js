'use strict';

var config = {
    context: __dirname + '/app',
    entry: {
        app: ['webpack/hot/dev-server', './core/bootstrap.js']
    },
    port: 9123,
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: "style!css!sass"  },
            { test: /\.html$/, loader: "ng-cache-loader" },
            { test: /\.png$/, loader: "url-loader?limit=100000&amp;mimetype=image/png" },
            { test: /\.jpg$/, loader: "file-loader" },
            { test: /\.gif/, loader: "url-loader" }
        ]
    },
    devServer: {
        port: 3489
    },
    node: {
        fs: "empty"
    }
};


module.exports = config;