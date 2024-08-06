import Container from "@/components/UI/container";
import classes from "./page.module.css";
import Form from "@/components/contact/formHandler";

export default function ContactPage() {
  return (
    <main>
      <section className={classes["contact-section"]}>
        <Container>
          <h1>Contact Us</h1>
          <Form formType="contact" />
        </Container>
      </section>
    </main>
  );
}
