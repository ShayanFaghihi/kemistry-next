import { neon } from "@neondatabase/serverless";

import GalleryGrid from "@/components/gallery/gallery-grid";
import classes from "./page.module.css";
import Container from "@/components/UI/container";

export default async function GalleryPage() {
  // Connect to the Neon database
  const sql = neon(process.env.DATABASE_URL);
  const imageUrls = await sql`SELECT * FROM "public"."gallery"`;

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
