import {createService, fetchAllServices} from "../../../../server/services/services.js";
import {CreateServicesValidator} from "./create-services.validator.js";
import {handleError, handleSuccess} from "../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const requestObject = { body: requestBody};

        const validator = new CreateServicesValidator();
        const data = validator.validate(requestObject).body;

        const response = await createService(data);

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request) {
    try {
        const response = await fetchAllServices();
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}