import { fetchTeamDescription, updateTeamDescription, deleteTeamDescription } from "../../../../../server/our-team/our_team.js";
import { handleError, handleSuccess } from "../../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function PUT(request) {
    try {
        const requestBody = await request.json();
        const response = await updateTeamDescription(requestBody.id, requestBody); // Update experience by ID

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request, { params }) {
    try {
        const { id } = params; // Extract ID from params
        const response = await fetchTeamDescription(id); // Fetch experience by ID
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function DELETE(request, { params }) {
    try {
        const { slug } = params; // Extract ID from params
        const response = await deleteTeamDescription(slug); // Delete experience by ID
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}
