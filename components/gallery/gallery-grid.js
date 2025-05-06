"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ImageLightBox from "@/components/UI/image-lightbox";
import classes from "./gallery-grid.module.css";

export default function GalleryGrid({ images }) {
  const [imageIndex, setImageIndex] = useState(-1);

  return (
    <div className={classes.gallery}>
      {images.map((img) => (
        <Image
          key={img.id}
          src={img.path}
          alt={`image-${img.id}`}
          width={300}
          height={300}
          onClick={() => setImageIndex(index)}
        />
      ))}
      <Lightbox
        open={imageIndex >= 0}
        close={() => setImageIndex(-1)}
        slides={images.map((img) => ({ src: img.path }))}
        index={imageIndex}
        render={{ slide: ImageLightBox }}
        controller={{ closeOnBackdropClick: true }}
      />
    </div>
  );
}
