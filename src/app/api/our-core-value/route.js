import {createCoreValue, fetchAllCoreValues} from "../../../../server/our-core-value/our_core_value";
import {CreateOurCoreValueValidator} from "./create-our_core_value.validator.js";
import {handleError, handleSuccess} from "../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const requestObject = { body: requestBody};

        const validator = new CreateOurCoreValueValidator();
        const data = validator.validate(requestObject).body;

        const response = await createCoreValue(data);

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request) {
    try {
        const response = await fetchAllCoreValues();
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}