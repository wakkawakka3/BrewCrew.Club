import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container nav-wrapper">
        <Link to="/" className="logo">
          BrewCrew Club
        </Link>

        <button
          className={`nav-toggle ${isOpen ? "is-active" : ""}`}
          aria-label="toggle navigation menu"
          onClick={toggleMenu}
        >
          <span className="hamburger"></span>
        </button>

        <div className={`nav-links ${isOpen ? "is-open" : ""}`}>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/cafes">Cafés</NavLink>
          <NavLink to="/forum">Forum</NavLink>
          <NavLink to="/blog">Guide</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/join" className="nav-join-button">
            Join Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
