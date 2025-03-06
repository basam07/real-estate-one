import {createBlog, fetchBlogs} from "../../../../server/blogs/blogs.js";
import {CreateBlogValidator} from "./create-blog.validator";
import {handleError, handleSuccess} from "../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const requestObject = { body: requestBody};

        const validator = new CreateBlogValidator();
        const data = validator.validate(requestObject).body;

        const response = await createBlog(data);

        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}

export async function GET(request) {
    try {
        const response = await fetchBlogs();
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}