
import React from 'react';

const FavoriteCafes = ({ cafes }) => {
  return (
    <div className="favorite-cafes-section">
      <h3 className="section-title">Favorite Cafes</h3>
      <div className="cafes-grid">
        {cafes.map(cafe => (
          <div key={cafe.id} className="cafe-card">
            <img src={cafe.image} alt={cafe.name} className="cafe-image" />
            <div className="cafe-info">
              <h4 className="cafe-name">{cafe.name}</h4>
              <p className="cafe-location">{cafe.location}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .favorite-cafes-section {
          background: var(--secondary-color);
          border-radius: 14px;
          padding: 1.5rem;
          border: 1px solid var(--border-color);
          margin-top: 1.5rem;
        }
        .section-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary-color);
          margin: 0 0 1rem 0;
        }
        .cafes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
        }
        .cafe-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          transition: all .2s ease;
        }
        .cafe-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.1);
        }
        .cafe-image {
          width: 100%;
          height: 120px;
          object-fit: cover;
        }
        .cafe-info {
          padding: 1rem;
        }
        .cafe-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--primary-color);
          margin: 0 0 0.25rem 0;
        }
        .cafe-location {
          font-size: 0.875rem;
          color: var(--text-muted);
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default FavoriteCafes;
