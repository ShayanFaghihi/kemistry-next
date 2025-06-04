"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabaseClient";

export async function uploadImage(formData) {
  const file = formData.get("image");
  if (!file || !file.type.startsWith("image/")) {
    throw new Error("Invalid image file");
  }

  const filename = `${Date.now()}-${file.name}`;
  const filePath = `${filename}`;

  const { data, error: uploadError } = await supabase.storage
    .from("images")
    .upload(filePath, file);

  if (uploadError) {
    throw new Error(uploadError.message);
  }

  const { error: dbError } = await supabase
    .from("images")
    .insert([{ file_path: filePath }]);

  if (dbError) {
    throw new Error(dbError.message);
  }

  revalidatePath("/gallery");
}
