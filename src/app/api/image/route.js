// route.ts
import { existsSync } from "fs";
import fs from "fs/promises";
import path from "path";
import {handleError, handleSuccess} from "../../../../lib/response.utils";

export async function POST(req) {
    const formData = await req.formData();
    console.log(formData);

    const f = formData.get("file");

    if (!f) {
        return handleError("File not found", 400);
    }

    const file = f;
    console.log(`File name: ${file.name}`);
    console.log(`Content-Length: ${file.size}`);

    const destinationDirPath = path.join(process.cwd(), "/upload");
    console.log(destinationDirPath);

    const fileArrayBuffer = await file.arrayBuffer();

    if (!existsSync(destinationDirPath)) {
        await fs.mkdir(destinationDirPath, { recursive: true });
    }
    await fs.writeFile(
        path.join(destinationDirPath, file.name),
        Buffer.from(fileArrayBuffer)
    );

    const fileOfPath = "upload/" + file.name;

    return handleSuccess(fileOfPath);
}