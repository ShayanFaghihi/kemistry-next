import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export async function POST(req) {
  const formData = await req.formData();
  const files = formData.getAll("images"); // notice getAll now

  if (!files.length) {
    return new Response("No files uploaded.", { status: 400 });
  }

  for (const file of files) {
    if (!file.type.startsWith("image/")) {
      return new Response("Only image files are allowed.", { status: 400 });
    }
  }

  const uploadedFiles = [];

  for (const file of files) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = `${uuidv4()}-${file.name}`;
    const filepath = path.join(process.cwd(), "public", "uploads", filename);

    await writeFile(filepath, buffer);
    uploadedFiles.push(filename);
  }

  return new Response(JSON.stringify({ uploadedFiles }), { status: 200 });
}
