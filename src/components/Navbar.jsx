
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
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
          <NavLink to="/cafes" className={linkClass} onClick={closeMenu}>Cafés</NavLink>
          <NavLink to="/forum" className={linkClass} onClick={closeMenu}>Forum</NavLink>
          <NavLink to="/blog" className={linkClass} onClick={closeMenu}>Guide</NavLink>
          <NavLink to="/about-us" className={linkClass} onClick={closeMenu}>About Us</NavLink>
          <div className="nav-actions">
            <NavLink to="/join" className="join-button" onClick={closeMenu}>Join Us</NavLink>
          </div>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          width: 95%;
          max-width: 1200px;
          z-index: 1000;
          padding: 0.5rem 1rem;
          
          background: rgba(22, 22, 23, 0.8);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1), 0 10px 30px rgba(0,0,0,0.2);

          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar.scrolled {
          top: 0.5rem;
          max-width: 950px;
        }

        .nav-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.25rem;
          font-weight: 700;
          color: #fefefe;
          text-decoration: none;
          padding: 0.5rem 1rem;
          transition: transform 0.3s ease;
        }
        .logo:hover {
            transform: scale(1.05);
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .nav-links a {
          color: #a1a1a6;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
          padding: 0.75rem 0;
        }

        .nav-links a:not(.join-button):hover {
          color: #f5f5f7;
        }

        .nav-links a.active:not(.join-button) {
          color: #fefefe;
        }

        .nav-links a.active:not(.join-button)::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: #B8860B;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          margin-left: 1rem;
        }
        .join-button {
            background-image: linear-gradient(to right, #DAA520, #B8860B);
            color: #1a1a1a !important;
            padding: 0.8rem 1.6rem !important;
            border-radius: 999px;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
         .join-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(184, 134, 11, 0.4);
         }
        .nav-toggle {
          display: none;
          background: transparent;
          border: none;
          padding: 0.5rem;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .nav-links {
            position: fixed;
            top: calc(100% + 1rem);
            left: 0;
            right: 0;
            width: 90%;
            margin: 0 auto;
            background-color: rgba(28, 28, 30, 0.95);
            backdrop-filter: blur(10px);
            flex-direction: column;
            align-items: stretch;
            padding: 1rem;
            border-radius: 16px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), padding 0.4s cubic-bezier(0.4, 0, 0.2, 1);
             border: 1px solid rgba(255, 255, 255, 0.1);
          }
          .nav-links.is-open {
            max-height: 500px;
            padding: 1.5rem;
          }
          .nav-links a {
            padding: 1rem;
            border-bottom: 1px solid #3a3a3c;
          }
           .nav-links a.active:not(.join-button)::after {
             display: none;
           }
          .nav-actions {
            padding: 1rem 0 0 0;
            margin-left: 0;
          }
          .join-button { width: 100%; text-align: center; }
          .nav-toggle {
            display: block;
            z-index: 2;
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
