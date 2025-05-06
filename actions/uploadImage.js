"use server";

import { neon } from "@neondatabase/serverless";
import { put } from "@vercel/blob";

export async function uploadImage(formData) {
  const file = formData.get("image");
  if (!file || !file.type.startsWith("image/")) {
    throw new Error("Invalid image file");
  }

  const filename = `${Date.now()}-${file.name}`;

  const { url } = await put(filename, file, {
    access: "public",
  });

  // Save image path to DB
  // Connect to the Neon database
  const sql = neon(`${process.env.DATABASE_URL}`);
  await sql.query('INSERT INTO "public"."gallery" (path) VALUES ($1)', [url]);
  return filename;
}
