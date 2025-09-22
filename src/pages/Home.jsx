import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Coffee Waves SVG Component
const CoffeeWaves = () => (
  <div className="hero-waves">
    <svg
      className="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="parallax">
        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(74,44,15,0.7)" />
        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(74,44,15,0.5)" />
        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(74,44,15,0.3)" />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#4a2c0f" />
      </g>
    </svg>
  </div>
);

const useFadeIn = () => {
  const elementsRef = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return elementsRef;
};

const Home = () => {
  const fadeInRefs = useFadeIn();

  // Handle hash navigation when coming from other pages
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.substring(1); // Remove the # symbol
        const element = document.getElementById(elementId);
        if (element) {
          // Small delay to ensure page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }
    };

    // Handle initial hash
    handleHashNavigation();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashNavigation);

    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
    };
  }, []);

  return (
    <div className="page-container">
      <Navbar />
      <main>
        <header id="hero">
          <div className="container hero-content">
            <h1>India’s First Coffee-Only Club</h1>
            <p>
              Discover cafés, connect with coffee lovers, and unlock exclusive
              brews. Because life’s too short for bad coffee.
            </p>
            <Link to="/join" className="cta-button">
              Join the Club
            </Link>
          </div>
          <CoffeeWaves />
        </header>

        <div className="logo-marquee">
          <div className="marquee-track">
            <span>Starbucks</span> • <span>Blue Tokai Coffee</span> •{" "}
            <span>Third Wave Coffee</span> • <span>Dunkin'</span> •{" "}
            <span>Subko Coffee</span> • <span>Sleepy Owl</span> •{" "}
            <span>Café Coffee Day</span> • <span>Starbucks</span> •{" "}
            <span>Blue Tokai Coffee</span> • <span>Third Wave Coffee</span> •{" "}
            <span>Dunkin'</span> • <span>Subko Coffee</span> •{" "}
            <span>Sleepy Owl</span> • <span>Café Coffee Day</span> •
          </div>
        </div>

        <div className="main-content container">
          <section
            id="about"
            className="section fade-in"
            ref={(el) => (fadeInRefs.current[0] = el)}
          >
            <h2>About BrewCrew Club</h2>
            <div className="content-wrapper">
              <p>
                At BrewCrew Club, we believe coffee is more than a drink — it’s
                a vibe, a culture, and a community. From hidden indie cafés to
                your daily cappuccino fix, we’re building India’s first
                coffee-first platform where you can explore cafés, meet coffee
                lovers, and sip smarter.
              </p>
              <blockquote className="brand-story">
                <p>
                  <strong>
                    Born out of countless café-hopping sessions, BrewCrew Club
                    is a community-driven platform designed for and by coffee
                    lovers. Our vision is to build India's largest, most
                    passionate coffee-first community.
                  </strong>
                </p>
              </blockquote>
            </div>
          </section>

          <section
            id="features"
            className="section fade-in"
            ref={(el) => (fadeInRefs.current[1] = el)}
          >
            <h2>Features & Benefits</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>For Users</h3>
                <ul>
                  <li>
                    <strong>📍 Café Discovery:</strong> Find hidden gems and
                    read honest reviews.
                  </li>
                  <li>
                    <strong>👥 Community:</strong> Share your stories and
                    connect with enthusiasts.
                  </li>
                  <li>
                    <strong>🎟️ Rewards:</strong> Earn points and redeem them for
                    free drinks.
                  </li>
                  <li>
                    <strong>💳 Coffee Pass:</strong> Upcoming subscription for
                    daily discounts.
                  </li>
                </ul>
              </div>
              <div className="feature-card">
                <h3>For Cafés & Brands</h3>
                <ul>
                  <li>
                    <strong>📊 Dashboard:</strong> Gain valuable insights into
                    customer visits and loyalty.
                  </li>
                  <li>
                    <strong>🎯 Targeted Audience:</strong> Connect directly with
                    dedicated coffee lovers.
                  </li>
                  <li>
                    <strong>🎟️ Increase Footfall:</strong> Drive more customers
                    with exclusive perks.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section
            id="how-it-works"
            className="section fade-in"
            ref={(el) => (fadeInRefs.current[2] = el)}
          >
            <h2>How It Works</h2>
            <div className="how-it-works-flow">
              <div className="flow-card">
                <h3>For Users</h3>
                <ol>
                  <li>
                    <strong>Sign Up:</strong> Download the app or create your
                    account.
                  </li>
                  <li>
                    <strong>Discover & Share:</strong> Find new cafés and post
                    about your favorite brews.
                  </li>
                  <li>
                    <strong>Earn Rewards:</strong> Get points for your
                    activities.
                  </li>
                  <li>
                    <strong>Redeem Perks:</strong> Use points for free drinks
                    and exclusive merch.
                  </li>
                </ol>
              </div>
              <div className="flow-card">
                <h3>For Cafés</h3>
                <ol>
                  <li>
                    <strong>Partner Up:</strong> Reach out to us to get started.
                  </li>
                  <li>
                    <strong>List Your Café:</strong> Add your location and the
                    perks you want to offer.
                  </li>
                  <li>
                    <strong>Access Insights:</strong> Use your dashboard to
                    track customer engagement.
                  </li>
                  <li>
                    <strong>Build Loyalty:</strong> Watch your community and
                    business grow.
                  </li>
                </ol>
              </div>
            </div>
          </section>

          <section
            id="community"
            className="section fade-in"
            aria-labelledby="community-heading"
            ref={(el) => (fadeInRefs.current[3] = el)}
          >
            <h2 id="community-heading">Join the Community</h2>
            <p>
              Share your latte art, explore hidden cafés, and enjoy exclusive
              perks. Coffee tastes better when brewed together.
            </p>
            <Link to="/blog" className="cta-button">
              Share Your Coffee Story
            </Link>
          </section>

          <section
            id="partner"
            className="section fade-in"
            aria-labelledby="partner-heading"
            ref={(el) => (fadeInRefs.current[4] = el)}
          >
            <h2 id="partner-heading">Partner with BrewCrew</h2>
            <p>
              Ready to grow your coffee community? We give you direct access to
              a loyal, coffee-first audience. Increase your visibility, build
              customer loyalty, and get insights with our simple dashboard.
            </p>
            <a href="#contact" className="cta-button">
              List Your Café → Partner Now
            </a>
          </section>

          <section
            id="contact"
            className="section fade-in"
            ref={(el) => (fadeInRefs.current[5] = el)}
          >
            <h2>Message Us</h2>
            <p>
              Got a question? Want to partner with us? Or just want to say hi?
              We're all ears.
            </p>
            <div className="contact-form-wrapper">
              <form
                className="contact-form"
                action="https://formspree.io/f/xanbzonn"
                method="POST"
              >
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="What's on your mind?"
                    required
                  ></textarea>
                </div>
                <button className="cta-button" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
