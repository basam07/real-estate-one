import {createTeamDescription, fetchAllTeamDescriptions} from "../../../../server/our-team/our_team.js";
import {CreateOurTeamValidator} from "./create-our_team.validator.js";
import {handleError, handleSuccess} from "../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const requestObject = { body: requestBody};

        const validator = new CreateOurTeamValidator();
        const data = validator.validate(requestObject).body;

        const response = await createTeamDescription(data);

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request) {
    try {
        const response = await fetchAllTeamDescriptions();
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}