import React from "react";
import Image from "next/image";

import getDate from "@/lib/getDate";
import classes from "./event-box.module.css";

export default function EventBox({ eventData, className }) {
  const { images, name, date, targetURL } = eventData;

  const formatedDate = getDate(date);

  return (
    <li className={`${className} ${classes.event}`}>
      <Image
        className={classes["event-image"]}
        src={images[0]}
        width={300}
        height={300}
        alt={`${name} at Kemistry Night Club`}
      />
      <h2 className={classes["event-name"]}>{name}</h2>
      <p className={classes["event-date"]}>{formatedDate}</p>
    </li>
  );
}