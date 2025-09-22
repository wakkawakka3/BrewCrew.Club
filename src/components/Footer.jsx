import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleHomeSectionClick = (sectionId) => {
    if (window.location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-wrapper">
        <div className="footer-section">
          <h3>BrewCrew Club</h3>
          <p>India's coffee-first community.</p>
        </div>
        
        <div className="footer-section">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
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
            <li><Link to="/blog">Brewing Guides</Link></li>
            <li><Link to="/forum">Community Forum</Link></li>
            <li><Link to="/cafes">Café Discovery</Link></li>
            <li><Link to="/join">Join BrewCrew</Link></li>
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
              <a 
                href="https://www.instagram.com/visitbcc/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                visitbcc
              </a>
            </p>
          </address>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>
          &copy; {currentYear} BrewCrew Club. Crafted with love & caffeine by Akansh Rawat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;