export async function GET() {
    console.log("GET request to /api/auth");

    return new Response("Authentication Required!", {
        status: 401,
        headers: {
            "WWW-Authenticate": "Basic realm='private_pages'",
        },
    });
}