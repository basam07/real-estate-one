import { createExpectation, fetchAllExpectations } from "../../../../server/expections/expectations.js";
import {CreateExpectationValidator} from "./create-expections.validator.js";
import {handleError, handleSuccess} from "../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const requestObject = { body: requestBody};

        const validator = new CreateExpectationValidator();
        const data = validator.validate(requestObject).body;

        const response = await createExpectation(data);

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request) {
    try {
        const response = await fetchAllExpectations();
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}