
import React, { useState } from 'react';
import Layout from '../components/Layout';
import FavoriteCafes from '../components/FavoriteCafes';

// Mock data - in a real app, this would come from a backend
const initialUser = {
  name: "Akansh Rawat",
  location: "Mumbai, India",
  bio: "Coffee enthusiast & café explorer. Always on the hunt for the perfect pour over. 🕉️",
  profileImage: "https://i.ibb.co/2SBRnpD/akansh-rawat.jpg",
  badges: ["Coffee Connoisseur", "Top Reviewer", "50+ Check-ins"],
  stats: {
    reviews: 42,
    checkIns: 67,
    followers: 23,
    points: 890,
  }
};

const activities = [
  { id: 1, type: 'review', content: 'Amazing Ethiopian pour over! The fruity notes really came through.', cafe: 'Reviewed Blue Tokai Coffee Roasters', rating: 5, timestamp: '2 hours ago' },
  { id: 2, type: 'check-in', content: 'Checked in at Third Wave Coffee', timestamp: '1 day ago' },
  { id: 3, type: 'discussion', content: 'Started discussion: Best Cold Brew Recipe?', timestamp: '2 days ago' },
];

const favoriteCafes = [
  { id: 1, name: "Blue Tokai Coffee", location: "Delhi", visits: 12 },
  { id: 2, name: "Subko Coffee", location: "Mumbai", visits: 8 },
  { id: 3, name: "Third Wave Coffee", location: "Bangalore", visits: 15 },
];

// Helper components for better structure
const StatItem = ({ value, label, icon }) => (
  <div className="stat">
    {icon}
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
);

const BadgeItem = ({ label, icon }) => (
    <div className="badge">
        {icon}
        <span>{label}</span>
    </div>
);

