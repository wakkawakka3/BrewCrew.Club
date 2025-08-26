import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      class="section fade-in"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading">Message Us</h2>
      <p>
        Got a question? Want to partner with us? Or just want to say hi? We're
        all ears.
      </p>
      <div class="contact-form-wrapper">
        <form
          id="contact-form"
          class="contact-form"
          action="https://formspree.io/f/xanbzonn"
          method="POST"
        >
          <div class="form-group">
            <label for="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              autocomplete="name"
            />
          </div>
          <div class="form-group">
            <label for="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              autocomplete="email"
            />
          </div>
          <div class="form-group">
            <label for="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="What's on your mind?"
              required
            ></textarea>
          </div>
          <button class="cta-button" type="submit">
            Send Message
          </button>
          <p id="form-status"></p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
