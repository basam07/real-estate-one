import {createTagline, fetchTaglines} from "../../../../server/home-title/taglines";
import {CreateTaglineValidator} from "./create-home_title.validator.js";
import {handleError, handleSuccess} from "../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const requestObject = { body: requestBody};

        const validator = new CreateTaglineValidator();
        const data = validator.validate(requestObject).body;

        const response = await createTagline(data);

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request) {
    try {
        const response = await fetchTaglines();
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}