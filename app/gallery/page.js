import { createClient } from "@supabase/supabase-js";

import GalleryGrid from "@/components/gallery/gallery-grid";
import classes from "./page.module.css";
import Container from "@/components/UI/container";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function GalleryPage() {
  const { data: imageUrls, error } = await supabase.from("images").select("*");

  if (error) {
    console.error("Error fetching images:", error.message);
    return null;
  }

  return (
    <main>
      <section className={classes["gallery-section"]}>
        <Container>
          <h1>Events Gallery</h1>
          <GalleryGrid images={imageUrls} />
        </Container>
      </section>
    </main>
  );
}
