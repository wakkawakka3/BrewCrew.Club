import React, { useState } from "react";
import Layout from "../components/Layout";

// Enhanced Icons
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
);

const CoffeeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="1" x2="6" y2="4"/>
    <line x1="10" y1="1" x2="10" y2="4"/>
    <line x1="14" y1="1" x2="14" y2="4"/>
  </svg>
);

const CafeCard = ({ name, description, rating, location, features }) => (
  <div className="cafe-card">
    <div className="cafe-image">
      <div className="cafe-placeholder">
        <CoffeeIcon />
      </div>
      <div className="cafe-badge">Partner</div>
    </div>
    <div className="cafe-content">
      <div className="cafe-header">
        <h3 className="cafe-name">{name}</h3>
        <div className="cafe-rating">
          <StarIcon />
          <span>{rating}</span>
        </div>
      </div>
      <p className="cafe-description">{description}</p>
      <div className="cafe-location">
        <LocationIcon />
        <span>{location}</span>
      </div>
      <div className="cafe-features">
        {features.map((feature, index) => (
          <span key={index} className="feature-tag">{feature}</span>
        ))}
      </div>
    </div>
    </div>
);

const Cafes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [city, setCity] = useState("");
  const [feature, setFeature] = useState("");

  const cafes = [
    {
      name: "The Daily Grind",
      description: "A cozy spot with the best cold brew in town. Perfect for remote work with excellent Wi-Fi and comfortable seating.",
      rating: "4.8",
      location: "Koramangala, Bangalore",
      features: ["Wi-Fi", "Pet-friendly", "Outdoor Seating"]
    },
    {
      name: "Espresso Oasis",
      description: "Known for its artisanal pastries and strong espresso shots. A hidden gem in the heart of the city.",
      rating: "4.6",
      location: "Bandra West, Mumbai",
      features: ["Wi-Fi", "Artisanal Pastries", "Espresso Bar"]
    },
    {
      name: "Bean & Barrel",
      description: "A rustic café with a wide selection of pour-overs and single-origin beans. Coffee connoisseurs' paradise.",
      rating: "4.9",
      location: "Connaught Place, Delhi",
      features: ["Single Origin", "Pour Over", "Coffee Roasting"]
    },
    {
      name: "Third Wave Coffee",
      description: "Modern coffee culture meets traditional brewing methods. Experience the perfect blend of innovation and tradition.",
      rating: "4.7",
      location: "Indiranagar, Bangalore",
      features: ["Modern Design", "Specialty Coffee", "Workspace Friendly"]
    },
    {
      name: "Blue Tokai Coffee",
      description: "From farm to cup, experience the journey of premium Indian coffee. Sustainable and ethically sourced beans.",
      rating: "4.5",
      location: "Saket, Delhi",
      features: ["Ethical Sourcing", "Farm Fresh", "Sustainability"]
    },
    {
      name: "Subko Coffee",
      description: "Artisanal coffee roasters bringing you the finest single-origin beans from across India and the world.",
      rating: "4.8",
      location: "Powai, Mumbai",
      features: ["Artisanal Roasting", "Single Origin", "Coffee Education"]
    }
  ];

  return (
    <Layout>
      <div className="cafes-page">
        {/* Enhanced Hero Section */}
        <header className="cafes-hero">
          <div className="hero-background">
            <div className="hero-pattern"></div>
          </div>
          <div className="container hero-content">
            <div className="hero-badge">
              <CoffeeIcon />
              <span>Discover Amazing Cafés</span>
            </div>
          <h1 className="hero-title">
              <span className="gradient-text">Find Your</span> Perfect Coffee Spot
          </h1>
            <p className="hero-description">
            Explore the best coffee shops in your city, from hidden gems to your
            favorite local spots, all reviewed by our dedicated community.
          </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Partner Cafés</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Cities</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Reviews</div>
              </div>
            </div>
          </div>
        </header>

        {/* Enhanced Search and Filter Section */}
        <section className="search-section">
          <div className="container">
            <div className="search-container">
            <div className="search-box">
                <SearchIcon />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search by café name, location, or features..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
              <div className="filter-group">
            <select
                  className="filter-select"
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
                  className="filter-select"
              value={feature}
              onChange={(e) => setFeature(e.target.value)}
            >
              <option value="">All Features</option>
              <option value="wifi">Wi-Fi</option>
              <option value="pet-friendly">Pet-friendly</option>
              <option value="outdoor-seating">Outdoor Seating</option>
            </select>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Map Section */}
        <section className="map-section">
          <div className="container">
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-icon">
                  <LocationIcon />
                </div>
                <h3>Interactive Map Coming Soon</h3>
                <p>Explore cafés visually with our interactive map feature</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Cafés Grid */}
        <section className="cafes-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Featured Partner Cafés</h2>
              <p className="section-description">
                Discover amazing coffee experiences across India
              </p>
          </div>
          <div className="cafe-grid">
              {cafes.map((cafe, index) => (
            <CafeCard
                  key={index}
                  name={cafe.name}
                  description={cafe.description}
                  rating={cafe.rating}
                  location={cafe.location}
                  features={cafe.features}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        /* Premium Apple-like Design System */
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

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }

        /* Hero Section */
        .cafes-hero {
          position: relative;
          padding: 8rem 0 6rem;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .hero-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle at 20% 80%, rgba(184, 134, 11, 0.05) 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, rgba(184, 134, 11, 0.03) 0%, transparent 50%);
          animation: float 8s ease-in-out infinite;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(184, 134, 11, 0.1);
          color: #b8860b;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--accent-color), var(--yellow-600));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.25rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-stats {
          display: flex;
          gap: 3rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-stats .stat-item {
          text-align: center;
        }

        .hero-stats .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #b8860b;
          line-height: 1;
        }

        .hero-stats .stat-label {
          font-size: 0.9rem;
          color: #666;
          margin-top: 0.5rem;
        }

        /* Search Section */
        .search-section {
          padding: 3rem 0;
          background: white;
          border-bottom: 1px solid #f0f0f0;
        }

        .search-container {
            display: flex;
            gap: 1.5rem;
            align-items: center;
          max-width: 1000px;
          margin: 0 auto;
            flex-wrap: wrap;
        }

        .search-box {
            position: relative;
          flex: 1;
          min-width: 300px;
        }

        .search-input {
          width: 100%;
            padding: 1rem 1rem 1rem 3rem;
          border: 2px solid #f0f0f0;
            border-radius: 50px;
            font-size: 1rem;
          background: #f8f9fa;
            transition: all 0.3s ease;
        }

        .search-input:focus {
            outline: none;
          border-color: #b8860b;
          background: white;
          box-shadow: 0 0 0 4px rgba(184, 134, 11, 0.1);
        }

        .search-box svg {
            position: absolute;
          left: 1rem;
            top: 50%;
            transform: translateY(-50%);
          color: #999;
            pointer-events: none;
        }

        .filter-group {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .filter-select {
            padding: 1rem 1.5rem;
          border: 2px solid #f0f0f0;
            border-radius: 50px;
          background: #f8f9fa;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23999%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.4-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E');
            background-repeat: no-repeat;
            background-position: right 1.5rem center;
            background-size: 0.65em auto;
            padding-right: 3.5rem;
        }

        .filter-select:focus {
            outline: none;
          border-color: #b8860b;
          background: white;
          box-shadow: 0 0 0 4px rgba(184, 134, 11, 0.1);
        }

        /* Map Section */
        .map-section {
          padding: 4rem 0;
          background: #f8f9fa;
        }

        .map-container {
          height: 400px;
          background: white;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          border: 1px solid #f0f0f0;
        }

        .map-placeholder {
          text-align: center;
          color: #666;
        }

        .map-icon {
          width: 80px;
          height: 80px;
          background: rgba(184, 134, 11, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: #b8860b;
        }

        .map-placeholder h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .map-placeholder p {
          color: #666;
        }

        /* Cafés Section */
        .cafes-section {
          padding: 6rem 0;
          background: white;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }

        .section-description {
          font-size: 1.2rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .cafe-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .cafe-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
        }

        .cafe-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .cafe-image {
          position: relative;
          height: 200px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cafe-placeholder {
          width: 60px;
          height: 60px;
          background: rgba(184, 134, 11, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b8860b;
        }

        .cafe-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #b8860b;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .cafe-content {
          padding: 2rem;
        }

        .cafe-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .cafe-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
        }

        .cafe-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: rgba(184, 134, 11, 0.1);
          color: #b8860b;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .cafe-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .cafe-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .cafe-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .feature-tag {
          background: #f8f9fa;
          color: #666;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid #e9ecef;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .search-container {
            flex-direction: column;
            align-items: stretch;
          }

          .search-box {
            min-width: auto;
          }

          .filter-group {
            justify-content: center;
          }

          .hero-stats {
            gap: 2rem;
          }

          .cafe-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Cafes;
