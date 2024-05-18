import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        // get all project
    } catch(e) {
        NextResponse.json(
            { error: "Error While fetching." },
            { status: 400 }
        );
    }
}