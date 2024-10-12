"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import classes from "./header.module.css";
import Container from "../UI/container";
import Logo from "@/assets/Logo-Green.png";
import mobileLogo from "@/assets/Title.png";
import { useState } from "react";

export default function Header() {
  const [slideIn, setSlideIn] = useState(false);

  const slideInMenuHandler = () => {
    setSlideIn((prevState) => !prevState);
  };

  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <Link href="/" className={classes.logo}>
          <Image
            alt="Kemistry Night Club Logo"
            src={Logo}
            width="80"
            height="50"
            priority
          />
        </Link>

        <div className={classes["mobile-menu"]}>
          <FontAwesomeIcon
            icon={slideIn ? faTimes : faAlignRight}
            className={classes.hamburger}
            size="2xl"
            onClick={slideInMenuHandler}
          />
          <div
            className={
              slideIn
                ? `${classes["mobile-menu__slideIn"]} ${classes.active}`
                : `${classes["mobile-menu__slideIn"]}`
            }
          >
            <Link
              href="/"
              className={classes.logo}
              onClick={() => setSlideIn(false)}
            >
              <Image
                alt="Kemistry Night Club 3D Logo"
                src={mobileLogo}
                width="80"
                height="50"
                priority
              />
            </Link>
            <div className={classes.devider}></div>

            <nav>
              <ul>
                <li>
                  <Link href="/events" onClick={() => setSlideIn(false)}>
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" onClick={() => setSlideIn(false)}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/venue-rental" onClick={() => setSlideIn(false)}>
                    Venue Rental
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={() => setSlideIn(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={classes["nav-btn"]}>
              <Link href="/reserve-table" onClick={() => setSlideIn(false)}>
                Table Reservation
              </Link>
              <Link
                target="_blank"
                href="https://link.dice.fm/kemistry"
                onClick={() => setSlideIn(false)}
              >
                Tickets
              </Link>
            </div>
          </div>
        </div>
        <div className={classes["main-menu"]}>
          <nav>
            <ul>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/venue-rental">Venue Rental</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className={classes["nav-btn"]}>
            <Link href="/reserve-table">Table Reservation</Link>
            <Link target="_blank" href="https://link.dice.fm/kemistry">
              Tickets
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
