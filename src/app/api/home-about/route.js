import {createHomeAbout, fetchAllHomeAbouts} from "../../../../server/home-about/home_about.js";
import {CreateHomeAboutValidator} from "./create-home_about.validator.js";
import {handleError, handleSuccess} from "../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const requestObject = { body: requestBody};

        const validator = new CreateHomeAboutValidator();
        const data = validator.validate(requestObject).body;

        const response = await createHomeAbout(data);

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request) {
    try {
        const response = await fetchAllHomeAbouts();
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}