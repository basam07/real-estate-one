import {PropertiesValidator} from "./properties.validator";
import {handleError, handleSuccess} from "../../../../lib/response.utils";
import {createProperty} from "../../../../server/properties/properties";
import {fetchProperties} from "@/app/properties/[slug]/page";

export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const requestObject = { body: requestBody};
        console.log(requestObject)
        const validator = new PropertiesValidator();
        const data = validator.validate(requestObject).body;
        const response = await createProperty(data);
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request) {
    try {
        const response = await fetchProperties();
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}