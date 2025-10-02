import React, { useState } from "react";
import Layout from "../components/Layout";

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
    <Layout>
      <div className="cafes-page">
        <header className="page-header">
          <h1 className="hero-title">
            <span className="black-text">Discover Our</span> <span className="yellow-text">Partner Cafés</span>
            </h1>
          <p>
            Explore the best coffee shops in your city, from hidden gems to your
            favorite local spots, all reviewed by our dedicated community.
          </p>
        </header>
        <section className="container">
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
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .cafes-page {
          /* padding: 2rem 5%; */
        }
        .black-text {
          color: #1a1a1a;
        }
        .yellow-text {
          color: #B8860B;
        }
        .page-header {
          text-align: center;
          padding: 4rem 1rem 2rem;
        }
        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          animation: fadeInUp 0.6s ease-out;
        }
        .page-header p {
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
          color: #666;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .map-container {
          height: 400px;
          background: #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          border-radius: 8px;
        }
        .search-filter-bar {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .search-input {
          flex-grow: 1;
          padding: 0.75rem 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .filter-dropdown {
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          background: white;
        }
        .cafe-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding-bottom: 4rem;
        }
        .cafe-card {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        .cafe-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .cafe-card-img {
          height: 200px;
          background: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #aaa;
        }
        .cafe-card-content {
          padding: 1rem;
        }
        .cafe-card-content h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.25rem;
        }
        .cafe-card-content p {
          margin: 0;
          font-size: 0.9rem;
          color: #666;
        }
      `}</style>
    </Layout>
  );
};

export default Cafes;
