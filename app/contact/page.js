import Container from "@/components/UI/container";
import classes from "./page.module.css";

export default function ContactPage() {
  return (
    <section className={classes["contact-section"]}>
      <Container>
        <h1>Contact Us</h1>
        <div className={classes["form-container"]}>
          <form>
            <input type="text" placeholder="NAME" id="name" />
            <input type="email" placeholder="EMAIL" required id="email" />
            <textarea rows={5} placeholder="MESSAGE" required id="message" />
            <button type="submit"> Submit</button>
          </form>
        </div>
      </Container>
    </section>
  );
}
