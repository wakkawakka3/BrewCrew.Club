import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const linkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <Link to="/" className="logo" onClick={closeMenu}>
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
          <NavLink to="/" end className={linkClass} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/cafes" className={linkClass} onClick={closeMenu}>Cafés</NavLink>
          <NavLink to="/forum" className={linkClass} onClick={closeMenu}>Forum</NavLink>
          <NavLink to="/blog" className={linkClass} onClick={closeMenu}>Guide</NavLink>
          <NavLink to="/about-us" className={linkClass} onClick={closeMenu}>About Us</NavLink>
          <NavLink to="/profile" className={linkClass} onClick={closeMenu}>Profile</NavLink>
          <div className="nav-actions">
            <NavLink to="/join" onClick={closeMenu}>Join Us</NavLink>
          </div>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1rem 5%;
          z-index: 1000;
          background-color: #1d1d1f;
          border-bottom: 1px solid #3a3a3c;
        }
        .nav-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.25rem;
          font-weight: 600;
          color: #f5f5f7;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .nav-links a {
          color: #a1a1a6;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: #f5f5f7;
        }
        .nav-links a.active {
          color: #f5f5f7;
          font-weight: 600;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .nav-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 992px) {
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #1d1d1f;
            flex-direction: column;
            align-items: stretch;
            padding: 1rem 5%;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;
          }
          .nav-links.is-open {
            max-height: 500px; /* Adjust as needed */
            padding: 1rem 5% 2rem;
          }
          .nav-links a {
            padding: 1rem 0;
            border-bottom: 1px solid #3a3a3c;
          }
          .nav-actions {
            padding-top: 1rem;
          }
          .nav-toggle {
            display: block;
          }
          .hamburger {
            display: block;
            width: 25px;
            height: 2px;
            background-color: #f5f5f7;
            position: relative;
            transition: transform 0.3s ease;
          }
          .hamburger::before, .hamburger::after {
            content: '';
            position: absolute;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #f5f5f7;
            transition: top 0.3s ease, transform 0.3s ease;
          }
          .hamburger::before {
            top: -8px;
          }
          .hamburger::after {
            top: 8px;
          }
          .nav-toggle.is-active .hamburger {
            transform: rotate(45deg);
          }
          .nav-toggle.is-active .hamburger::before {
            top: 0;
            transform: rotate(90deg);
          }
          .nav-toggle.is-active .hamburger::after {
            top: 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
