import {fetchHomeAboutById, updateHomeAbout, deleteHomeAbout} from "../../../../../server/home-about/home_about.js";
// import {UpdateHomeAboutValidator} from "./update-home_about.validator.js";
import {handleError, handleSuccess} from "../../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function PUT(request) {
    try {
        const requestBody = await request.json();
        const response = await updateHomeAbout(requestBody.id, requestBody); // Update experience by ID

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request, { params }) {
    try {
        const { id } = params; // Extract ID from params
        const response = await fetchHomeAboutById(id); // Fetch experience by ID
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}


export async function DELETE(request, { params }) {
    try {
        const { slug } = params; // Extract slug correctly

        console.log("Received slug:", slug); // Debugging log

        if (!slug) {
            return new Response(JSON.stringify({ error: "ID parameter is missing." }), { status: 400 });
        }

        const response = await deleteHomeAbout(slug); // Delete tagline by ID
        return new Response(JSON.stringify({ message: "Deleted successfully.", response }), { status: 200 });
    } catch (err) {
        console.error("DELETE Error:", err);
        return new Response(JSON.stringify({ error: "Internal server error." }), { status: 500 });
    }
}