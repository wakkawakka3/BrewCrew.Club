
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="graphic-container">
          <svg className="coffee-cup-svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#c0a062" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h14a4 4 0 0 1 4 4 4 4 0 0 1-4 4H2" />
            <line x1="6" y1="1" x2="6" y2="4" />
            <line x1="10" y1="1" x2="10" y2="4" />
            <line x1="14" y1="1" x2="14" y2="4" />
          </svg>
          <h1 className="error-code">404</h1>
        </div>
        <p className="error-message">Looks like this page is on a coffee break.</p>
        <p className="error-description">
          The page you were looking for doesn't exist. Let's get you back to a brewed page.
        </p>
        <Link to="/" className="home-button">
          Return to Homepage
        </Link>
      </div>

      <style jsx>{`
        .not-found-container {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          min-height: 100vh;
          background-color: #fdfdfd;
          color: #333;
          font-family: 'Inter', sans-serif;
        }
        .not-found-content {
          max-width: 600px;
          padding: 2rem;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.05);
        }
        .graphic-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .error-code {
          font-size: 8rem;
          font-weight: 800;
          color: #2d2d2d;
          line-height: 1;
        }
        .coffee-cup-svg {
          animation: steam 2.5s infinite linear;
        }
        
        @keyframes steam {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          50% { transform: translateY(-15px) scale(1.05); opacity: 0.5; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }

        .error-message {
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #B8860B;
        }
        .error-description {
          font-size: 1rem;
          color: #666;
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }
        .home-button {
          background-color: #B8860B;
          color: #ffffff !important;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(184, 134, 11, 0.2);
        }
        .home-button:hover {
          background-color: #A0740A;
          transform: translateY(-3px);
          box-shadow: 0 6px 25px rgba(184, 134, 11, 0.3);
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
