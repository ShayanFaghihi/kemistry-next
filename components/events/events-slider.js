import React from "react";

import classes from "./events-slider.module.css";
import EventBox from "./event-box";
import Container from "../UI/container";

export default function EventsSlider({ events }) {
  return (
    <section className={classes["events-section"]}>
      <Container className={classes["events-container"]}>
        {events.map((event) => (
          <EventBox
            className={classes["event-box"]}
            key={event.id}
            eventData={event}
          />
        ))}
        ;
      </Container>
    </section>
  );
}
