import LtaDatamallCall from 'lta-datamall-caller';

// Creates a new object from LtaDatamallCall class, gets the response and logs it to console.
// We're using an anonymous function so that we can use Async and Await.
(async _ => {
    var request = new LtaDatamallCall(...)
    var response = await request.getResponse();
    console.log(response);
})();