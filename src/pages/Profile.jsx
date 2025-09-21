import React, { useState } from 'react';
import Layout from '../components/Layout';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts');

  // User data
  const user = {
    name: "Arjun Mehta",
    username: "@arjun_coffee",
    bio: "Coffee enthusiast ☕️ | Third-wave coffee explorer | Latte art beginner | Mumbai",
    location: "Mumbai, India",
    joinedDate: "March 2024",
    followers: 1247,
    following: 892
  };

  // Activity data
  const activities = [
    {
      id: 1,
      type: 'post',
      content: "Just tried the amazing cold brew at Blue Tokai Coffee! The notes of chocolate and vanilla are incredible. Perfect for this Mumbai heat 🥵💜",
      timestamp: "2h ago",
      likes: 24,
      comments: 5,
      shares: 2,
      location: "Blue Tokai Coffee, Bandra"
    },
    {
      id: 2,
      type: 'post',
      content: "Morning ritual: V60 with Guatemalan beans. The ritual of brewing is almost as good as the coffee itself. ☕️",
      timestamp: "1d ago",
      likes: 45,
      comments: 12,
      shares: 7,
      location: "Home"
    },
    {
      id: 3,
      type: 'post',
      content: "Coffee tasting notes: This Kenyan AA has such bright acidity with hints of citrus. Perfect for a sunny morning! 🍊",
      timestamp: "2d ago",
      likes: 31,
      comments: 9,
      shares: 4
    }
  ];

  const filteredActivities = activities.filter(activity => 
    activeTab === 'posts' ? activity.type === 'post' : activity.type === 'comment'
  );

  return (
    <Layout>
      <div className="profile-page">
        {/* Cover Image */}
        <div className="cover-section">
          <div className="cover-image" />
        </div>

        {/* Profile Header */}
        <div className="profile-header">
          <div className="container">
            <div className="profile-info">
              <div className="profile-details">
                <div className="profile-name-section">
                  <h1 className="profile-name">{user.name}</h1>
                  <p className="profile-username">{user.username}</p>
                </div>
                
                <p className="profile-bio">{user.bio}</p>
                
                <div className="profile-meta">
                  <div className="meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span>{user.location}</span>
                  </div>
                  <div className="meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span>Joined {user.joinedDate}</span>
                  </div>
                </div>
                
                <div className="profile-stats">
                  <div className="stat">
                    <span className="stat-number">{user.following.toLocaleString()}</span>
                    <span className="stat-label">Following</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">{user.followers.toLocaleString()}</span>
                    <span className="stat-label">Followers</span>
                  </div>
                </div>
              </div>
              
              <div className="profile-actions">
                <button className="settings-button" aria-label="Settings">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                </button>
                <button className="share-button" aria-label="Share">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                  </svg>
                </button>
                <button className="edit-profile-button">Edit Profile</button>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Tabs */}
        <div className="activity-section">
          <div className="container">
            <div className="activity-tabs">
              <button 
                className={`tab-button ${activeTab === 'posts' ? 'active' : ''}`}
                onClick={() => setActiveTab('posts')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Posts
              </button>
              <button 
                className={`tab-button ${activeTab === 'comments' ? 'active' : ''}`}
                onClick={() => setActiveTab('comments')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
                Comments
              </button>
              <button 
                className={`tab-button ${activeTab === 'liked' ? 'active' : ''}`}
                onClick={() => setActiveTab('liked')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                Liked
              </button>
            </div>

            {/* Activity Feed */}
            <div className="activity-feed">
              {filteredActivities.map(activity => (
                <div key={activity.id} className="activity-card">
                  <div className="activity-header">
                    <div className="activity-meta">
                      <div className="activity-author">
                        <span className="author-name">{user.name}</span>
                        <span className="author-username">{user.username}</span>
                      </div>
                      <div className="activity-timestamp">{activity.timestamp}</div>
                    </div>
                  </div>

                  <div className="activity-content">
                    <p className="activity-text">{activity.content}</p>
                    
                    {activity.location && (
                      <div className="activity-location">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        <span>{activity.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="activity-actions">
                    <button className="action-button">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                      </svg>
                      <span>{activity.comments}</span>
                    </button>
                    
                    <button className="action-button">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span>{activity.likes}</span>
                    </button>
                    
                    <button className="action-button">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                      </svg>
                      <span>{activity.shares}</span>
                    </button>
                    
                    <button className="more-button" aria-label="More options">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .profile-page {
          background: var(--background-color);
          min-height: 100vh;
        }

        .cover-section {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .cover-image {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%);
          background-size: cover;
          background-position: center;
        }

        .profile-header {
          background: var(--secondary-color);
          border-bottom: 1px solid var(--border-color);
          padding: 2rem 0;
        }

        .profile-info {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 2rem;
        }

        .profile-details {
          flex: 1;
        }

        .profile-name-section {
          margin-bottom: 0.5rem;
        }

        .profile-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
          margin: 0 0 0.25rem 0;
        }

        .profile-username {
          font-size: 1rem;
          color: var(--text-muted);
          margin: 0;
        }

        .profile-bio {
          font-size: 1rem;
          color: var(--text-color);
          line-height: 1.6;
          margin: 1rem 0;
        }

        .profile-meta {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .profile-stats {
          display: flex;
          gap: 2rem;
        }

        .stat {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary-color);
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .profile-actions {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .settings-button, .share-button {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0.75rem;
          border-radius: 50%;
          transition: all 0.2s ease;
        }

        .settings-button:hover, .share-button:hover {
          background: var(--border-color);
          color: var(--primary-color);
        }

        .edit-profile-button {
          background: var(--primary-color);
          color: var(--text-light);
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.9rem;
        }

        .edit-profile-button:hover {
          background: var(--accent-color);
          transform: translateY(-1px);
        }

        .activity-section {
          padding: 2rem 0;
        }

        .activity-tabs {
          display: flex;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 2rem;
        }

        .tab-button {
          padding: 1rem 2rem;
          background: none;
          border: none;
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-muted);
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .tab-button.active {
          color: var(--primary-color);
          border-bottom-color: var(--accent-color);
        }

        .tab-button:hover {
          color: var(--primary-color);
        }

        .activity-feed {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .activity-card {
          background: var(--secondary-color);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid var(--border-color);
          transition: all 0.2s ease;
        }

        .activity-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transform: translateY(-1px);
        }

        .activity-header {
          margin-bottom: 1rem;
        }

        .activity-meta {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .activity-author {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.25rem;
        }

        .author-name {
          font-weight: 600;
          color: var(--primary-color);
        }

        .author-username {
          color: var(--text-muted);
        }

        .activity-timestamp {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .activity-content {
          margin-bottom: 1rem;
        }

        .activity-text {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-color);
          margin-bottom: 1rem;
        }

        .activity-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .activity-actions {
          display: flex;
          gap: 2rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .action-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }

        .action-button:hover {
          color: var(--accent-color);
        }

        .more-button {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .more-button:hover {
          background: var(--border-color);
          color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .profile-info {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .profile-actions {
            width: 100%;
            justify-content: center;
          }

          .profile-stats {
            justify-content: center;
          }

          .profile-meta {
            justify-content: center;
          }

          .activity-card {
            padding: 1rem;
          }

          .activity-actions {
            gap: 1rem;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Profile;