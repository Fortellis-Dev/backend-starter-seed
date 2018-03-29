'use strict';

const express = require('express'),
    bodyParser = require('body-parser');

module.exports.initMiddleware = function (app) {

    //Request body parser - this helps parsing the request body to json for all incoming requests.
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(express.static('public'))
}

module.exports.init = function () {
    const app = express();

    this.initMiddleware(app);

    return app;
}