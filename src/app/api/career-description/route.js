import {createCareerDescription, fetchAllCareerDescriptions} from "../../../../server/career-description/career_descriptions.js";
import {CreateCareerDescriptionValidator} from "./create-career_description.validator.js";
import {handleError, handleSuccess} from "../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const requestObject = { body: requestBody};

        const validator = new CreateCareerDescriptionValidator();
        const data = validator.validate(requestObject).body;

        const response = await createCareerDescription(data);

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request) {
    try {
        const response = await fetchAllCareerDescriptions();
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}