"use client";
import { useState } from "react";

import Image from "next/image";
import Container from "../UI/container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faXTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import classes from "./footer.module.css";
import logoWhite from "@/assets/whiteLogo.png";
import beatboxLogo from "@/assets/BeatBoxLogo2024.png";

export default function Footer() {
  const [userEmail, setUserEmail] = useState("");

  const addContactHandler = (e) => {
    e.preventDefault();
    const response = fetch("/api/audience", {
      method: "POST",
      body: JSON.stringify(userEmail),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <footer className={classes["footer-section"]}>
      <Container className={classes.container}>
        <div className={classes.logo}>
          <Image src={logoWhite} alt="Kemistry Night Club white logo" />
        </div>
        <div className={classes["footer-contact"]}>
          <h2>Stay Connected</h2>
          <p>Get all the latest content delivered right to your inbox</p>
          <form onSubmit={addContactHandler}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter a valid email address"
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
          <hr />
          <div className={classes["footer-sponsors"]}>
            <h3>Official Sponsors</h3>
            <ul>
              <li>
                <a href="https://beatboxbeverages.com/" target="_blank">
                  <Image src={beatboxLogo} alt="Beatbox Logo" width={100} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes["footer-social"]}>
          <a href="mailto:info@kemistrynightclub.com">
            Email: Info@kemistrynightclub.com
          </a>
          <ul>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61550999072420">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/kemistrynightclub/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/KemistrySoFlo">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCLhVVgm4BcqAZFTk7sqxpdg">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@kemistrynightclub">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
