import {createTeamMember, fetchAllTeamMembers} from "../../../../server/team/team.js";
import {CreateTeamValidator} from "./create-team.validator.js";
import {handleError, handleSuccess} from "../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const requestObject = { body: requestBody};

        const validator = new CreateTeamValidator();
        const data = validator.validate(requestObject).body;

        const response = await createTeamMember(data);

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request) {
    try {
        const response = await fetchAllTeamMembers();
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}