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
          <h1>Join the BrewCrew</h1>
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
    </div>
  );
};

export default Join;
