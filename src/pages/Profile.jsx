import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";

const Layout = ({ children }) => {
  return (
    <div>
      {" "}
      <main>{children}</main>
    </div>
  );
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openCommentsFor, setOpenCommentsFor] = useState(null);
  const [showSavedToast, setShowSavedToast] = useState(false);

  // User data (in real app, fetch from API)
  const [user, setUser] = useState({
    name: "Full Name",
    username: "@username",
    bio: "Coffee enthusiast | Third-wave coffee explorer | Latte art beginner | Mumbai",
    location: "Mumbai, India",
    joinedDate: "March 2024",
    followers: 1247,
    following: 892,
    profileImage:
      "https://placehold.co/150x150/d7a86e/3d2b1f?text=User",
  });

  const activities = [
    {
      id: 1,
      type: "post",
      content:
        "Just tried the amazing cold brew at Blue Tokai Coffee! The notes of chocolate and vanilla are incredible. Perfect for this Mumbai heat 💜",
      timestamp: "2h ago",
      likes: 24,
      comments: 5,
      shares: 2,
      location: "Blue Tokai Coffee, Bandra",
    },
    {
      id: 2,
      type: "post",
      content:
        "Morning ritual: V60 with Guatemalan beans. The ritual of brewing is almost as good as the coffee itself. ☕️",
      timestamp: "1d ago",
      likes: 45,
      comments: 12,
      shares: 7,
      location: "Home",
    },
  ];

  const filteredActivities = activities.filter((a) => {
    if (activeTab === "posts") return a.type === "post";
    return false;
  });

  const handleShare = () => {
    const profileUrl = window.location.href;
    const textArea = document.createElement("textarea");
    textArea.value = profileUrl;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
    document.body.removeChild(textArea);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setUser((prev) => ({
      ...prev,
      name: form.get("name") || prev.name,
      username: form.get("username") || prev.username,
      bio: form.get("bio") || prev.bio,
      location: form.get("location") || prev.location,
      profileImage: form.get("profileImage") || prev.profileImage,
    }));
    setIsEditOpen(false);
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 1800);
  };

  return (
    <Layout>
      <div className="profile-page">
        {/* Cover Image */}
        <div className="cover-section">
          <div className="cover-image" />
        </div>

        {/* --- JSX STRUCTURE MODIFIED --- */}
        {/* This container now centers the main content block */}
        <div className="container">
          {/* Profile Header Card */}
          <div className="profile-info-card">
            <div className="profile-actions">
              <button
                className="share-button"
                aria-label="Share"
                onClick={handleShare}
                title={copied ? "Copied!" : "Copy profile link"}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
              </button>
              <button
                className="edit-profile-button"
                onClick={() => setIsEditOpen(true)}
              >
                Edit Profile
              </button>
            </div>

            <img
              src={user.profileImage}
              alt={user.name}
              className="profile-avatar"
            />

            <div className="profile-name-section">
              <h1 className="profile-name">{user.name}</h1>
              <p className="profile-username">{user.username}</p>
            </div>
            <p className="profile-bio">{user.bio}</p>
            <div className="profile-meta">
              <div className="meta-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>{user.location}</span>
              </div>
              <div className="meta-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                </svg>
                <span>Joined {user.joinedDate}</span>
              </div>
            </div>
            <div className="profile-stats">
              <div className="stat">
                <span className="stat-number">
                  {user.following.toLocaleString()}
                </span>
                <span className="stat-label">Following</span>
              </div>
              <div className="stat">
                <span className="stat-number">
                  {user.followers.toLocaleString()}
                </span>
                <span className="stat-label">Followers</span>
              </div>
            </div>
          </div>

          {/* Activity Tabs & Feed */}
          <div className="activity-section">
            <div className="activity-tabs pills">
              <button
                className={`tab-button ${
                  activeTab === "posts" ? "active" : ""
                }`}
                onClick={() => setActiveTab("posts")}
              >
                {/* MODIFIED: SVG icon for "Posts" updated */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z" />
                </svg>
                Posts
              </button>
              <button
                className={`tab-button ${
                  activeTab === "comments" ? "active" : ""
                }`}
                onClick={() => setActiveTab("comments")}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                </svg>
                Comments
              </button>
              <button
                className={`tab-button ${
                  activeTab === "liked" ? "active" : ""
                }`}
                onClick={() => setActiveTab("liked")}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                Liked
              </button>
            </div>

            <div className="activity-feed">
              {filteredActivities.length > 0 ? (
                filteredActivities.map((activity) => (
                  <div key={activity.id} className="activity-card">
                    <div className="activity-header">
                      <div className="activity-meta-info">
                        <span className="author-name">{user.name}</span>
                        <span className="author-username">{user.username}</span>
                      </div>
                      <div className="activity-timestamp">
                        {activity.timestamp}
                      </div>
                    </div>
                    <div className="activity-content">
                      <p className="activity-text">{activity.content}</p>
                      {activity.location && (
                        <div className="activity-location">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                          </svg>
                          <span>{activity.location}</span>
                        </div>
                      )}
                    </div>
                    <div className="activity-actions">
                      <button
                        className="action-button"
                        onClick={() => setOpenCommentsFor(activity.id)}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                        </svg>
                        <span>{activity.comments}</span>
                      </button>
                      <button className="action-button">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span>{activity.likes}</span>
                      </button>
                      <button className="action-button">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                        </svg>
                        <span>{activity.shares}</span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-state-card">
                  <p>No activity to show for this tab yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Comments Modal (No changes needed) */}
        {openCommentsFor && (
          <div
            className="modal-overlay"
            onClick={() => setOpenCommentsFor(null)}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close-button"
                onClick={() => setOpenCommentsFor(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <h2>Comments</h2>
              <div className="modal-card">
                <p>No comments yet. Be the first to comment!</p>
              </div>
            </div>
          </div>
        )}

        {/* Edit Profile Modal*/}
        {isEditOpen && (
          <div className="modal-overlay" onClick={() => setIsEditOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close-button"
                onClick={() => setIsEditOpen(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <h2 style={{ marginBottom: "1rem" }}>Edit Profile</h2>
              <form onSubmit={handleSaveProfile} className="edit-form">
                <div className="form-card">
                  <label className="form-label">Name</label>
                  <input
                    name="name"
                    defaultValue={user.name}
                    className="form-input"
                  />
                </div>
                <div className="form-card">
                  <label className="form-label">Username</label>
                  <input
                    name="username"
                    defaultValue={user.username}
                    className="form-input"
                  />
                </div>
                <div className="form-card form-span-2">
                  <label className="form-label">Bio</label>
                  <textarea
                    name="bio"
                    defaultValue={user.bio}
                    rows={4}
                    className="form-textarea"
                  />
                </div>
                <div className="form-card">
                  <label className="form-label">Location</label>
                  <input
                    name="location"
                    defaultValue={user.location}
                    className="form-input"
                  />
                </div>
                <div className="form-card">
                  <label className="form-label">Profile Image URL</label>
                  <input
                    name="profileImage"
                    defaultValue={user.profileImage}
                    className="form-input"
                  />
                </div>
                <div className="form-actions form-span-2">
                  <button
                    type="button"
                    className="button-secondary"
                    onClick={() => setIsEditOpen(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="button-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* --- CSS STYLES --- */}
      <style jsx>{`
        .profile-page {
          background: #f8f8f8;
          min-height: 100vh;
          font-family: "Inter", sans-serif;
        }
        .cover-section {
          height: 200px;
        }
        .cover-image {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #8b4513 0%, #a0522d 100%);
        }

        .container {
          max-width: 768px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .profile-info-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 1.5rem;
          padding-top: 60px;
          margin-top: -80px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .profile-avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 4px solid #ffffff;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
          margin-top: -120px;
          margin-bottom: 0.75rem;
        }

        .profile-name-section {
          margin-bottom: 0.5rem;
        }
        .profile-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 0.25rem 0;
        }
        .profile-username {
          font-size: 1rem;
          color: #6b7280;
          margin: 0;
        }
        .profile-bio {
          font-size: 1rem;
          color: #333333;
          line-height: 1.6;
          margin: 1rem 0;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        .profile-meta {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #6b7280;
          font-size: 0.9rem;
        }
        .profile-stats {
          display: flex;
          gap: 2rem;
          justify-content: center;
        }
        .stat {
          display: flex;
          gap: 0.25rem;
          align-items: center;
        }
        .stat-number {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a1a;
        }
        .stat-label {
          font-size: 0.9rem;
          color: #6b7280;
        }

        .profile-actions {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .share-button {
          background: none;
          border: 1px solid #e5e7eb;
          color: #6b7280;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .share-button:hover {
          background: #e5e7eb;
          color: #1a1a1a;
        }

        .edit-profile-button {
          background: #18181b;
          color: #fff;
          border: none;
          padding: 0.6rem 1rem;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s ease;
          font-size: 0.9rem;
        }
        .edit-profile-button:hover {
          background: #333;
        }

        .activity-section {
          padding: 2rem 0;
        }
        .activity-tabs {
          display: flex;
          margin-bottom: 1.5rem;
          gap: 0.5rem;
        }
        .tab-button {
          padding: 0.6rem 1.2rem;
          background: none;
          border: none;
          font-size: 1rem;
          font-weight: 600;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .activity-tabs.pills .tab-button {
          border: 1px solid #e5e7eb;
          border-radius: 999px;
          background: #ffffff;
        }
        .activity-tabs.pills .tab-button.active {
          background: #fefce8;
          border-color: #ca8a04;
          color: #a16207;
        }
        .tab-button:hover:not(.active) {
          background: #f5f5f5;
        }

        .activity-feed {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .activity-card,
        .empty-state-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid #e5e7eb;
          transition: all 0.2s ease;
        }
        .empty-state-card {
          text-align: center;
          color: #6b7280;
        }

        .activity-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .activity-meta-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .author-name {
          font-weight: 600;
          color: #1a1a1a;
        }
        .author-username {
          color: #6b7280;
        }
        .activity-timestamp {
          font-size: 0.9rem;
          color: #6b7280;
        }

        .activity-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #333333;
          margin: 0 0 1rem 0;
        }
        .activity-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #6b7280;
          font-size: 0.9rem;
        }

        .activity-actions {
          display: flex;
          gap: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
        }
        .action-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: #6b7280;
          cursor: pointer;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }
        .action-button:hover {
          color: #ca8a04;
        }

        @media (max-width: 768px) {
          .profile-avatar {
            width: 96px;
            height: 96px;
            margin-top: -96px;
          }
          .profile-info-card {
            padding-top: 48px;
          }
          .profile-actions {
            top: 0.5rem;
            right: 0.5rem;
          }
          .edit-profile-button {
            padding: 0.5rem 0.75rem;
            font-size: 0.8rem;
          }
          .stat {
            flex-direction: column;
            gap: 0;
          }
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          max-width: 600px;
          width: 90%;
          position: relative;
        }
        .modal-close-button {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #6b7280;
        }
        .modal-card {
          background: #f9fafb;
          padding: 1rem;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }

        .edit-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem 1.25rem;
        }
        .form-span-2 {
          grid-column: 1 / -1;
        }
        .form-card {
          border: none;
          padding: 0;
          background: none;
        }
        .form-label {
          display: block;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }
        .form-input,
        .form-textarea {
          width: 100%;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 0.75rem 0.9rem;
          background: #fff;
          color: #1a1a1a;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #ca8a04;
          box-shadow: 0 0 0 3px rgba(202, 138, 4, 0.2);
        }
        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }
        .button-primary {
          background: #18181b;
          color: #fff;
          border: none;
          padding: 0.75rem 1.25rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .button-primary:hover {
          background: #333;
        }
        .button-secondary {
          background: #fff;
          color: #1a1a1a;
          border: 1px solid #e5e7eb;
          padding: 0.75rem 1.25rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .button-secondary:hover {
          background: #f5f5f5;
        }
        .toast {
          position: fixed;
          top: 20px;
          right: 20px;
          background: #111;
          color: #fff;
          padding: 0.8rem 1.2rem;
          border-radius: 8px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
          z-index: 1100;
          opacity: 0.98;
          animation: fadeInOut 2s ease-in-out;
        }

        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          10% {
            opacity: 1;
            transform: translateY(0);
          }
          90% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        @media (max-width: 768px) {
          .edit-form {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {showSavedToast && (
        <div className="toast">Profile updated successfully</div>
      )}
    </Layout>
  );
};

export default Profile;
