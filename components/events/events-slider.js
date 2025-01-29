"use client";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderSettings as settings } from "@/lib/carouselSettings";

import classes from "./events-slider.module.css";
import EventBox from "./event-box";
import Container from "../UI/container";

export default function EventsSlider({ events }) {
  const openEvents = events?.filter((event) => event.status !== "cancelled");
  return (
    <section className={classes["events-section"]}>
      <Container>
        <h2>Upcoming Events</h2>
        {openEvents ? (
          <Slider {...settings}>
            {openEvents?.map((event) => (
              <EventBox
                className={classes["event-box"]}
                key={event.id}
                eventData={event}
              />
            ))}
          </Slider>
        ) : (
          <div className={classes.error}>
            <p>Something went wrong!</p>
            <Link href="/events">Review Events</Link>
          </div>
        )}
      </Container>
    </section>
  );
}
