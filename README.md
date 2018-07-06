# LTA Datamall Caller
**Warning:** This API is highly experimental and currently does not comply with [semver](https://semver.org/). Use at your own risk.

An object-oriented promise-based LTA Datamall API Node.js wrapper written in Typescript.

## What is LTA Datamall Caller
LTA Datamall Caller is a simple Node.JS wrapper to contact the LTA Datamall API.

## Installation
**Note** Does not work yet! This is here for reference.

To install the using [NPM](https://www.npmjs.com/):
```
npm install lta-datamall-caller
```

Or if you're using [Yarn](https://yarnpkg.com/en/):
```
yarn install lta-datamall-caller
```

## Usage
This API is Class-based and Promise-based. That means you'll need to create a new object for every request and wait for the promise to resolve.
Using the code below, a new request is made to a dataset and the response is logged to the console. 

```Javascript
const LtaDatamallCall = require('lta-datamall-caller');

/* Instantiate a new object from the LTADatamallCall class. 
 * This *does not* send a request to the API.
 */
var request = new LtaDatamallCall({'API KEY', 'API DATASET', 'API RESPONSE FORMAT', { API PARAMS });

/* Send the request to the API and log the response. */
request.getResponse().then(response => {
    console.log(response);
});
```

## API
### `new ltaDatamall([options])`
The constructor used to create a new instance of `LtaDatamallCall`.

### `options`
Options are immutable and must be set when calling the `LtaDatamallCall` constructor.

#### `options.apiAccountKey`
An LTA Datamall account key.

Type: `string`

Default: `undefined`

Required: `true`

#### `options.apiDataset`
An LTA Datamall dataset.

Type: `string`

Default: `undefined`

Required: `true`

#### `options.apiResponseFormat`
The format for the response to be returned in.

Type: `string`

Default: `json`

Required: `false`

Possible values:
```
json
xml
atom+xml
application/json
application/atom+xml
```

#### `options.apiParams`
Query strings to pass to LTA Datamall. Will be left unmutated by this module.

Type: `object`

Default: `undefined`

Required: `false`

### `LtaDatamallCall.response`
The unmutated, readonly response from LTA Datamall API dataset.

Type: `object`

Default: `{}`

Readonly: `true`

### `LtaDatamallCall.getResponse()`
Sends a request to LTA's Datamall API dataset and returns the response through a Promise.

Returns `{}` if the request failed.

Also updates `LtaDatamallCall.response`.

Returns: `Promise<object>` or `{}`

## FAQ
[View the FAQ](https://github.com/apprexp/node-lta-datamall-caller/blob/master/docs/FAQ.md)