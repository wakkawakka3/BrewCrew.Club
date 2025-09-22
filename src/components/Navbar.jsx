import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClass = ({ isActive }) => (isActive ? "active" : "");

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
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/cafes" className={linkClass}>Cafés</NavLink>
          <NavLink to="/forum" className={linkClass}>Forum</NavLink>
          <NavLink to="/blog" className={linkClass}>Guide</NavLink>
          <NavLink to="/about-us" className={linkClass}>About Us</NavLink>
          <NavLink to="/profile" className={linkClass}>Profile</NavLink>
          <span className="nav-divider" aria-hidden="true"></span>
          <NavLink to="/join" className="nav-join-button">Join Us</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
