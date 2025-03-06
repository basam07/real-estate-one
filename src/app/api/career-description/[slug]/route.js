import {fetchCareerDescriptionById, updateCareerDescription, deleteCareerDescription, fetchAllCareerDescriptions} from "../../../../../server/career-description/career_descriptions.js";
import {handleError, handleSuccess} from "../../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function PUT(request) {
    try {
        const requestBody = await request.json();
        const response = await updateCareerDescription(requestBody.id, requestBody); // Update experience by ID

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request, { params }) {
    try {
        const { id } = params; // Extract ID from params
        const response = await fetchCareerDescriptionById(id); // Fetch experience by ID
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}


export async function DELETE(request, { params }) {
    try {
        const {slug} = params;
        const response = await deleteCareerDescription(slug);
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}