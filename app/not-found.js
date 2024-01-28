import Link from "next/link";
import Container from "@/components/UI/container";
import classes from "./not-found.module.css";

export default function NotFound() {
  return (
    <main>
      <section className={classes["not-found-section"]}>
        <Container>
          <h1>Not Found - 404</h1>
          <p>Could not find requested resource</p>

          <Link href="/events">View all events</Link>
        </Container>
      </section>
    </main>
  );
}
