# FAQ
For versions `0.1.0` onwards

## Q: Where can I get an Account Key?
You can [request for API access](https://www.mytransport.sg/content/mytransport/home/dataMall/request-for-api.html) from LTA.

## Q: What should I put for `options.apiDataset`?
The dataset name can be found from the last pathname of the API datset URL.

e.g: The dataset name for `http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2` would be `BusArrivalv2`.

## Q: Why is `LtaDatamallCall.getResponse()` returning a promise?
This API is Promise-based and you'll need to wait for `LtaDatamallCall.getResponse()` promise to resolve. You can use Async and Await to wait for the promise to finish:
```Javascript
...
async function testFunction() {
    var request = new LtaDatamallCall(...)
    var response = await request.getResponse();
    console.log(response);
}
...
```

## Q: Do you have examples?
Yes, we have annotated examples written in ES6 /ECMAScript2015 / Javascript and Typescript