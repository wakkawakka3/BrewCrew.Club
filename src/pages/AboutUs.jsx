import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="page-container default-page">
      <Navbar />
      <main className="default-main container">
        <header className="page-header">
          <h1>Our Story: The BrewCrew Journey</h1>
          <p>From a simple idea to India's first coffee-only community.</p>
        </header>

        <section className="story-section">
          <h2>Born From a Passion for Coffee</h2>
          <p>
            BrewCrew Club was founded by a group of friends who spent countless
            weekends hopping between local cafés in search of the perfect cup.
            We realized that while there were many platforms for foodies, there
            was no dedicated space for the passionate coffee community in India.
            Our mission is to change that by creating a digital hub where
            enthusiasts can connect, share their stories, and support local
            cafés.
          </p>
        </section>

        <section className="team-section">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            <div className="team-member-card">
              <img
                src="https://placehold.co/150x150/d7a86e/3d2b1f?text=Akansh"
                alt="Akansh Rawat"
              />
              <h3>Akansh Rawat</h3>
              <p>Founder & CEO</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
