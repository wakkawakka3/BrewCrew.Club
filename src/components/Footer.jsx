import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo-section">
          <Link to="/" className="footer-logo">
            BrewCrew Club
          </Link>
          <p className="footer-tagline">
            Discover, connect, and sip with a community of coffee lovers.
          </p>
        </div>
        <div className="footer-links-grid">
          {/* Column 1: Home Sections */}
          <div className="footer-column">
            <h3 className="footer-heading">Explore</h3>
            <ul className="footer-links">
              <li>
                <a href="/#about">
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="/#features">
                  <span>Features</span>
                </a>
              </li>
              <li>
                <a href="/#how-it-works">
                  <span>How It Works</span>
                </a>
              </li>
              <li>
                <a href="/#community">
                  <span>Community</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Main Navigation */}
          <div className="footer-column">
            <h3 className="footer-heading">Navigate</h3>
            <ul className="footer-links">
              <li>
                <Link to="/cafes">
                  <span>Cafés</span>
                </Link>
              </li>
              <li>
                <Link to="/forum">
                  <span>Forum</span>
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <span>Guide</span>
                </Link>
              </li>
              <li>
                <Link to="/about-us">
                  <span>About Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="footer-column">
            <h3 className="footer-heading">Connect</h3>
            <ul className="footer-links social-links">
              <li>
                <a href="mailto:brewcrewclub.in@gmail.com">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>Message Us</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/visitbcc/" target="_blank" rel="noopener noreferrer">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.165 5.48 1.165 8.1 0a.05.05 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1 .015.019.05.05 0 0 1-.02.066 8.875 8.875 0 0 1-1.248.595.05.05 0 0 0-.01.059c.236.466.51.909.818 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.649-1.612 1.438-1.612.788 0 1.438.723 1.438 1.612 0 .888-.65 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.65-1.612 1.438-1.612.789 0 1.438.723 1.438 1.612 0 .888-.649 1.612-1.438 1.612Z" />
                  </svg>
                  <span>Discord</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} BrewCrew Club. All Rights Reserved.
        </p>
        <div className="footer-legal-links">
          <Link to="/privacy-policy">
            <span>Privacy Policy</span>
          </Link>
          <Link to="/terms-of-service">
            <span>Terms of Service</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .footer-container {
          background-color: #1a1a1a;
          color: #a1a1a6;
          padding: 4rem 5% 2rem;
          border-top: 1px solid #3a3a3c;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 3rem;
        }
        .footer-logo-section {
          flex: 1;
          min-width: 250px;
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #f5f5f7;
          text-decoration: none;
          margin-bottom: 1rem;
          display: inline-block;
        }
        .footer-tagline {
          font-size: 0.9rem;
          max-width: 300px;
        }
        .footer-links-grid {
          flex: 2;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
        }
        .footer-column {
          display: flex;
          flex-direction: column;
        }
        .footer-heading {
          font-size: 1.1rem;
          font-weight: 600;
          color: #f5f5f7;
          margin-bottom: 1.5rem;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-links a,
        .footer-legal-links a {
          color: #a1a1a6;
          text-decoration: none;
          transition: color 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
        }
        .footer-links a:hover,
        .footer-legal-links a:hover {
          color: #b8860b;
        }
        .footer-links a span,
        .footer-legal-links a span {
          position: relative;
          padding-bottom: 4px;
        }
        .footer-links a span::after,
        .footer-legal-links a span::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background-color: #b8860b;
          transition: width 0.3s ease-in-out;
        }
        .footer-links a:hover span::after,
        .footer-legal-links a:hover span::after {
          width: 100%;
        }
        .social-links a svg {
          transition: transform 0.2s;
        }
        .social-links a:hover svg {
          transform: scale(1.1);
        }
        .footer-bottom {
          max-width: 1200px;
          margin: 3rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid #3a3a3c;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
        }
        .footer-legal-links {
          display: flex;
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
