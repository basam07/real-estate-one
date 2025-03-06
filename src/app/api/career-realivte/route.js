import { createCareerRealinvte, fetchAllCareerRealinvte } from "../../../../server/career-realivte/career_realinvte.js";
import {CreateCareerRealinvteValidator} from "./create-career_realivte.validator.js";
import {handleError, handleSuccess} from "../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const requestObject = { body: requestBody};

        const validator = new CreateCareerRealinvteValidator();
        const data = validator.validate(requestObject).body;

        const response = await createCareerRealinvte(data);

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request) {
    try {
        const response = await fetchAllCareerRealinvte();
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}