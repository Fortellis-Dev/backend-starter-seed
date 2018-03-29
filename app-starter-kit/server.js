'use strict';

const quoteRoutes = require('./src/appointments/appointments.routes');
const app = require('./config/lib/app');

app.start([
    quoteRoutes
]);
