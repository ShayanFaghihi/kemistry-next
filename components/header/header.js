"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import classes from "./header.module.css";
import Container from "../UI/container";
import Logo from "@/assets/Logo-Green.png";
import mobileLogo from "@/assets/Title.png";
import { useState } from "react";

export default function Header() {
  const [slideIn, setSlideIn] = useState(true);

  const slideInMenuHandler = () => {
    setSlideIn((prevState) => !prevState);
  };

  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <Link href="/" className={classes.logo}>
          <Image src={Logo} width="80" height="50" priority />
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
            <Link href="/" className={classes.logo}>
              <Image src={mobileLogo} width="80" height="50" priority />
            </Link>
            <div className={classes.devider}></div>

            <nav>
              <ul>
                <li>
                  <Link href="/events">Events</Link>
                </li>
                <li>
                  <Link href="/gallery">Gallery</Link>
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
