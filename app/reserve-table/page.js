"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Container from "@/components/UI/container";
import ImageLightBox from "@/components/UI/image-lightbox";
import classes from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import groundLevel from "@/assets/Ground-Level.jpeg";
import secondLevel from "@/assets/Second-Level.jpeg";

export default function TableReservationPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className={classes["map-section"]}>
        <Container className={classes["map-container"]}>
          <h1>Table Reservation</h1>
          <div className={classes.maps}>
            <div className={classes.map}>
              <Image
                onClick={() => setIsOpen(true)}
                src={groundLevel}
                width={300}
                height={300}
                alt="Kemistry Night Club map - Ground Level"
              />
              <span>Ground Level</span>
            </div>
            <div className={classes.map}>
              <Image
                onClick={() => setIsOpen(true)}
                src={groundLevel}
                width={300}
                height={300}
                alt="Kemistry Night Club map - Second Level"
              />
              <span>Second Level</span>
            </div>
            <Lightbox
              open={isOpen}
              close={() => setIsOpen(false)}
              slides={[groundLevel, secondLevel]}
              render={{ slide: ImageLightBox }}
            />
          </div>
        </Container>
      </section>
      <section className={classes["contact-section"]}>
        <Container>
          <h2>Reserve Now</h2>
          <div className={classes.buttons}>
            <Link href="tel:(954)20297-9255">
              <FontAwesomeIcon icon={faPhone} /> Call Now (954) 297-9255
            </Link>
            <Link href="mailto:VIP@kemistrynightclub.com">
              <FontAwesomeIcon icon={faEnvelope} /> Email:
              vip@kemistrynightclub.com
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}