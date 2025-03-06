import {deleteBlog, fetchBlogs, updateBlog} from "../../../../../server/blogs/blogs.js";
import {UpdateBlogValidator} from "./update-blog.validator";
import {handleError, handleSuccess} from "../../../../../lib/response.utils";

export const dynamic = 'force-dynamic';

export async function PUT(request) {
    try {
        const requestBody = await request.json();
        const requestObject = { body: requestBody};

        const validator = new UpdateBlogValidator();
        const data = validator.validate(requestObject).body;

        const response = await updateBlog(data.slug,data);

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


export async function DELETE(request, { params }) {
    try {
        const {slug} = params;
        const response = await deleteBlog(slug);
        return handleSuccess(response);
    } catch (err) {
        return handleError(err);
    }
}