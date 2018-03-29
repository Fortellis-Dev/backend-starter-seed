'use strict';

module.exports = function appointmentsController(appointmentsRepo) {

    async function list(req, res) {
        try {
            // async/await are Ecmascript 2017 features which are available only from node>=v7.10
            // await helps pause the execution until the response from the apicall is available
            // which makes the code execution in synchronous fashion unlike the callback style. 
            const appointmentList = await appointmentsRepo.getAppointments();
            if (!appointmentList.error) {
                res.status(200);
                res.json(appointmentList);
            }
            else {
                res.status(500);
                res.json({ error: appointmentList.error });
            }
        } catch (err) {
            res.status(500);
            res.json({ error: err.toString() })
        }
    }

    return {
        list
    }
}