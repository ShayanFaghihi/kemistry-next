import Image from "next/image";
import { Suspense } from "react";
import { list } from "@vercel/blob";

import Container from "@/components/UI/container";
import BookingForm from "@/components/venue/booking-form";

import infoImg from "@/assets/venue/info.webp";
import features from "@/assets/venue/features.jpg";
import kemistryEntry from "@/assets/venue/kemistryEntry.jpg";
import heroBg from "@/assets/venue/hero.webp";

import classes from "./page.module.css";

import VenueSlider from "@/components/gallery/venue-slider";
import VenueServices from "@/components/venue/services";

async function HeroVideo({ fileName }) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  });
  const { url } = blobs[0];

  return (
    <video
      aria-label="Video player"
      autoPlay
      loop
      muted
      preload="none"
      className={classes["hero-vid"]}
    >
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default function VenueRental() {
  return (
    <Container>
      <section className={classes["hero-section"]}>
        <Suspense
          fallback={
            <Image
              src={heroBg}
              alt="Kemistry Nightclub venue rental hero background"
              className={classes["hero-bg"]}
              priority
            />
          }
        >
          <HeroVideo fileName="hero-kapvdev3WvEV7EYfFYfY71tDYyX42N.mp4" />
        </Suspense>

        <h1>
          Kemistry offers a variety of event planning services to help clients
          create and execute their vision
        </h1>
        <a href="#booking">Book Your Event →</a>
      </section>
      <section className={classes["info-section"]}>
        <div className={classes.text}>
          <h2>Kemistry Venue Rental</h2>
          <p>
            Kemistry is the perfect venue for your event needs! Our versatile
            space can be customized to fit your specific requirements and our
            team is dedicated to providing exceptional service every step of the
            way.
          </p>
        </div>
        <div className={classes.image}>
          <Image src={infoImg} alt="Kemistry nightclub team are having fun" />
        </div>
      </section>
      <section className={classes["slider-section"]}>
        <VenueSlider />
      </section>
      <section className={classes["features-section"]}>
        <h2>Features and Benefits</h2>
        <p>
          {" "}
          Ideal choice for anyone looking to host a successful and impactful
          event in Fort Lauderdale.
        </p>
        <div className={classes.features}>
          <Image
            src={features}
            alt="Kemistry venue services features and benefits"
          />
          <div className={classes.text}>
            <ul>
              <li>Top-notch production value</li>
              <li>Technical capabilities </li>
              <li>Coordinating catering and bar services</li>
              <li>Booking entertainment and designing event layouts</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={classes["services-section"]}>
        <div className={classes.text}>
          <h2>Services</h2>
        </div>
        <div className={classes.slider}>
          <VenueServices />
        </div>
      </section>
      <section className={classes["booking-section"]} id="booking">
        <div className={classes.left}>
          <div className={classes.text}>
            <h2>Book Your Event</h2>
            <p>
              Contact us today to learn more about hosting your next event at
              Kemistry and let us help bring your vision to life!
            </p>
          </div>
          <div className={classes.form}>
            <BookingForm />
          </div>
        </div>
        <div className={classes.right}>
          <Image
            src={kemistryEntry}
            alt="Kemistry Nightclub entry for venue services and rental"
          />
        </div>
      </section>
    </Container>
  );
}
