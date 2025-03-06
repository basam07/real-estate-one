import {createServiceDescription, fetchAllServiceDescriptions} from "../../../../server/our-services/our_services";
import {CreateOurServicesValidator} from "./create-our_services.validator.js";
import {handleError, handleSuccess} from "../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const requestObject = { body: requestBody};

        const validator = new CreateOurServicesValidator();
        const data = validator.validate(requestObject).body;

        const response = await createServiceDescription(data);

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request) {
    try {
        const response = await fetchAllServiceDescriptions();
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}