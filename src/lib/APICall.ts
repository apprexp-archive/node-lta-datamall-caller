import * as rp from 'request-promise-native';
import { URL } from 'url';

/**
 * Class representing an LTA Datamall2 API call.
 */
class APICall {
    /** LTA Datamall2 API base URL. */
    private readonly _apiBaseURL = new URL('http://datamall2.mytransport.sg/ltaodataservice/').href;
    private readonly _apiDatasetURL: string;
    private readonly _apiAccountKey: string;
    private readonly _apiResponseFormat: ApiResponseFormat;

    async getResponse(): Promise<object> {
        let rpOptions = {
            url: this._apiDatasetURL,
            headers: {
                AccountKey: this._apiAccountKey,
                accept: this._apiResponseFormat
            },
            qs: this._apiParams,
            json: (this._apiResponseFormat ? true : false)
        }

        try {
            let response = await rp(rpOptions)
            return response;
        }
        catch(err) {
            throw new Error(err);
            return {};
        }
    }

    /**
     * @param apiAccountKey LTA Datamall2 API account key.
     * @param apiDataset    LTA Datamall2 API dataset name.
    */
    constructor({apiAccountKey, apiDataset, apiResponseFormatPartials = 'json', apiParams}: ApiConstructorArgs) {
        this._apiDatasetURL = new URL(apiDataset, this._apiBaseURL).href;
        this._apiAccountKey = apiAccountKey;
        this._response = {};

        /* Initialize fullApiResponseFormat */
        let apiResponseFormat: ApiResponseFormat|string;

        /* Check if apiResponseFormat is normal shorthand */
        if (['json','atom+xml', 'xml'].indexOf(apiResponseFormatPartials) > -1) {
            /* Initialize the basic form of fullApiResponseFormat */
             apiResponseFormat = 'application/';

            /* Check if apiResponseFormat is missing 'atom+' prefix */
            if (apiResponseFormatPartials == 'xml') {
                apiResponseFormat += 'atom+'
            }

            /* Add the shorthand apiResponseFormat to fullApiResponseFormat */
            apiResponseFormat += apiResponseFormatPartials;
        }
        /* Otherwise, if apiResponseFormat is complete, simply pass it to fullAPIResponseFormat */
        else {
            apiResponseFormat = apiResponseFormatPartials;
        }

        this._apiResponseFormat = apiResponseFormat;
    }
}

export default APICall;