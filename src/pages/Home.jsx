import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Features from "../components/Features";

// --- Enhanced SVG Icon Components ---

const CoffeeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="1" x2="6" y2="4"/>
    <line x1="10" y1="1" x2="10" y2="4"/>
    <line x1="14" y1="1" x2="14" y2="4"/>
  </svg>
);

const CommunityIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const RewardIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21l-1 .42c-.34.14-.7.22-1.06.22-.36 0-.72-.08-1.06-.22l-1-.42C5.47 17.98 5 17.55 5 17v-2.34"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21l1 .42c.34.14.7.22 1.06.22.36 0 .72-.08 1.06-.22l1-.42C18.53 17.98 19 17.55 19 17v-2.34"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
  </svg>
);

const TargetedAudienceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const DashboardInsightsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);

const IncreaseFootfallIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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

// Coffee Bean Decorative Elements
const CoffeeBean = ({ className = "", delay = 0 }) => (
  <div className={`coffee-bean ${className}`} style={{ animationDelay: `${delay}s` }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
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
        {/* Enhanced Hero Section */}
        <header id="hero" className="hero-section">
          <div className="hero-background">
            <CoffeeBean className="bean-1" delay="0" />
            <CoffeeBean className="bean-2" delay="1" />
            <CoffeeBean className="bean-3" delay="2" />
            <CoffeeBean className="bean-4" delay="0.5" />
            <CoffeeBean className="bean-5" delay="1.5" />
          </div>
          <div className="container hero-content">
            <div className="hero-badge">
              <CoffeeIcon />
              <span>India's First Coffee-Only Community</span>
            </div>
            <h1 className="hero-title">
              <span className="gradient-text">Discover</span> Amazing Cafés,
              <br />
              <span className="accent-text">Connect</span> with Coffee Lovers
            </h1>
            <p className="hero-description">
              Join thousands of coffee enthusiasts exploring hidden gems, sharing experiences, 
              and unlocking exclusive perks. Your perfect cup awaits.
            </p>
            <div className="hero-actions">
              <Link to="/join" className="cta-button primary">
                <span>Join the Club</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/cafes" className="cta-button secondary">
                <LocationIcon />
                <span>Explore Cafés</span>
            </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Coffee Lovers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Partner Cafés</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Cities</div>
              </div>
            </div>
          </div>
          <CoffeeWaves />
        </header>

        {/* Enhanced Brand Marquee */}
        <div className="brand-marquee">
          <div className="marquee-content">
            <div className="marquee-label">Trusted by leading coffee brands</div>
          <div className="marquee-track">
              <span className="brand-item">Starbucks</span>
              <span className="brand-item">Blue Tokai Coffee</span>
              <span className="brand-item">Third Wave Coffee</span>
              <span className="brand-item">Dunkin'</span>
              <span className="brand-item">Subko Coffee</span>
              <span className="brand-item">Sleepy Owl</span>
              <span className="brand-item">Café Coffee Day</span>
              <span className="brand-item">Starbucks</span>
              <span className="brand-item">Blue Tokai Coffee</span>
              <span className="brand-item">Third Wave Coffee</span>
              <span className="brand-item">Dunkin'</span>
              <span className="brand-item">Subko Coffee</span>
              <span className="brand-item">Sleepy Owl</span>
              <span className="brand-item">Café Coffee Day</span>
            </div>
          </div>
        </div>

        <div className="main-content">
          {/* Enhanced About Section */}
          <section
            id="about"
            className="about-section fade-in"
            ref={(el) => (fadeInRefs.current[0] = el)}
          >
            <div className="container">
              <div className="section-header">
                <div className="section-badge">
                  <CoffeeIcon />
                  <span>About Us</span>
                </div>
                <h2 className="section-title">
                  More Than Just Coffee — It's a <span className="accent-text">Community</span>
                </h2>
                <p className="section-description">
                  We're building India's first coffee-first platform where passion meets discovery
                </p>
              </div>
              
              <div className="about-content">
                <div className="about-text">
                  <div className="text-block">
                    <h3>Our Story</h3>
                    <p>
                      Born out of countless café-hopping sessions and late-night coffee conversations, 
                      BrewCrew Club emerged from a simple belief: coffee is more than a drink — it's 
                      a vibe, a culture, and a community that brings people together.
                    </p>
                  </div>
                  
                  <div className="text-block">
                    <h3>Our Mission</h3>
                    <p>
                      From hidden indie cafés to your daily cappuccino fix, we're building India's 
                      first coffee-first platform where you can explore cafés, meet coffee lovers, 
                      and sip smarter. Every cup tells a story, and we're here to help you discover yours.
                    </p>
                  </div>
                </div>
                
                <div className="about-visual">
                  <div className="visual-card">
                    <div className="card-icon">
                      <CommunityIcon />
                    </div>
                    <h4>Community Driven</h4>
                    <p>Built by coffee lovers, for coffee lovers</p>
                  </div>
                  
                  <div className="visual-card">
                    <div className="card-icon">
                      <LocationIcon />
                    </div>
                    <h4>Discover Hidden Gems</h4>
                    <p>Find amazing cafés in your city and beyond</p>
                  </div>
                  
                  <div className="visual-card">
                    <div className="card-icon">
                      <RewardIcon />
                    </div>
                    <h4>Exclusive Perks</h4>
                    <p>Unlock rewards and special offers</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="fade-in" ref={(el) => (fadeInRefs.current[1] = el)}>
            <Features />
          </div>

          {/* Enhanced How It Works Section */}
          <section
            id="how-it-works"
            className="how-it-works-section fade-in"
            ref={(el) => (fadeInRefs.current[2] = el)}
          >
            <div className="container">
              <div className="section-header">
                <div className="section-badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11H5a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h4m0-7v7m0-7h10a2 2 0 0 1 2 2v3c0 1.1-.9 2-2 2H9m0-7V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>
                  </svg>
                  <span>How It Works</span>
                </div>
                <h2 className="section-title">
                  Simple Steps to <span className="accent-text">Coffee Paradise</span>
                </h2>
                <p className="section-description">
                  Join thousands of coffee lovers and café partners in our growing community
                </p>
              </div>
              
              <div className="how-it-works-content">
                <div className="user-flow">
                  <div className="flow-header">
                    <div className="flow-icon">
                      <CommunityIcon />
                    </div>
                    <h3>For Coffee Lovers</h3>
                    <p>Discover, connect, and earn rewards</p>
                  </div>
                  
                  <div className="steps-grid">
                    <div className="step-card">
                      <div className="step-number">01</div>
                      <div className="step-content">
                        <h4>Sign Up & Explore</h4>
                        <p>Create your account and start discovering amazing cafés in your area</p>
                      </div>
                    </div>
                    
                    <div className="step-card">
                      <div className="step-number">02</div>
                      <div className="step-content">
                        <h4>Share & Connect</h4>
                        <p>Post about your favorite brews and connect with fellow coffee enthusiasts</p>
                      </div>
                    </div>
                    
                    <div className="step-card">
                      <div className="step-number">03</div>
                      <div className="step-content">
                        <h4>Earn Rewards</h4>
                        <p>Get points for your activities, reviews, and community engagement</p>
                      </div>
                    </div>
                    
                    <div className="step-card">
                      <div className="step-number">04</div>
                      <div className="step-content">
                        <h4>Redeem Perks</h4>
                        <p>Use your points for free drinks, exclusive merch, and special offers</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="partner-flow">
                  <div className="flow-header">
                    <div className="flow-icon">
                      <LocationIcon />
                    </div>
                    <h3>For Café Partners</h3>
                    <p>Grow your business and build loyalty</p>
                  </div>
                  
                  <div className="steps-grid">
                    <div className="step-card">
                      <div className="step-number">01</div>
                      <div className="step-content">
                        <h4>Partner Up</h4>
                        <p>Reach out to us and join our network of premium coffee partners</p>
                      </div>
                    </div>
                    
                    <div className="step-card">
                      <div className="step-number">02</div>
                      <div className="step-content">
                        <h4>List Your Café</h4>
                        <p>Add your location, menu, and the exclusive perks you want to offer</p>
                      </div>
                    </div>
                    
                    <div className="step-card">
                      <div className="step-number">03</div>
                      <div className="step-content">
                        <h4>Access Insights</h4>
                        <p>Use your dashboard to track customer engagement and business metrics</p>
                      </div>
                    </div>
                    
                    <div className="step-card">
                      <div className="step-number">04</div>
                      <div className="step-content">
                        <h4>Build Loyalty</h4>
                        <p>Watch your community grow and build lasting relationships with customers</p>
                      </div>
                    </div>
                  </div>
              </div>
              </div>
            </div>
          </section>

          {/* Enhanced Community Section */}
          <section
            id="community"
            className="community-section fade-in"
            aria-labelledby="community-heading"
            ref={(el) => (fadeInRefs.current[3] = el)}
          >
            <div className="container">
              <div className="community-content">
                <div className="community-text">
                  <div className="section-badge">
                    <CommunityIcon />
                    <span>Community</span>
                  </div>
                  <h2 id="community-heading" className="section-title">
                    Join the <span className="accent-text">Coffee Revolution</span>
                  </h2>
                  <p className="section-description">
                    Share your latte art, explore hidden cafés, and enjoy exclusive perks. 
                    Coffee tastes better when brewed together.
                  </p>
                  <div className="community-features">
                    <div className="feature-item">
                      <div className="feature-icon">📸</div>
                      <span>Share your coffee moments</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">🗺️</div>
                      <span>Discover hidden gems</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">🎁</div>
                      <span>Unlock exclusive perks</span>
                    </div>
                  </div>
                  <div className="community-actions">
                    <Link to="/forum" className="cta-button primary">
                      <span>Join the Community</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                    <Link to="/blog" className="cta-button secondary">
                      <span>Share Your Story</span>
            </Link>
                  </div>
                </div>
                
                <div className="community-visual">
                  <div className="visual-grid">
                    <div className="visual-card">
                      <div className="card-number">10K+</div>
                      <div className="card-label">Active Members</div>
                    </div>
                    <div className="visual-card">
                      <div className="card-number">500+</div>
                      <div className="card-label">Daily Posts</div>
                    </div>
                    <div className="visual-card">
                      <div className="card-number">24/7</div>
                      <div className="card-label">Always Active</div>
                    </div>
                    <div className="visual-card">
                      <div className="card-number">50+</div>
                      <div className="card-label">Cities Covered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Partner Section */}
          <section
            id="partner"
            className="partner-section fade-in"
            aria-labelledby="partner-heading"
            ref={(el) => (fadeInRefs.current[4] = el)}
          >
            <div className="container">
                <div className="partner-content">
                <div className="partner-text">
                  <div className="section-badge">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                      <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                    <span>Partnership</span>
                  </div>
                  <h2 id="partner-heading" className="section-title">
                    Partner with <span className="accent-text">BrewCrew Club</span>
                  </h2>
                  <p className="section-description">
                    Ready to grow your coffee community? We give you direct access to a loyal, 
                    coffee-first audience. Increase your visibility, build customer loyalty, 
                    and get insights with our simple dashboard.
                  </p>
                  
                  <div className="partner-benefits">
                    <div className="benefit-item">
                      <div className="benefit-icon">
                        <TargetedAudienceIcon />
                      </div>
                      <div className="benefit-content">
                        <h4>Targeted Audience</h4>
                        <p>Connect directly with 10,000+ dedicated coffee lovers who are actively seeking new experiences</p>
                      </div>
                    </div>
                    
                    <div className="benefit-item">
                      <div className="benefit-icon">
                        <DashboardInsightsIcon />
                      </div>
                      <div className="benefit-content">
                        <h4>Dashboard Insights</h4>
                        <p>Track customer visits, engagement, and loyalty with our comprehensive analytics dashboard</p>
                      </div>
                    </div>
                    
                    <div className="benefit-item">
                      <div className="benefit-icon">
                        <IncreaseFootfallIcon />
                      </div>
                      <div className="benefit-content">
                        <h4>Increase Footfall</h4>
                        <p>Drive more customers with exclusive perks, featured listings, and targeted promotions</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="partner-actions">
                    <a href="#contact" className="cta-button primary">
                      <span>List Your Café</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                    <Link to="/about-us" className="cta-button secondary">
                      <span>Learn More</span>
                    </Link>
                </div>
              </div>
                
                <div className="partner-visual">
                  <div className="visual-card">
                    <div className="card-header">
                      <h4>Community Impact</h4>
                      <p>Join our growing network</p>
                    </div>
                    <div className="stats-grid">
                <div className="stat-item">
                        <div className="stat-number">10K+</div>
                  <div className="stat-label">Active Members</div>
                </div>
                <div className="stat-item">
                        <div className="stat-number">500+</div>
                        <div className="stat-label">Partner Cafés</div>
                </div>
                <div className="stat-item">
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Cities</div>
                </div>
                <div className="stat-item">
                        <div className="stat-number">95%</div>
                        <div className="stat-label">Satisfaction</div>
                      </div>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Contact />
      </main>
      <Footer />
      <style jsx>{`
        /* Enhanced Hero Section */
        .hero-section {
          position: relative;
          padding: 8rem 0 10rem;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
        }

        .coffee-bean {
          position: absolute;
          color: rgba(184, 134, 11, 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .bean-1 { top: 20%; left: 10%; animation-delay: 0s; }
        .bean-2 { top: 60%; right: 15%; animation-delay: 1s; }
        .bean-3 { bottom: 30%; left: 20%; animation-delay: 2s; }
        .bean-4 { top: 40%; right: 30%; animation-delay: 0.5s; }
        .bean-5 { bottom: 50%; left: 60%; animation-delay: 1.5s; }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(184, 134, 11, 0.1);
          color: #b8860b;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .gradient-text {
          background: linear-gradient(135deg, #b8860b, #f4d03f);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .accent-text {
          color: #b8860b;
        }

        .hero-description {
          font-size: 1.25rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .cta-button.primary {
          background: linear-gradient(135deg, #b8860b, #f4d03f);
          color: white;
          box-shadow: 0 4px 15px rgba(184, 134, 11, 0.3);
        }

        .cta-button.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(184, 134, 11, 0.4);
        }

        .cta-button.secondary {
          background: white;
          color: #b8860b;
          border: 2px solid #b8860b;
        }

        .cta-button.secondary:hover {
          background: #b8860b;
          color: white;
        }

        .hero-stats {
          display: flex;
          gap: 3rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-stats .stat-item {
          text-align: center;
        }

        .hero-stats .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #b8860b;
          line-height: 1;
        }

        .hero-stats .stat-label {
          font-size: 0.9rem;
          color: #666;
          margin-top: 0.5rem;
        }

        /* Enhanced Brand Marquee */
        .brand-marquee {
          background: #1a1a1a;
          color: white;
          padding: 2rem 0;
          overflow: hidden;
        }

        .marquee-content {
          text-align: center;
        }

        .marquee-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .marquee-track {
          display: flex;
          gap: 3rem;
          animation: marquee 30s linear infinite;
        }

        .brand-item {
          font-size: 1.1rem;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .brand-item:hover {
            opacity: 1;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(184, 134, 11, 0.1);
          color: #b8860b;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }

        .section-description {
          font-size: 1.2rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* About Section */
        .about-section {
          padding: 6rem 0;
          background: white;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-text {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .text-block h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }

        .text-block p {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.7;
        }

        .about-visual {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .visual-card {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .visual-card:hover {
          transform: translateY(-5px);
        }

        .card-icon {
          width: 60px;
          height: 60px;
          background: rgba(184, 134, 11, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: #b8860b;
        }

        .visual-card h4 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }

        .visual-card p {
          color: #666;
          font-size: 0.95rem;
        }

        /* How It Works Section */
        .how-it-works-section {
          padding: 6rem 0;
          background: #f8f9fa;
        }

        .how-it-works-content {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .user-flow, .partner-flow {
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .flow-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .flow-icon {
          width: 80px;
          height: 80px;
          background: rgba(184, 134, 11, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: #b8860b;
        }

        .flow-header h3 {
          font-size: 2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }

        .flow-header p {
          color: #666;
          font-size: 1.1rem;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .step-card {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .step-number {
          width: 40px;
          height: 40px;
          background: #b8860b;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .step-content h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }

        .step-content p {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* Community Section */
        .community-section {
          padding: 6rem 0;
          background: white;
        }

        .community-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .community-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin: 2rem 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .feature-icon {
          font-size: 1.5rem;
        }

        .community-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .visual-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .visual-card {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
        }

        .card-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #b8860b;
          line-height: 1;
        }

        .card-label {
          font-size: 0.9rem;
          color: #666;
          margin-top: 0.5rem;
        }

        /* Partner Section */
        .partner-section {
          padding: 6rem 0;
          background: #f8f9fa;
        }

        .partner-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .partner-benefits {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin: 2rem 0;
        }

        .benefit-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .benefit-icon {
          width: 50px;
          height: 50px;
          background: rgba(184, 134, 11, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b8860b;
          flex-shrink: 0;
        }

        .benefit-content h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }

        .benefit-content p {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .partner-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: #b8860b;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #666;
          margin-top: 0.5rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .hero-stats {
            gap: 2rem;
          }

          .about-content,
          .community-content,
          .partner-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .steps-grid {
            grid-template-columns: 1fr;
          }

          .visual-grid,
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .community-actions,
          .partner-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;