import GalleryGrid from "@/components/gallery/gallery-grid";
import classes from "./page.module.css";
import Container from "@/components/UI/container";

export default function GalleryPage() {
  return (
    <main>
      <section className={classes["gallery-section"]}>
        <Container>
          <h1>Events Gallery</h1>
          <GalleryGrid />
        </Container>
      </section>
    </main>
  );
}
