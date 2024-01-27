import Link from "next/link";
import Container from "@/components/UI/container";
import classes from "./page.module.css";
export default function MerchPage() {
  return (
    <main>
      <section className={classes["merch-section"]}>
        <Container>
          <h1>Coming Soon!</h1>
          <Link href="/contact">Contact Us</Link>
        </Container>
      </section>
    </main>
  );
}
