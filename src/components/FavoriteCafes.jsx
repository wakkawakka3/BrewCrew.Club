
import React from 'react';

const FavoriteCafes = ({ cafes }) => {
  return (
    <div className="favorite-cafes-grid">
      {cafes.map(cafe => (
        <div key={cafe.id} className="cafe-card">
          <div className="cafe-info">
            <h4 className="cafe-name">{cafe.name}</h4>
            <p className="cafe-location">📍 {cafe.location}</p>
            <p className="cafe-visits">{cafe.visits} visits</p>
          </div>
          <div className="cafe-actions">
            <span>❤️</span>
          </div>
        </div>
      ))}
      <style jsx>{`
        .favorite-cafes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .cafe-card {
          background: #FFF;
          border-radius: 12px;
          border: 1px solid #EAE0D5;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .cafe-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #4A2E1A;
          margin: 0 0 0.25rem 0;
        }
        .cafe-location, .cafe-visits {
          font-size: 0.9rem;
          color: #8C7B6A;
          margin: 0;
        }
        .cafe-actions span {
            cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default FavoriteCafes;
