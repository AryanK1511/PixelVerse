import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        // create a new project
    } catch(e) {
        NextResponse.json(
            { error: "Error While Creating." },
            { status: 400 }
        );
    }
}