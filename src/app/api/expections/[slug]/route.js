import {updateExpectation, deleteExpectation, fetchExpectationById} from "../../../../../server/expections/expectations.js";
import {handleError, handleSuccess} from "../../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function PUT(request) {
    try {
        const requestBody = await request.json();
        const response = await updateExpectation(requestBody.id, requestBody); // Update experience by ID

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request, { params }) {
    try {
        const { id } = params; // Extract ID from params
        const response = await fetchExpectationById(id); // Fetch experience by ID
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}


export async function DELETE(request, { params }) {
    try {
        const {slug} = params;
        const response = await deleteExpectation(slug);
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}