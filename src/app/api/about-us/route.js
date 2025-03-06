import {createAboutUs, fetchAllAboutUs} from "../../../../server/about-us/about_us";
import {CreateAboutUsValidator} from "./create-about_us.validator.js";
import {handleError, handleSuccess} from "../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const requestObject = { body: requestBody};

        const validator = new CreateAboutUsValidator();
        const data = validator.validate(requestObject).body;

        const response = await createAboutUs(data);

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request) {
    try {
        const response = await fetchAllAboutUs();
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}