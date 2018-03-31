'use strict';

const appointmentsrepo = require('./appointments.repo');
const appointmentsController = require('./appointments.controller')(appointmentsrepo);

module.exports = function (app) {
    app.get('/appointments', appointmentsController.list);
}