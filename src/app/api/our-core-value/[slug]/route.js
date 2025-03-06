import { updateCoreValue, deleteCoreValue } from "../../../../../server/our-core-value/our_core_value.js";
import { handleError, handleSuccess } from "../../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function PUT(request) {
    try {
        const requestBody = await request.json();
        const response = await updateCoreValue(requestBody.id, requestBody); // Update experience by ID

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function DELETE(request, { params }) {
    console.log('params', params);
    try {
        const { slug } = params; // Extract ID from params
        const response = await deleteCoreValue(slug); // Delete experience by ID
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}
