import { getEvents } from "@/lib/events";
import classes from "./page.module.css";

import Hero from "@/components/hero/hero";
import Container from "@/components/UI/container";
import EventsSlider from "@/components/events/events-slider";
import Gallery from "@/components/gallery/gallery";
import Footer from "@/components/footer/footer";

export default async function HomePage() {
  const events = await getEvents();

  return (
    <>
      <Hero />
      <EventsSlider events={events} />
      {events.map((event) => (
        <h2 key={event.id}>{event.name}</h2>
      ))}
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
      <Footer />
    </>
  );
}
