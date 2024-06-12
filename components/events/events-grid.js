"use client";
import { Suspense } from "react";
import { getEvents } from "@/lib/events";

import { useEffect } from "react";
import LoadingIndicator from "../UI/loading-indicator";
import EventBox from "./event-box";
import EventGridBox from "./event-grid-box";

import classes from "./events-grid.module.css";

export default function EventsGrid() {
  // const events = await getEvents();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.dice.fm/dice-event-list-widget.js";
    script.async = true;

    script.onload = () => {
      // Once the external script is loaded, create DiceEventListWidget
      DiceEventListWidget.create({
        information: "simple",
        eventTitle: "event",
        showImages: true,
        showAudio: true,
        showNewBadge: false,
        hidePostponed: false,
        hideCancelled: false,
        layout: "gallery",
        roundButtons: false,
        theme: "dark",
        fontFamily: "inherit",
        partnerId: "c8ddfba8",
        apiKey: "HEpHpEIoQc3ssGz6UFT8O2vgZSsATa2L14lfW5j6",
        version: 2,
        showPrice: true,
        __p: true,
        __pc: { brandColor: "black", rounded: false },
        title: false,
        highlightColour: "#4d9308",
        promoters: ["307 SW 2nd St LLC"],
      });
    };

    document.getElementById("dice-event-list-widget").appendChild(script);

    return () => {
      // Clean up if needed
      script.onload = null;
    };
  }, []);

  return (
    <>
      <h1 className={classes.heading}>Kemistry Upcoming Events</h1>
      <div id="dice-event-list-widget" className={classes["events-widget"]}>
        <LoadingIndicator />
        {/* <Suspense fallback={<LoadingIndicator />}> */}
        {/* {events.map((event) => (
            <EventGridBox key={event.id} eventData={event} />
          ))} */}
        {/* </Suspense> */}
      </div>
      <div>
        <EventBox
          eventData={{
            images: ["/clan-of-xymox.jpeg"],
            name: "Clan of XYMOX",
            date: "2024-06-22T01:00:00Z",
            url: "https://www.eventbrite.com/e/clan-of-xymox-x-odus-tour-with-curse-mackey-sine-fort-lauderdale-tickets-829025787447",
          }}
        />
      </div>
    </>
  );
}
