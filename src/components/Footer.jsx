
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <p className="footer-tagline">India's first coffee-only community. Discover, connect, and sip smarter.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Product</h4>
              <ul>
                <li><Link to="/cafes">Cafés</Link></li>
                <li><Link to="/forum">Forum</Link></li>
                <li><Link to="/guides">Guide</Link></li>
                <li><Link to="/for-cafes">For Cafés</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Connect</h4>
              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg>
                </a>
                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.638 4.216 3.804 4.654-.707.192-1.452.235-2.206.084.616 1.92 2.396 3.316 4.491 3.355-1.749 1.371-3.946 2.185-6.333 2.185-.41 0-.813-.023-1.21-.07 2.278 1.457 4.986 2.308 7.893 2.308 9.467 0 14.653-7.842 14.653-14.653 0-.223-.005-.446-.014-.668.995-.718 1.868-1.622 2.559-2.658z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                 <a href="mailto:info@brewcrew.club" aria-label="Email">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
                </a>
              </div>
              <p className="footer-crafted-text">Crafted with love & caffeine</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} BrewCrew Club. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: var(--primary-color);
          color: var(--text-light);
          padding: 4rem 5% 2rem;
          border-top: 1px solid #333;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-main {
          display: grid;
          grid-template-columns: 1.5fr 2fr;
          gap: 4rem;
          padding-bottom: 3rem;
        }
        .footer-brand {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-light);
          margin: 0;
        }
        .footer-tagline {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 300px;
        }
        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .footer-heading {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-light);
          margin: 0 0 1.5rem 0;
        }
        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-column a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-column a:hover {
          color: var(--accent-color);
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .social-links a {
          color: var(--text-muted);
          background-color: #3a3a3c;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .social-links a:hover {
          color: var(--text-light);
          background-color: var(--accent-color);
        }
        .footer-crafted-text {
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid #3a3a3c;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .footer-legal {
          display: flex;
          gap: 1.5rem;
        }
        .footer-legal a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-legal a:hover {
          color: var(--accent-color);
        }
        
        @media (max-width: 992px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .footer-links {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
        @media (max-width: 576px) {
          .footer-links {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
