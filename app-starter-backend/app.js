'use strict';

/**
 * Load Dependencies
 */
const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path');


const DEFAULT_PORT = 3000;

/**
 * Load application routes   
 */
const configureAppointmentRoutes = require('./src/appointments/appointments.routes');

/**
 * Create Express server
 */
const app = express();

/**
 * Adding middleware for Express
 */

/* Request body parser parses request body to json for all incoming requests. */
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

/**
 * Configuring static content directory 
 */
app.use(express.static(path.join(__dirname, 'public')))

/**
 * Configuring application routes   
 */
configureAppointmentRoutes(app);

/**
 * Adding global eror handler
 */
app.use(function errorHandler(err, req, res, next) {
    res.status(500)
    res.json({ error: err.toString() });
});

/**
 * Start express server
 */
app.listen(process.env.PORT || DEFAULT_PORT, function () {
    console.log('awesome appointments app running on port 3000, go to http://localhost:3000')
}); 
