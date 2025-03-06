import {createApply, fetchAllApplies} from "../../../../server/apply/apply.js";
import {CreateApplyValidator} from "./create-apply.validator.js";
import {handleError, handleSuccess} from "../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const requestObject = { body: requestBody};

        const validator = new CreateApplyValidator();
        const data = validator.validate(requestObject).body;

        const response = await createApply(data);

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request) {
    try {
        const response = await fetchAllApplies();
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}