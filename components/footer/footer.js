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

export default function Footer() {
  return (
    <footer className={classes["footer-section"]}>
      <Container className={classes.container}>
        <div className={classes.logo}>
          <Image src={logoWhite} alt="Kemistry Night Club white logo" />
        </div>
        <div className={classes["footer-contact"]}>
          <h2>Stay Connected</h2>
          <p>Get all the latest content delivered right to your inbox</p>
          <form>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter a valid email address"
              required
            />
            <button type="submit">Sign Up</button>
          </form>
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