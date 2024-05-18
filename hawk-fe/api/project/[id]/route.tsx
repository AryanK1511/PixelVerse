import { NextRequest, NextResponse } from "next/server";

interface CustomNextRequest extends NextRequest {
    params: {
        id: string;
    };
}

export async function GET(request: CustomNextRequest) {
    try {
        const { id } = request.params;

        // use the id to get the project
    } catch(e) {
        return NextResponse.json(
            { error: "Error While fetching." },
            { status: 400 }
        );
    }
}