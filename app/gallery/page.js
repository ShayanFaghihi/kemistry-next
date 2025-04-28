import fs from "fs";
import path from "path";

import GalleryGrid from "@/components/gallery/gallery-grid";
import classes from "./page.module.css";
import Container from "@/components/UI/container";

export default async function GalleryPage() {
  const dir = path.join(process.cwd(), "public/uploads");
  const images = fs.readdirSync(dir);
  return (
    <main>
      <section className={classes["gallery-section"]}>
        <Container>
          <h1>Events Gallery</h1>
          <GalleryGrid images={images} />
        </Container>
      </section>
    </main>
  );
}
