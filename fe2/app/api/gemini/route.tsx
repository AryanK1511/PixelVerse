import mime from "mime";
import { join } from "path";
import { stat, mkdir, writeFile, unlink } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { getImage, uploadImage } from "@/utils/google/bucket"
import isValid from "@/utils/google/gemini"

export async function POST(request: NextRequest) {

  // get the body of the request into json
  const body = await request.json();

  if (await isValid(body.urls, body.url, body.description)) {
    return NextResponse.json({ response: true });
  }

  return NextResponse.json({ response: false });

}
