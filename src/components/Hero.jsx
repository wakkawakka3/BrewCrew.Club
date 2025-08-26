import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <header id="hero" className="section">
      <div className="container hero-content">
        <h1>India’s First Coffee-Only Club</h1>
        <p>
          Discover cafés, connect with coffee lovers, and unlock exclusive
          brews. Because life’s too short for bad coffee.
        </p>
        <Link to="/join" className="cta-button">Join the Club</Link>
      </div>
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
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(74,44,15,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(74,44,15,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(74,44,15,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#4a2c0f" />
          </g>
        </svg>
      </div>
    </header>
  );
};

export default Hero;