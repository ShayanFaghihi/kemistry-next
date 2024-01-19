import Container from "@/components/UI/container";
import classes from "./page.module.css";
import ContactForm from "@/components/contact/contact-form";

export default function ContactPage() {
  return (
    <main>
      <section className={classes["contact-section"]}>
        <Container>
          <h1>Contact Us</h1>
          <ContactForm />
        </Container>
      </section>
    </main>
  );
}
