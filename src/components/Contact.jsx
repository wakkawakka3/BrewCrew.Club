import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <span className="get-in-touch-badge">Get in Touch</span>
          <h2 className="section-title">Message Us</h2>
          <p className="section-subtitle">
            Got a question? Want to partner with us? Or just want to say hi?
            We're all ears.
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3>Email Us</h3>
              <p>Quick response</p>
              <a href="mailto:brewcrewclub.in@gmail.com">
                brewcrewclub.in@gmail.com
              </a>
            </div>
            <div className="contact-card">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3>Social Media</h3>
              <p>Follow us</p>
              <a
                href="https://www.instagram.com/visitbcc"
                target="_blank"
                rel="noopener noreferrer"
              >
                @visitbcc on Instagram
              </a>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form
              id="contact-form"
              className="contact-form"
              action="https://formspree.io/f/xanbzonn"
              method="POST"
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us what's on your mind..."
                  required
                ></textarea>
              </div>
              <button className="cta-button" type="submit">
                <span>Send Message</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact-section {
          padding: 5rem 0;
          background-color: #fdfaf6;
          text-align: center;
        }
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .contact-header {
          margin-bottom: 3rem;
        }
        .get-in-touch-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: #f4e9dc;
          color: #3d2b1f;
          border-radius: 999px;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        .section-title {
          font-size: 2.8rem;
          color: #3d2b1f;
          margin-bottom: 0.5rem;
        }
        .section-subtitle {
          font-size: 1.1rem;
          color: #7a6a5a;
          max-width: 600px;
          margin: 0 auto;
        }
        .contact-content {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          text-align: left;
        }
        .contact-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .contact-card {
          background: #fff;
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid #eee;
        }
        .card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: #f4e9dc;
          border-radius: 8px;
          margin-bottom: 1rem;
          color: #3d2b1f;
        }
        .contact-card h3 {
          margin-bottom: 0.25rem;
          color: #3d2b1f;
        }
        .contact-card p {
          margin-bottom: 1rem;
          color: #7a6a5a;
        }
        .contact-card a {
          color: #b8860b;
          text-decoration: none;
          font-weight: 500;
        }
        .contact-form-wrapper {
          flex: 2;
          background: #fff;
          padding: 2.5rem;
          border-radius: 12px;
          border: 1px solid #eee;
        }
        .form-row {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .form-group {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .form-group label {
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #3d2b1f;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          color: #3d2b1f;
        }
        .form-group textarea {
            resize: vertical;
        }
        .cta-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 1rem;
          background-color: #3d2b1f;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .cta-button:hover {
          background-color: #2c1f16;
        }
        @media (max-width: 768px) {
          .contact-content {
            flex-direction: column;
          }
          .form-row {
            flex-direction: column;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;