import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="footer">
      <div class="footer-animation-container"></div>
      <div class="container footer-wrapper">
        <div class="footer-section">
          <h3>BrewCrew Club</h3>
          <p>India's coffee-first community.</p>
        </div>
        <div class="footer-section">
          <h4>Explore</h4>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#about">About BrewCrew Club</a>
            </li>
            <li>
              <a href="#features-heading">Features</a>
            </li>
            <li>
              <a href="#how-it-works-heading">How It Works</a>
            </li>
            <li>
              <a href="#community">Community</a>
            </li>
            <li>
              <a href="#contact-heading">Message Us</a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="pages/blog.html">Brewing Guides</a>
            </li>
            <li>
              <a href="pages/rewards.html">Rewards</a>
            </li>
            <li>
              <a href="pages/faq.html">FAQ</a>
            </li>
            <li>
              <a href="LICENSE">License</a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Contact</h4>
          <address>
            <p>
              <i class="fa-solid fa-envelope"></i>
              <a href="mailto:brewcrewclub.in@gmail.com">
                brewcrewclub.in@gmail.com
              </a>
            </p>
            <p>
              <i class="fa-brands fa-instagram"></i>
              <a href="https://www.instagram.com/visitbcc/">visitbcc</a>
            </p>
          </address>
        </div>
      </div>
      <div class="footer-bottom">
        <p>
          &copy; <span id="current-year">2025</span> BrewCrew Club. Crafted with
          love & caffeine by Akansh Rawat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
