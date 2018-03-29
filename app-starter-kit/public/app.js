
function getQuoteList() {
    alert('fetching appointments...')
    window.fetch('/quote', {
        method: 'GET',
        })
        .then(response => response.json())
        .then(function (res) {
            let appointmentsTable = document.getElementById("quoteList");
            //Looping through the appointment list and adding to the table.
            res.forEach(eachAppointment => {
                let row = appointmentsTable.insertRow();
                let appointmentId = row.insertCell(0);
                let vehicleSpecId = row.insertCell(1);
                let customerId = row.insertCell(2);
                let date = row.insertCell(3);
                let status = row.insertCell(4)
                appointmentId.innerHTML = eachAppointment.appointmentId || 'Not Available';
                vehicleSpecId.innerHTML = eachAppointment.vehicleSpecId || 'Not Available';
                customerId.innerHTML = eachAppointment.customerId || 'Not Available';
                date.innerHTML = eachAppointment.dateTime || 'Not Available';
                status.innerHTML = eachAppointment.status || 'Not Available';
            });
        })
}