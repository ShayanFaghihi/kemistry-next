import React from "react";
import Image from "next/image";

import getDate from "@/lib/getDate";
import classes from "./event-box.module.css";
import Link from "next/link";

export default function EventBox({ eventData }) {
  const { images, name, date, url } = eventData;

  const formatedDate = getDate(date);

  return (
    <div className={classes.event}>
      <div className={classes["event-image-box"]}>
        <Image
          className={`${classes["event-image"]}`}
          src={images[0]}
          alt={`${name} at Kemistry Night Club`}
          width={300}
          height={300}
        />
        <div className={classes["event-action"]}>
          <Link href="/reserve-table">Reserve a Table</Link>
          <Link target="_blank" rel="nofollow" href={url}>
            Buy Tickets
          </Link>
        </div>
      </div>
      <h3 className={classes["event-name"]}>{name}</h3>
      <p className={classes["event-date"]}>{formatedDate}</p>
    </div>
  );
}
