let expect = require('chai').expect;
let sinon = require('sinon');
let appointmentsRepoMock = {};
let appointmentsController = require('../../../src/appointments/appointments.controller')(appointmentsRepoMock);

describe('appointments/app.appointments.controller', async function () {
    describe('list api', function () {

        beforeEach(function(){
            appointmentsRepoMock.getAppointments = sinon.spy();
            reqMock = {};
            resMock = {
                status: sinon.spy(),
                json: sinon.spy()
            }
        })

        it('should be defined', function () {
            expect(appointmentsController.list).not.to.be.undefined;
        })

        it('should use apointmentsRepo.getAppointments api to fetch the appointmens list', async function () {
            const res = await appointmentsController.list(reqMock, resMock);
            expect(appointmentsRepoMock.getAppointments.calledOnce).to.be.true;
        })

        it('should return appointment list with 200', async function () {
            const apointmentsListMock = [{ appointmentId: 'test-appt-id' }]
            appointmentsRepoMock.getAppointments = function(){
                return Promise.resolve(apointmentsListMock)
            }
            const res = await appointmentsController.list(reqMock, resMock);
            expect(resMock.json.args[0][0]).to.deep.eql(apointmentsListMock);
        })

        it('should return 500 with error message if unable to fetch the list from upstream server', async function () {
            const errorRes = { error: 'ERROR' };
            appointmentsRepoMock.getAppointments = function(){
                return Promise.resolve(errorRes)
            }
            const res = await appointmentsController.list(reqMock, resMock);
            expect(resMock.json.args[0][0]).to.deep.eql({error: errorRes.error});
            expect(resMock.status.args[0][0]).to.eql(500);
        })
    })
})