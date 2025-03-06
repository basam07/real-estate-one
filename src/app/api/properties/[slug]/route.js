import {handleError, handleSuccess} from "../../../../../lib/response.utils";
import {deleteProperty, updateProperty} from "../../../../../server/properties/properties";
import {PropertiesValidator} from "@/app/api/properties/properties.validator";
import {fetchProperty} from "../../../../../server/properties/properties";

export const dynamic = 'force-dynamic';

export async function PUT(request) {
    try {
        const requestBody = await request.json();
        const requestObject = { body: requestBody};

        const validator = new PropertiesValidator();
        const data = validator.validate(requestObject).body;

        const response = await updateProperty(data.slug,data);

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET({params}) {
    try {
        const response = await fetchProperty(params.slug);

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function DELETE(request,{params}) {
    try {
        const {slug} = params;
        console.log(slug,'slug');
        const response = await deleteProperty(slug);
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}