import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Features from "../components/Features";

// --- SVG Icon Components ---

const TargetedAudienceIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const DashboardInsightsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);

const IncreaseFootfallIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

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

  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }
    };
    handleHashNavigation();
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
            <h1>
              <span className="black-text">India’s First</span>{" "}
              <span className="yellow-text">Coffee-Only Club</span>
            </h1>
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

        <div className="main-content">
          <section
            id="about"
            className="section fade-in container"
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

          <div className="fade-in" ref={(el) => (fadeInRefs.current[1] = el)}>
            <Features />
          </div>

          <section
            id="how-it-works"
            className="section fade-in container"
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
            className="section fade-in container"
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
            className="section fade-in container"
            aria-labelledby="partner-heading"
            ref={(el) => (fadeInRefs.current[4] = el)}
          >
            <div className="partner-grid-layout">
              <div className="partner-section-container">
                <div className="partner-content">
                  <h2 id="partner-heading">Partner with BrewCrew Club</h2>
                  <p>
                    Ready to grow your coffee community? We give you direct
                    access to a loyal, coffee-first audience. Increase your
                    visibility, build customer loyalty, and get insights with
                    our simple dashboard.
                  </p>
                  <div className="partner-features">
                    <div className="partner-feature-item">
                      <div className="partner-icon-wrapper">
                        <TargetedAudienceIcon />
                      </div>
                      <div>
                        <h4>Targeted Audience</h4>
                        <p>
                          Connect directly with 10,000+ dedicated coffee lovers.
                        </p>
                      </div>
                    </div>
                    <div className="partner-feature-item">
                      <div className="partner-icon-wrapper">
                        <DashboardInsightsIcon />
                      </div>
                      <div>
                        <h4>Dashboard Insights</h4>
                        <p>
                          Track customer visits, engagement, and loyalty with
                          our analytics.
                        </p>
                      </div>
                    </div>
                    <div className="partner-feature-item">
                      <div className="partner-icon-wrapper">
                        <IncreaseFootfallIcon />
                      </div>
                      <div>
                        <h4>Increase Footfall</h4>
                        <p>
                          Drive more customers with exclusive perks and featured
                          listings.
                        </p>
                      </div>
                    </div>
                  </div>
                  <a href="#contact" className="cta-button-dark">
                    List Your Café &rarr;
                  </a>
                </div>
              </div>
              <div className="community-stats-card">
                <h4>Community Stats</h4>
                <div className="stat-item">
                  <div className="stat-number">Worldwide</div>
                  <div className="stat-label">Active Members</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Discussions</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Always Active</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">Strong</div>
                  <div className="stat-label">Community</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">Trusted</div>
                  <div className="stat-label">Audience</div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Contact />
      </main>
      <Footer />
      <style jsx>{`
        .cta-button {
          background: linear-gradient(to right, #f9d423, #ffc72c);
          color: #3d2b1f;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        #community {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        h1 {
          font-size: 3.5rem;
          animation: fadeInUp 0.6s ease-out;
        }
        .black-text {
          color: #1a1a1a;
        }
        .yellow-text {
          color: #b8860b;
        }

        /* Partner Section Update */
        .partner-grid-layout {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
        }

        .partner-section-container {
          flex: 2.5;
          background-color: #fff;
          border: 1px solid #f0f0f0;
          border-radius: 12px;
          padding: 2.5rem;
          text-align: left;
        }
        .partner-content h2 {
          font-size: 1.75rem;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }

        .partner-content > p {
          max-width: 600px;
          font-size: 1rem;
          color: #555;
          margin-bottom: 2.5rem;
        }
        .partner-features {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        .partner-feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .partner-icon-wrapper {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: #fdf8e1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b8860b;
        }
        .partner-feature-item h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 0.25rem;
          color: #1a1a1a;
        }
        .partner-feature-item p {
          font-size: 0.95rem;
          color: #555;
          margin: 0;
          line-height: 1.5;
        }
        .cta-button-dark {
          display: inline-block;
          background-color: #1a1a1a;
          color: #fff;
          padding: 0.75rem 1.5rem;
          border-radius: 20px;
          text-decoration: none;
          font-weight: 600;
          transition: background-color 0.3s;
          font-size: 0.95rem;
        }
        .cta-button-dark:hover {
          background-color: #ffc72c;
          color: #1a1a1a;
        }

        /* Community Stats Card */
        .community-stats-card {
          flex: 1;
          background-color: #fff;
          border: 1px solid #f0f0f0;
          border-radius: 12px;
          padding: 1.5rem;
        }
        .community-stats-card h4 {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
          color: #333;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .community-stats-card h4::before {
          content: "⚡️";
          font-size: 1rem;
        }
        .stat-item {
          margin-bottom: 1.5rem;
        }
        .stat-item:last-child {
          margin-bottom: 0;
        }
        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1;
        }
        .stat-label {
          font-size: 1rem;
          color: #777;
        }

        @media (max-width: 992px) {
          .partner-grid-layout {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;