const Profile = () => {
  const [activeTab, setActiveTab] = useState('recent');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [user, setUser] = useState(initialUser);
  const [editedUser, setEditedUser] = useState(user);

  const handleEditProfile = () => {
    setEditedUser(user);
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => setIsEditModalOpen(false);

  const handleSaveProfile = () => {
    setUser(editedUser);
    setIsEditModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prevState => ({ ...prevState, [name]: value }));
  };
  
  const renderActivityIcon = (type) => {
    switch (type) {
      case 'review': return '⭐';
      case 'check-in': return '☕';
      case 'discussion': return '💬';
      default: return '➡️';
    }
  };


  return (
    <Layout>
      <div className="profile-page">
        <div className="profile-header-container">
          <div className="profile-header">
            <div className="avatar-section">
              <img src={user.profileImage} alt={user.name} className="profile-avatar" />
            </div>
            <div className="user-info">
              <div className="name-edit-section">
                <h1 className="user-name">{user.name}</h1>
                <button className="edit-profile-btn" onClick={handleEditProfile}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M12.2929 1.70711C12.6834 1.31658 13.3166 1.31658 13.7071 1.70711L14.2929 2.29289C14.6834 2.68342 14.6834 3.31658 14.2929 3.70711L4.41421 13.5858C4.22383 13.7762 3.96929 13.881 3.70711 13.881H2.11895C1.84318 13.881 1.61895 13.6568 1.61895 13.381V11.7929C1.61895 11.5307 1.72383 11.2762 1.91421 11.0858L11.7929 1.20711C11.7929 1.20711 12.2929 1.70711 12.2929 1.70711ZM11.5 4.5L10 6L8.5 4.5L10 3L11.5 4.5Z" /></svg>
                  <span>Edit Profile</span>
                </button>
              </div>
              <p className="user-location">{user.location}</p>
              <p className="user-bio">{user.bio}</p>
            </div>
          </div>
            <div className="user-stats-container">
                <div className="user-stats">
                    <StatItem value={user.stats.reviews} label="Reviews" icon={<svg className="stat-icon" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>} />
                    <StatItem value={user.stats.checkIns} label="Check-ins" icon={<svg className="stat-icon" viewBox="0 0 24 24"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/></svg>} />
                    <StatItem value={user.stats.followers} label="Followers" icon={<svg className="stat-icon" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>} />
                    <StatItem value={user.stats.points} label="Points" icon={<svg className="stat-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>} />
                </div>
            </div>
            <div className="user-badges-container">
                <div className="user-badges">
                {user.badges.map(badge => <BadgeItem key={badge} label={badge} icon={<svg className="badge-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-3.5-3.5 1.41-1.41L11 13.17l5.59-5.59L18 9l-7 7z"/></svg>} /> )}
                </div>
            </div>
        </div>

        <div className="activity-section">
          <div className="activity-tabs">
            <button className={activeTab === 'recent' ? 'active' : ''} onClick={() => setActiveTab('recent')}>Recent Activity</button>
            <button className={activeTab === 'favorites' ? 'active' : ''} onClick={() => setActiveTab('favorites')}>Favorite Cafés</button>
            <button className={activeTab === 'reviews' ? 'active' : ''} onClick={() => setActiveTab('reviews')}>Reviews</button>
          </div>

          <div className="activity-content">
            {activeTab === 'recent' && (
              <div className="recent-activity-list">
                {activities.map(activity => (
                  <div key={activity.id} className="activity-item">
                    <div className="activity-icon">{renderActivityIcon(activity.type)}</div>
                    <div className="activity-details">
                      <p>{activity.cafe || activity.content}
                        {activity.type === 'review' && 
                            <div className='review-content'>
                                <div className="rating">{'★'.repeat(activity.rating)}{'☆'.repeat(5 - activity.rating)}</div>
                                <p className='review-text'>{activity.content}</p>
                            </div>
                        }
                      </p>
                    </div>
                    <span className="activity-timestamp">{activity.timestamp}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'favorites' && <FavoriteCafes cafes={favoriteCafes} />}
            {activeTab === 'reviews' && <div className="placeholder-content">Reviews are coming soon.</div>}
          </div>
        </div>
      </div>

      {isEditModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Edit Profile</h2>
              <button className="close-btn" onClick={handleCloseModal}>&times;</button>
            </div>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" value={editedUser.name} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input type="text" name="location" value={editedUser.location} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Bio</label>
              <textarea name="bio" value={editedUser.bio} onChange={handleInputChange}></textarea>
            </div>
            <div className="modal-actions">
              <button onClick={handleCloseModal} className="cancel-btn">Cancel</button>
              <button onClick={handleSaveProfile} className="save-btn">Save Changes</button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .profile-page {
          background: #f4f2ed;
          min-height: 100vh;
        }
        .profile-header-container {
            padding: 3rem 5% 1rem;
            background: linear-gradient(to top, #f4f2ed, #ffffff);
        }
        .profile-header {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
        }
        .profile-avatar {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0 10px 40px rgba(0,0,0,0.15);
            border: 6px solid #fff;
            z-index: 2;
        }
        .user-info {
          flex-grow: 1;
        }
        .name-edit-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.25rem;
        }
        .user-name {
          font-size: 2.25rem;
          font-weight: 800;
          color: #1a1a1a;
          margin: 0;
        }
        .edit-profile-btn {
          background-color: #fff;
          border: 1px solid #ddd;
          color: #333;
          padding: 0.6rem 1.25rem;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 600;
          display:flex;
          align-items:center;
          gap: 0.5rem;
          transition: all 0.25s;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .edit-profile-btn:hover {
          background-color: #f8f8f8;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .user-location {
          color: #666;
          margin: 0 0 0.75rem;
          font-size: 1rem;
        }
        .user-bio {
          color: #444;
          margin: 0;
          font-size: 1rem;
          max-width: 550px;
        }
        .user-stats-container {
            max-width: 1100px;
            margin: -2rem auto 0;
            padding: 1.5rem 2rem;
            background: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(10px);
            border-radius: 16px;
            border: 1px solid rgba(255,255,255,0.2);
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
            position: relative;
            z-index: 1;
            transform: translateY(50px);
        }
        .user-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          text-align: center;
        }
        .stat {
            padding: 1rem;
            border-radius: 12px;
            transition: background-color 0.25s, transform 0.25s;
        }
        .stat:hover {
            background-color: rgba(255,255,255,0.8);
            transform: translateY(-3px);
        }
        .stat-icon {
            width: 32px;
            height: 32px;
            margin: 0 auto 0.75rem;
            color: #c7a17a;
            fill: currentColor;
        }
        .stat-value {
          font-size: 1.75rem;
          font-weight: 700;
          color: #2a2a2a;
        }
        .stat-label {
            color: #777;
            font-size: 0.9rem;
            font-weight: 500;
        }
        .user-badges-container {
            padding: 6rem 5% 2rem;
            max-width: 1100px;
            margin: 0 auto;
        }
        .user-badges {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }
        .badge {
          background-color: #fff;
          color: #555;
          padding: 0.75rem 1.25rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border: 1px solid #eee;
          box-shadow: 0 3px 8px rgba(0,0,0,0.04);
          transition: all 0.25s;
        }
        .badge:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
            color: #c7a17a;
        }
        .badge-icon {
            width: 18px;
            height: 18px;
            color: #c7a17a;
            fill: currentColor;
        }
        
        .activity-section {
            padding: 2rem 5% 4rem;
            max-width: 1100px;
            margin: 0 auto;
        }
        .activity-tabs {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          border-bottom: 1px solid #ddd;
          margin-bottom: 2.5rem;
        }
        .activity-tabs button {
          background: none;
          border: none;
          padding: 1rem 0;
          cursor: pointer;
          font-size: 1.1rem;
          color: #777;
          position: relative;
          font-weight: 600;
        }
        .activity-tabs button.active {
          color: #c7a17a;
        }
        .activity-tabs button.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 3px;
          background-color: #c7a17a;
          border-radius: 3px 3px 0 0;
        }

        .activity-content {
        }
        
        .recent-activity-list {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .activity-item {
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
            background-color: #fff;
            padding: 1.5rem;
            border-radius: 12px;
            border: 1px solid #eee;
            transition: all 0.2s;
        }
        .activity-item:hover {
            box-shadow: 0 8px 25px rgba(0,0,0,0.08);
            transform: translateY(-2px);
        }
        
        .activity-icon {
            font-size: 1.5rem;
            color: #c7a17a;
            margin-top: 4px;
        }
        
        .activity-details {
            flex-grow: 1;
        }
        
        .activity-details p {
            margin: 0;
            color: #333;
            font-size: 1rem;
            line-height: 1.5;
        }

        .review-content {
            margin-top: 0.75rem;
            border-left: 3px solid #e0d1bf;
            padding-left: 1rem;
            background-color: #fcfaf7;
            border-radius: 4px;
        }
        
        .review-text {
            color: #666 !important;
            font-style: italic;
            padding: 0.5rem 0;
        }

        .rating {
            color: #ffc107;
            margin-bottom: 0.25rem;
        }
        
        .activity-timestamp {
            color: #888;
            font-size: 0.9rem;
            flex-shrink: 0;
        }

        .placeholder-content {
            text-align: center;
            padding: 4rem;
            color: #888;
            font-size: 1.2rem;
            background: #fff;
            border-radius: 12px;
            border: 1px solid #eee;
        }
        
        /* Modal styles from your original code - they are good */
        
      `}</style>
    </Layout>
  );
};

export default Profile;
