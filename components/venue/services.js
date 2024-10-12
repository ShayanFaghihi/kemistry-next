"use client";
import classes from "./services.module.css";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { centerModeSlider as settings } from "@/lib/carouselSettings";

import image1 from "@/assets/venue/birthday.jpg";
import image2 from "@/assets/venue/private_event.jpg";
import image3 from "@/assets/venue/corporate_event.jpg";

const galleryArr = [
  {
    src: image1,
    alt: "Birthday event at the Kemistry Nightclub venue",
    serviceText: "Birthday Party",
  },
  {
    src: image2,
    alt: "Private event or any other special occasion",
    serviceText: "Private event or any other special occasion",
  },
  {
    src: image3,
    alt: "Kemistry nightclub venue hosting a corporate event",
    serviceText: "Hosting a corporate event",
  },
];

export default function VenueServices() {
  return (
    <div className={classes["services-section"]}>
      <Slider {...settings} className={classes.slider}>
        {galleryArr.map((img) => (
          <div className={classes["service-slide"]}>
            <Image key={img.src} src={img.src} alt={img.alt} />
            <span className={classes["service-text"]}>{img.serviceText}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
}
