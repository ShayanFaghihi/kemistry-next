"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { centerModeSlider as settings } from "@/lib/carouselSettings";

import classes from "./venue-slider.module.css";

import image1 from "@/assets/venue/slides/slide1.jpg";
import image2 from "@/assets/venue/slides/slide2.jpg";
import image3 from "@/assets/venue/slides/slide3.jpg";
import image4 from "@/assets/venue/slides/slide4.jpg";
import image5 from "@/assets/venue/slides/slide5.jpg";
import image6 from "@/assets/venue/slides/slide6.jpg";
import image7 from "@/assets/venue/slides/slide7.jpg";
import image8 from "@/assets/venue/slides/slide8.jpg";
import image9 from "@/assets/venue/slides/slide9.jpg";
import image10 from "@/assets/venue/slides/slide10.jpg";
import image11 from "@/assets/venue/slides/slide11.jpg";

const galleryArr = [
  { src: image1, alt: "Kemistry Venue Rental Environment" },
  { src: image2, alt: "Kemistry nightclub rental gathering" },
  { src: image3, alt: "Kemistry nightclub venue rental party" },
  { src: image4, alt: "Chemistry nightclub singers for a rental place" },
  { src: image5, alt: "Events venue in Fort Lauderdale, Florida" },
  { src: image6, alt: "Bartender at the kemistry nightclub venue rental" },
  { src: image7, alt: "Kemistry food" },
  { src: image8, alt: "Ladies at kemistry nightclub " },
  {
    src: image9,
    alt: "Ladies at a party at venue rental place at Chemistry Nightclub",
  },
  { src: image10, alt: "People are dancing at nightclub" },
  {
    src: image11,
    alt: "Delicious food at Kemistry night club venue rental place",
  },
];

export default function VenueSlider() {
  return (
    <div className={classes["slider-section"]}>
      <Slider {...settings} className={classes.slider}>
        {galleryArr.map((img) => (
          <Image key={img.src} src={img.src} alt={img.alt} />
        ))}
      </Slider>
    </div>
  );
}
