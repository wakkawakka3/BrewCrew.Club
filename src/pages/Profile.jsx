
import React, { useState } from 'react';
import Layout from '../components/Layout';
import FavoriteCafes from '../components/FavoriteCafes';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('recent');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [user, setUser] = useState({
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
  });
  const [editedUser, setEditedUser] = useState(user);

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
  
  const renderActivityIcon = (type) => {
    switch (type) {
      case 'review': return '⭐';
      case 'check-in': return '☕';
      case 'discussion': return '💬';
      default: return '➡️';
    }
  };

  const handleEditProfile = () => {
    setEditedUser(user);
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
  };

  const handleSaveProfile = () => {
    setUser(editedUser);
    setIsEditModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prevState => ({ ...prevState, [name]: value }));
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
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M12.2929 1.70711C12.6834 1.31658 13.3166 1.31658 13.7071 1.70711L14.2929 2.29289C14.6834 2.68342 14.6834 3.31658 14.2929 3.70711L4.41421 13.5858C4.22383 13.7762 3.96929 13.881 3.70711 13.881H2.11895C1.84318 13.881 1.61895 13.6568 1.61895 13.381V11.7929C1.61895 11.5307 1.72383 11.2762 1.91421 11.0858L11.7929 1.20711C11.7929 1.20711 12.2929 1.70711 12.2929 1.70711ZM11.5 4.5L10 6L8.5 4.5L10 3L11.5 4.5Z"/></svg>
                        Edit Profile
                    </button>
                </div>
                <p className="user-location">{user.location}</p>
                <p className="user-bio">{user.bio}</p>
                <div className="user-badges">
                {user.badges.map(badge => <span key={badge} className="badge">{badge}</span>)}
                </div>
                <div className="user-stats">
                <div className="stat"><span>{user.stats.reviews}</span> Reviews</div>
                <div className="stat"><span>{user.stats.checkIns}</span> Check-ins</div>
                <div className="stat"><span>{user.stats.followers}</span> Followers</div>
                <div className="stat"><span>{user.stats.points}</span> Points</div>
                </div>
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
          background: #fdfcfa;
        }
        .profile-header-container {
            background: #fff;
            border-bottom: 1px solid #eee;
            padding: 3rem 5%;
        }
        .profile-header {
          display: flex;
          align-items: center;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .profile-avatar {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            border: 5px solid #fff;
        }
        .user-info {
          flex-grow: 1;
        }
        .name-edit-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
        }
        .user-name {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2a2a2a;
          margin: 0;
        }
        .edit-profile-btn {
          background-color: #f5f5f5;
          border: 1px solid #ddd;
          color: #333;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 600;
          display:flex;
          align-items:center;
          gap: 0.5rem;
          transition: all 0.2s;
        }
        .edit-profile-btn:hover {
          background-color: #eee;
          transform: translateY(-1px);
        }
        .user-location {
          color: #777;
          margin: 0 0 1rem;
          font-size: 1.1rem;
        }
        .user-bio {
          color: #444;
          margin: 0 0 1.5rem;
          font-size: 1.1rem;
          max-width: 600px;
        }
        .user-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }
        .badge {
          background-color: #f0f0f0;
          color: #555;
          padding: 0.5rem 1rem;
          border-radius: 15px;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .user-stats {
          display: flex;
          gap: 3rem;
        }
        .stat {
          text-align: left;
          color: #777;
          font-size: 1.1rem;
        }
        .stat span {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: #2a2a2a;
        }
        
        .activity-section {
            padding: 2rem 5%;
            max-width: 1200px;
            margin: 0 auto;
        }
        .activity-tabs {
          display: flex;
          gap: 1.5rem;
          border-bottom: 1px solid #eee;
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
          height: 2px;
          background-color: #c7a17a;
        }

        .activity-content {
          padding-top: 2.5rem;
        }
        
        .recent-activity-list {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .activity-item {
            display: flex;
            align-items: center;
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
        }
        
        .activity-details {
            flex-grow: 1;
        }
        
        .activity-details p {
            margin: 0;
            color: #333;
            font-size: 1.1rem;
        }

        .review-content {
            margin-top: 0.75rem;
            border-left: 3px solid #c7a17a;
            padding-left: 1rem;
        }
        
        .review-text {
            color: #666 !important;
            font-style: italic;
        }

        .rating {
            color: #ffc107;
            margin-bottom: 0.25rem;
        }
        
        .activity-timestamp {
            color: #888;
            font-size: 1rem;
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
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background: #fff;
          padding: 2.5rem;
          border-radius: 16px;
          width: 90%;
          max-width: 550px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.2);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .modal-header h2 {
          margin: 0;
          font-weight: 700;
          font-size: 1.8rem;
          color: #2a2a2a;
        }

        .close-btn {
          background: none; 
          border: none;
          font-size: 2.5rem; 
          color: #aaa;
          cursor: pointer;
          line-height: 1;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.75rem;
          font-weight: 600;
          color: #555;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.9rem 1rem;
          border: 1px solid #ddd;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.2s;
        }
        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #c7a17a;
            box-shadow: 0 0 0 3px rgba(199, 161, 122, 0.2);
        }
        
        .form-group textarea {
          min-height: 120px;
          resize: vertical;
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 2rem;
        }

        .modal-actions button {
          padding: 0.8rem 1.8rem;
          border: none;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .modal-actions .cancel-btn {
            background-color: #f5f5f5;
            border: 1px solid #ddd;
            color: #333;
        }
        .modal-actions .cancel-btn:hover {
            background-color: #eee;
        }

        .modal-actions .save-btn {
          background-color: #c7a17a;
          color: #fff;
          border: 1px solid #c7a17a;
        }
        .modal-actions .save-btn:hover {
            opacity: 0.9;
        }

      `}</style>
    </Layout>
  );
};

export default Profile;
