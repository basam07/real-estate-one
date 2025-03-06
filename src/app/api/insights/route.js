import {createInsight, fetchAllInsights} from "../../../../server/insights/insights.js";
import {CreateInsightsValidator} from "./create-insights.validator.js";
import {handleError, handleSuccess} from "../../../../lib/response.utils.js";

export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const requestObject = { body: requestBody};

        const validator = new CreateInsightsValidator();
        const data = validator.validate(requestObject).body;

        const response = await createInsight(data);

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request) {
    try {
        const response = await fetchAllInsights();
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}