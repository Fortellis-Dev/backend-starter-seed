'use strict';

/* 
   request-promise is a HTTP client library with promises support
   https://www.npmjs.com/package/request-promise
*/
const request = require('request-promise');

/*
    YOU WILL HAVE TO UPDATE "YOUR_APIKEY" WITH KEY YOU GET WHEN YOU CREATE A SOLUTION at https://developer.fortellis.io/
*/
const API_CONFIG = {
    "apikey": "YOUR_APIKEY",
    "Subscription-Id": "test"
}

const HEADERS = {
    "Accept": "*/*",
    "Content-Type": "application/json",
    "apikey": API_CONFIG.apikey,
    "Subscription-Id": API_CONFIG["Subscription-Id"]
}

module.exports = {
    getAppointments: function () {
        let options = {
            method: 'GET',
            url: 'https://api.fortellis.io/v1/appointments/',
            headers: HEADERS
        };
        return request.get(options)
            .then(function (res) {
                console.log('API call successful.');
                return JSON.parse(res);
            })
            .catch(function (err) {
                console.log('API call failed with http status code : ' + err.statusCode);
                console.log('Error response object: ' + JSON.stringify(err.response));
                if(err.statusCode === 401){
                    return {error: "Unauthorized, you might have forgotten to update API_KEY in src/appointments/appointments.repo.js, Please check!"}
                }
                return {error: JSON.stringify(err.response.body)}
            });
    }
}