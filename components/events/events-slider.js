"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { eventsSettings as settings } from "@/lib/carouselSettings";

import classes from "./events-slider.module.css";
import EventBox from "./event-box";
import Container from "../UI/container";

export default function EventsSlider({ events }) {
  return (
    <section className={classes["events-section"]}>
      <Container>
        <Slider {...settings}>
          {events?.map((event) => (
            <EventBox
              className={classes["event-box"]}
              key={event.id}
              eventData={event}
            />
          ))}
        </Slider>
      </Container>
    </section>
  );
}
