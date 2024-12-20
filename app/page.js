import { getEvents } from "@/lib/events";
import classes from "./page.module.css";

import Hero from "@/components/hero/hero";
import Container from "@/components/UI/container";
import EventsSlider from "@/components/events/events-slider";
import Gallery from "@/components/gallery/gallery";
import { Suspense } from "react";
import LoadingIndicator from "@/components/UI/loading-indicator";

export default async function HomePage() {
  const events = await getEvents();

  return (
    <main>
      <Hero />
      <Suspense fallback={<LoadingIndicator />}>
        <EventsSlider events={events} />
      </Suspense>
      <section className={classes["about-section"]}>
        <Container className={classes.container}>
          <h2>About Us</h2>
          <p>
            WE ARE A NEW MUSIC VENUE IN DOWNTOWN FORT LAUDERDALE PROVIDING
            ELEVATED EXPERIENCES WITH HIGH GRADE PRODUCTION, WORLD CLASS
            HOSPITALITY, AND A GREAT SENSE OF COMMUNITY. IN ADDITION WE HAVE
            AMAZING FOOD AND A COCKTAIL MENU LIKE NO OTHER.
          </p>
        </Container>
      </section>
      <Gallery />
    </main>
  );
}
