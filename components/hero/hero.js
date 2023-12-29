import Image from "next/image";
import classes from "./hero.module.css";

import bg from "@/assets/Hero-Pattern.jpg";
import title from "@/assets/Title.png";

export default function Hero() {
  return (
    <section className={classes["hero-section"]}>
      <Image
        src={bg}
        alt="Kemistry Night Club hero background"
        className={classes.background}
        fill
        priority
      />
      <Image
        src={title}
        alt="Kemistry Text Logo on the hero background"
        className={classes.title}
        priority
      />
    </section>
  );
}
