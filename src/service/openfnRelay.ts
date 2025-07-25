import axios from 'axios';
import appProperties from "../appProperties";

export async function forwardPatientLookup(queryParams) {
    const postUrl = appProperties.openFnWebHookTriggerUrl;
    const response = await axios.post(postUrl, queryParams, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
}