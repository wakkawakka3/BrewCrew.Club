import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Function to handle smooth scrolling to sections on home page
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Function to handle navigation to home page sections
  const handleHomeSectionClick = (sectionId) => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      // Navigate to home page first, then scroll to section
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="footer">
      <div className="footer-animation-container"></div>
      <div className="container footer-wrapper">
        <div className="footer-section">
          <h3>BrewCrew Club</h3>
          <p>India's coffee-first community.</p>
        </div>
        <div className="footer-section">
          <h4>Explore</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <button 
                onClick={() => handleHomeSectionClick('about')}
                className="footer-link-button"
              >
                About BrewCrew Club
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleHomeSectionClick('features')}
                className="footer-link-button"
              >
                Features
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleHomeSectionClick('how-it-works')}
                className="footer-link-button"
              >
                How It Works
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleHomeSectionClick('community')}
                className="footer-link-button"
              >
                Community
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleHomeSectionClick('contact')}
                className="footer-link-button"
              >
                Message Us
              </button>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>
              <Link to="/cafes">Café Discovery</Link>
            </li>
            <li>
              <Link to="/forum">Community Forum</Link>
            </li>
            <li>
              <Link to="/blog">Brewing Guides</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <address>
            <p>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:brewcrewclub.in@gmail.com">
                brewcrewclub.in@gmail.com
              </a>
            </p>
            <p>
              <i className="fa-brands fa-instagram"></i>
              <a href="https://www.instagram.com/visitbcc/" target="_blank" rel="noopener noreferrer">
                visitbcc
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; <span id="current-year">{currentYear}</span> BrewCrew Club. Crafted with
          love & caffeine by Akansh Rawat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
