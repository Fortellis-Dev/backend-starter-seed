'use strict';

const express = require("./express");

const DEFAULT_PORT = 3000;

module.exports.start = function start(routes){
    const app = express.init();

    routes.forEach(function(eachRouteConfig){
        eachRouteConfig(app);
    });

    app.listen(process.env.PORT || DEFAULT_PORT, function(){
       console.log('awesome appointments app running on port 3000, go to http://localhost:3000') 
    });
}