import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CafeCard = ({ name, description }) => (
  <a href="#" className="cafe-card">
    <div className="cafe-card-img">Image Placeholder</div>
    <div className="cafe-card-content">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  </a>
);

const Cafes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [city, setCity] = useState("");
  const [feature, setFeature] = useState("");

  return (
    <div className="page-container default-page">
      <Navbar />
      <main className="default-main container">
        <header className="page-header">
          <h1>Discover Our Partner Cafés</h1>
          <p>
            Explore the best coffee shops in your city, from hidden gems to your
            favorite local spots, all reviewed by our dedicated community.
          </p>
        </header>
        <section>
          <div className="map-container">[Interactive Map Placeholder]</div>
          <div className="search-filter-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search by café name or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="filter-dropdown"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">All Cities</option>
              <option value="bangalore">Bangalore</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="bhubaneswar">Bhubaneswar</option>
            </select>
            <select
              className="filter-dropdown"
              value={feature}
              onChange={(e) => setFeature(e.target.value)}
            >
              <option value="">All Features</option>
              <option value="wifi">Wi-Fi</option>
              <option value="pet-friendly">Pet-friendly</option>
              <option value="outdoor-seating">Outdoor Seating</option>
            </select>
          </div>
          <div className="cafe-grid">
            <CafeCard
              name="The Daily Grind"
              description="A cozy spot with the best cold brew in town."
            />
            <CafeCard
              name="Espresso Oasis"
              description="Known for its artisanal pastries and strong espresso shots."
            />
            <CafeCard
              name="Bean & Barrel"
              description="A rustic café with a wide selection of pour-overs and single-origin beans."
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cafes;
