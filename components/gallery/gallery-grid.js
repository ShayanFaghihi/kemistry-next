"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ImageLightBox from "@/components/UI/image-lightbox";
import classes from "./gallery-grid.module.css";

import image1 from "@/assets/gallery/gallery-1.jpeg";
import image2 from "@/assets/gallery/gallery-2.jpeg";
import image3 from "@/assets/gallery/gallery-3.jpeg";
import image4 from "@/assets/gallery/gallery-4.jpeg";
import image5 from "@/assets/gallery/gallery-5.jpeg";
import image6 from "@/assets/gallery/gallery-6.jpeg";
import image7 from "@/assets/gallery/gallery-7.jpeg";

const galleryArr = [
  { src: image1, alt: "Image Gallery" },
  { src: image2, alt: "Image Gallery" },
  { src: image3, alt: "Image Gallery" },
  { src: image4, alt: "Image Gallery" },
  { src: image5, alt: "Image Gallery" },
  { src: image6, alt: "Image Gallery" },
  { src: image7, alt: "Image Gallery" },
];

export default function GalleryGrid() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={classes.gallery}>
      {galleryArr.map((img) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          width={300}
          height={300}
          onClick={() => setIsOpen(true)}
        />
      ))}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={galleryArr.map((img) => img.src)}
        render={{ slide: ImageLightBox }}
      />
    </div>
  );
}
