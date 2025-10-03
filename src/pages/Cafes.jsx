import React, { useState } from "react";
import Layout from "../components/Layout";

const SearchIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;

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
            <div className="search-box">
                <SearchIcon />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search by café name or city..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
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
          animation: fadeInUp 0.6s ease-out 0.2s;
          animation-fill-mode: both;
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
            gap: 1.5rem;
            margin-bottom: 3rem;
            align-items: center;
            flex-wrap: wrap;
        }
        .search-box {
            position: relative;
            flex-grow: 1;
            display: flex;
            align-items: center;
        }
        .search-box .search-input {
            flex-grow: 1;
            padding: 1rem 1rem 1rem 3rem;
            border: 1px solid var(--border-color);
            border-radius: 50px;
            font-size: 1rem;
            background-color: var(--secondary-color);
            transition: all 0.3s ease;
            min-width: 250px;
        }
        .search-box .search-input:focus {
            outline: none;
            border-color: var(--accent-color);
            box-shadow: 0 0 0 3px rgba(184, 134, 11, 0.2);
        }
        .search-box svg {
            position: absolute;
            left: 1.25rem;
            top: 50%;
            transform: translateY(-50%);
            color: var(--text-muted);
            pointer-events: none;
        }
        .filter-dropdown {
            padding: 1rem 1.5rem;
            border: 1px solid var(--border-color);
            border-radius: 50px;
            background-color: var(--secondary-color);
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.4-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E');
            background-repeat: no-repeat;
            background-position: right 1.5rem center;
            background-size: 0.65em auto;
            padding-right: 3.5rem;
        }
        .filter-dropdown:focus {
            outline: none;
            border-color: var(--accent-color);
            box-shadow: 0 0 0 3px rgba(184, 134, 11, 0.2);
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
