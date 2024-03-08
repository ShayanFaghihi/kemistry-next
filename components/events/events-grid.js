"use client";
import { useEffect } from "react";
import Image from "next/image";
import LoadingIndicator from "../UI/loading-indicator";
import EventBox from "./event-box";

import classes from "./events-grid.module.css";

export default function EventsGrid() {
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

  // Define the UTC time string
  const utcTimeString = "2024-06-21T03:00:00Z";

  // Create a new Date object using the UTC time string
  const utcDate = new Date(utcTimeString);

  // Get the local time zone offset in milliseconds
  const timeZoneOffset = utcDate.getTimezoneOffset() * 60000; // Convert minutes to milliseconds

  // Calculate the local time by subtracting the time zone offset
  const localTime = new Date(utcDate.getTime() - timeZoneOffset);

  // Format the local time in Eastern Time Zone (UTC-4 during daylight saving time)
  const easternTime = localTime.toLocaleString("en-US", {
    timeZone: "America/New_York",
  });

  return (
    <>
      <h1 className={classes.heading}>Kemistry Upcoming Events</h1>
      <div id="dice-event-list-widget" className={classes["events-widget"]}>
        <LoadingIndicator />
      </div>
      <div>
        <EventBox
          eventData={{
            images: ["/clan-of-xymox.jpeg"],
            name: "Clan of XYMOX",
            date: easternTime,
            url: "https://www.eventbrite.com/e/clan-of-xymox-x-odus-tour-with-curse-mackey-sine-fort-lauderdale-tickets-829025787447",
          }}
        />
      </div>
    </>
  );
}
