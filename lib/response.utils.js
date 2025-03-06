import { NextResponse } from 'next/server';

//Error handling function
export function handleError(error, statusCode = 500) {
    const errorMessage = typeof error === 'string' ? error : error.message;
    return NextResponse.json({ error: errorMessage }, { status: statusCode });
}

//Success response function
export function handleSuccess(data , statusCode = 200) {
     return NextResponse.json(data, { status: Number(statusCode) });
}