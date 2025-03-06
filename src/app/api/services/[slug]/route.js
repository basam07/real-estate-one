import { fetchServiceById, updateService, deleteService } from "../../../../../server/services/services.js";
import { handleError, handleSuccess } from "../../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function PUT(request) {
    try {
        const requestBody = await request.json();
        const response = await updateService(requestBody.id, requestBody); // Update experience by ID

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function DELETE(request, { params }) {
    try {
        const { slug } = params; // Extract ID from params
        const response = await deleteService(slug); // Delete experience by ID
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}
