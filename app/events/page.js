import Container from "@/components/UI/container";
import classes from "./page.module.css";
import EventsGrid from "@/components/events/events-grid";

export default function EventsPage() {
  return (
    <main>
      <section className={classes["events-section"]}>
        <Container>
          <EventsGrid />
        </Container>
      </section>
    </main>
  );
}
