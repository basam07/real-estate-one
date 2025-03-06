import {createMission, fetchAllMissions} from "../../../../server/our-mission/our_mission.js";
import {CreateOurMissionValidator} from "./create-our_mission.validator.js";
import {handleError, handleSuccess} from "../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const requestObject = { body: requestBody};

        const validator = new CreateOurMissionValidator();
        const data = validator.validate(requestObject).body;

        const response = await createMission(data);

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request) {
    try {
        const response = await fetchAllMissions();
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}