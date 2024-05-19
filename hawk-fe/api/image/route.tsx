import mime from "mime";
import { join } from "path";
import { stat, mkdir, writeFile, unlink } from "fs/promises";
import * as dateFn from "date-fns";
import { NextRequest, NextResponse } from "next/server";
import { getImage, uploadImage } from "@/google/bucket";

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const file = formData.get("file") as Blob | null;
  if (!file) {
    return NextResponse.json(
      { error: "File blob is required." },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const relativeUploadDir = `/uploads`;
  const uploadDir = join(process.cwd(), "public", relativeUploadDir);

  try {
    await stat(uploadDir);
  } catch (e: any) {
    if (e.code === "ENOENT") {
      await mkdir(uploadDir, { recursive: true });
    } else {
      console.error(
        "Error while trying to create directory when uploading a file\n",
        e
      );
      return NextResponse.json(
        { error: "Something went wrong. Directory Error" },
        { status: 500 }
      );
    }
  }

  try {
    const uniqueSuffix = `username-${Date.now()}}`;
    if (!file) {
      return NextResponse.json(
        { error: "File blob is required." },
        { status: 400 }
      );
    }
    const filename = `${uniqueSuffix}.${mime.getExtension(file.type)}`;
    await writeFile(`${uploadDir}/${filename}`, buffer);

    // upload the photo to google bucket
    uploadImage(`${uploadDir}/${filename}`, filename)
      .then(() => {
        // get link to the photo
        getImage(filename).then((url: any) => {
          return NextResponse.json({ url: url });
        });
      })
      .catch((e: any) => {
        console.error("Error while trying to upload a file\n", e);
        return NextResponse.json(
          { error: "Error with google" },
          { status: 400 }
        );
      });

    return NextResponse.json({ fileUrl: `error` });
  } catch (e) {
    console.error("Error while trying to upload a file\n", e);
    return NextResponse.json(
      { error: "Something went wrong. Unown Error" },
      { status: 500 }
    );
  }
}
