"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import classes from "./carousel.module.css";

export default function Carousel({ imageArr }) {
  const carouselRef = useRef(null);

  // Function to handle automatic scrolling
  const autoScroll = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
      const newPosition = carousel.scrollLeft + 400;
      carousel.scrollTo({
        left: newPosition > scrollWidth ? 0 : newPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const slider = setInterval(autoScroll, 3000);

    return () => clearInterval(slider);
  }, []);
  return (
    <div className={classes.carousel} ref={carouselRef}>
      {imageArr.map((img) => (
        <Image key={img.src} alt={img.alt} src={img.src} />
      ))}
    </div>
  );
}
