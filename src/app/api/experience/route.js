import {createExperience, fetchAllExperiences} from "../../../../server/experience/experiences.js";
import {CreateExperienceValidator} from "./create-experience.validator.js";
import {handleError, handleSuccess} from "../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const requestObject = { body: requestBody};

        const validator = new CreateExperienceValidator();
        const data = validator.validate(requestObject).body;

        const response = await createExperience(data);

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request) {
    try {
        const response = await fetchAllExperiences();
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}