import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Join = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for signing up!");
  };

  return (
    <div className="page-container default-page">
      <Navbar />
      <main className="join-main">
        <div className="form-container">
          <h1>
            <span className="black-text">Join the</span> <span className="yellow-text">BrewCrew</span>
            </h1>
          <p>
            Discover cafés, earn rewards, and share your coffee story with
            India's first coffee-only community.
          </p>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                required
              />
            </div>
            <button type="submit" className="cta-button">
              Sign Up
            </button>
          </form>
          <p className="privacy-text">
            By signing up, you agree to our privacy policy. We'll never spam you
            or sell your data.
          </p>
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .join-main {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 1rem;
          background: #f7f7f7;
        }
        .form-container {
          max-width: 500px;
          width: 100%;
          background: white;
          padding: 3rem;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .black-text {
          color: #1a1a1a;
        }
        .yellow-text {
          color: #B8860B;
        }
        p {
          color: #666;
          margin-bottom: 2rem;
        }
        .signup-form {
          display: flex;
          flex-direction: column;
        }
        .form-group {
          margin-bottom: 1.5rem;
          text-align: left;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        .form-group input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .cta-button {
          padding: 1rem;
          background: #1a1a1a;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .cta-button:hover {
          background: #333;
        }
        .privacy-text {
          font-size: 0.8rem;
          color: #999;
          margin-top: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default Join;
