import {handleError, handleSuccess} from "../../../../../lib/response.utils";
import { deleteCareerRealinvte, fetchCareerRealinvteById, updateCareerRealinvte } from "../../../../../server/career-realivte/career_realinvte.js";

export const dynamic = 'force-dynamic';

export async function PUT(request) {
    try {
        const requestBody = await request.json();
        const response = await updateCareerRealinvte(requestBody.id, requestBody); // Update experience by ID

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request, { params }) {
    try {
        const { id } = params; // Extract ID from params
        const response = await fetchCareerRealinvteById(id); // Fetch experience by ID
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function DELETE(request, { params }) {
    try {
        const {slug} = params;
        const response = await deleteCareerRealinvte(slug);
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}