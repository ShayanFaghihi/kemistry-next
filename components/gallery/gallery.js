import Container from "../UI/container";

import classes from "./gallery.module.css";

import image1 from "@/assets/gallery/gallery-1.jpeg";
import image2 from "@/assets/gallery/gallery-2.jpeg";
import image3 from "@/assets/gallery/gallery-3.jpeg";
import image4 from "@/assets/gallery/gallery-4.jpeg";
import image5 from "@/assets/gallery/gallery-5.jpeg";
import image6 from "@/assets/gallery/gallery-6.jpeg";
import image7 from "@/assets/gallery/gallery-7.jpeg";
import Carousel from "../carousel/carousel";

const galleryArr = [
  { src: image1, alt: "Image Gallery" },
  { src: image2, alt: "Image Gallery" },
  { src: image3, alt: "Image Gallery" },
  { src: image4, alt: "Image Gallery" },
  { src: image5, alt: "Image Gallery" },
  { src: image6, alt: "Image Gallery" },
  { src: image7, alt: "Image Gallery" },
];

export default function Gallery() {
  return (
    <section className={classes["gallery-section"]}>
      <Container className={classes.container}>
        <h2>Weekly Gallery</h2>
        <span className={classes.devider}></span>
        <Carousel imageArr={galleryArr} />
      </Container>
    </section>
  );
}