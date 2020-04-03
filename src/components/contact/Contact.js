import React from "react";
import Title from "../Title";
import styles from "../../css/contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form
          action="https://formspree.io/welcome@handmadetours.es"
          method="POST"
          className={styles.form}
        >
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="your name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              className={styles.formControl}
              rows="10"
              placeholder="write here"
              required
            />
          </div>
          <div>
            <input
              type="submit"
              value="submit here"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
