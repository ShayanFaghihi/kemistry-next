"use client";
import { useEffect } from "react";
import LoadingIndicator from "../UI/loading-indicator";

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

  return (
    <>
      <h2 className={classes.heading}>Kemistry Upcoming Events</h2>
      <div id="dice-event-list-widget" className={classes["events-widget"]}>
        <LoadingIndicator />
      </div>
    </>
  );
}
