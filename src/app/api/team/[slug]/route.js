import {
  fetchTeamMemberById,
  updateTeamMember,
  deleteTeamMember,
} from "../../../../../server/team/team.js";
import { handleError, handleSuccess } from "../../../../../lib/response.utils";

export const dynamic = "force-dynamic";

export async function PUT(request) {
  try {
    const requestBody = await request.json();
    const response = await updateTeamMember(requestBody.id, requestBody); // Update experience by ID

    return handleSuccess(response);
  } catch (err) {
    return handleError(err);
  }
}

export async function DELETE(request, { params }) {
  try {
    const { slug } = params; // Extract ID from params
    const response = await deleteTeamMember(slug); // Delete experience by ID
    return handleSuccess(response);
  } catch (err) {
    return handleError(err);
  }
}
