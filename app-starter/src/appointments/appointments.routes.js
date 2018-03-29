'use strict';

const appointmentsrepo = require('./appointments.repo');
const appointmentsController = require('./appointments.controller')(appointmentsrepo);

module.exports = function (app) {
    app.get('/quote', appointmentsController.list);
}