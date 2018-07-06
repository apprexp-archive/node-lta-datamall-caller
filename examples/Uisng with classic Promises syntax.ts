import LtaDatamallCall from 'lta-datamall-caller';

// Creates a new object from LtaDatamallCall class, gets the response and logs it to console.
var request = new LtaDatamallCall(...)
request.getResponse().then(response => {
    console.log(response);
});