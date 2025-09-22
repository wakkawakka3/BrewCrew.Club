import React, { useState } from 'react';
import Layout from '../components/Layout';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openCommentsFor, setOpenCommentsFor] = useState(null);
  const [showSavedToast, setShowSavedToast] = useState(false);

  // User data (in real app, fetch from API)
  const [user, setUser] = useState({
    name: "Arjun Mehta",
    username: "@arjun_coffee",
    bio: "Coffee enthusiast ☕️ | Third-wave coffee explorer | Latte art beginner | Mumbai",
    location: "Mumbai, India",
    joinedDate: "March 2024",
    followers: 1247,
    following: 892,
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  });

  const activities = [
    { id: 1, type: 'post', content: "Just tried the amazing cold brew at Blue Tokai Coffee! The notes of chocolate and vanilla are incredible. Perfect for this Mumbai heat 🥵💜", timestamp: "2h ago", likes: 24, comments: 5, shares: 2, location: "Blue Tokai Coffee, Bandra" },
    { id: 2, type: 'post', content: "Morning ritual: V60 with Guatemalan beans. The ritual of brewing is almost as good as the coffee itself. ☕️", timestamp: "1d ago", likes: 45, comments: 12, shares: 7, location: "Home" }
  ];

  const filteredActivities = activities.filter(a => activeTab === 'posts' ? a.type === 'post' : a.type === 'comment');

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin + '/#/profile');
      setCopied(true); setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setUser(prev => ({
      ...prev,
      name: form.get('name') || prev.name,
      username: form.get('username') || prev.username,
      bio: form.get('bio') || prev.bio,
      location: form.get('location') || prev.location,
      profileImage: form.get('profileImage') || prev.profileImage
    }));
    setIsEditOpen(false);
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 1800);
  };

  return (
    <Layout>
      <div className="profile-page">
        {/* Cover Image */}
        <div className="cover-section"><div className="cover-image" /></div>

        {/* Profile Header */}
        <div className="profile-header">
          <div className="container">
            <div className="profile-info">
              <div className="profile-details">
                {/* Avatar above name */}
                <div className="avatar-row">
                  <img src={user.profileImage} alt={user.name} className="profile-avatar" />
                </div>
                <div className="profile-name-section">
                  <h1 className="profile-name">{user.name}</h1>
                  <p className="profile-username">{user.username}</p>
                </div>
                <p className="profile-bio">{user.bio}</p>
                <div className="profile-meta">
                  <div className="meta-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg><span>{user.location}</span></div>
                  <div className="meta-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg><span>Joined {user.joinedDate}</span></div>
                </div>
                <div className="profile-stats">
                  <div className="stat"><span className="stat-number">{user.following.toLocaleString()}</span><span className="stat-label">Following</span></div>
                  <div className="stat"><span className="stat-number">{user.followers.toLocaleString()}</span><span className="stat-label">Followers</span></div>
                </div>
              </div>
              
              <div className="profile-actions">
                <button className="share-button" aria-label="Share" onClick={handleShare} title={copied ? 'Copied!' : 'Copy profile link'}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
                </button>
                {/* 3-dot menu */}
                <div className="more-menu-wrap">
                  <button className="settings-button" aria-label="More" onClick={() => setIsMenuOpen(v => !v)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                  </button>
                  {isMenuOpen && (
                    <div className="settings-menu" role="menu">
                      <button role="menuitem" className="settings-item">Account settings</button>
                      <button role="menuitem" className="settings-item">Privacy</button>
                      <button role="menuitem" className="settings-item">Report</button>
                    </div>
                  )}
                </div>
                <button className="edit-profile-button" onClick={() => setIsEditOpen(true)}>Edit Profile</button>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Tabs */}
        <div className="activity-section">
          <div className="container">
            <div className="activity-tabs pills">
              <button className={`tab-button ${activeTab === 'posts' ? 'active' : ''}`} onClick={() => setActiveTab('posts')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                Posts
              </button>
              <button className={`tab-button ${activeTab === 'comments' ? 'active' : ''}`} onClick={() => setActiveTab('comments')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
                Comments
              </button>
              <button className={`tab-button ${activeTab === 'liked' ? 'active' : ''}`} onClick={() => setActiveTab('liked')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                Liked
              </button>
            </div>

            {/* Activity Feed */}
            <div className="activity-feed">
              {filteredActivities.map(activity => (
                <div key={activity.id} className="activity-card">
                  <div className="activity-header">
                    <div className="activity-meta">
                      <div className="activity-author"><span className="author-name">{user.name}</span><span className="author-username">{user.username}</span></div>
                      <div className="activity-timestamp">{activity.timestamp}</div>
                    </div>
                  </div>

                  <div className="activity-content">
                    <p className="activity-text">{activity.content}</p>
                    {activity.location && (
                      <div className="activity-location"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg><span>{activity.location}</span></div>
                    )}
                  </div>

                  <div className="activity-actions">
                    <button className="action-button" onClick={() => setOpenCommentsFor(activity.id)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
                      <span>{activity.comments}</span>
                    </button>
                    <button className="action-button">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                      <span>{activity.likes}</span>
                    </button>
                    <button className="action-button">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
                      <span>{activity.shares}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comments Modal */}
        {openCommentsFor && (
          <div className="modal-overlay" onClick={() => setOpenCommentsFor(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-button" onClick={() => setOpenCommentsFor(null)} aria-label="Close">&times;</button>
              <h2>Comments</h2>
              <div className="modal-card">
                <p>No comments yet. Be the first to comment!</p>
              </div>
            </div>
          </div>
        )}

        {/* Edit Profile Modal */}
        {isEditOpen && (
          <div className="modal-overlay" onClick={() => setIsEditOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-button" onClick={() => setIsEditOpen(false)} aria-label="Close">&times;</button>
              <h2 style={{marginBottom: '1rem'}}>Edit Profile</h2>
              <form onSubmit={handleSaveProfile} className="edit-form">
                <div className="form-card">
                  <label className="form-label">Name</label>
                  <input name="name" defaultValue={user.name} className="form-input" />
                </div>
                <div className="form-card">
                  <label className="form-label">Username</label>
                  <input name="username" defaultValue={user.username} className="form-input" />
                </div>
                <div className="form-card form-span-2">
                  <label className="form-label">Bio</label>
                  <textarea name="bio" defaultValue={user.bio} rows={4} className="form-textarea" />
                </div>
                <div className="form-card">
                  <label className="form-label">Location</label>
                  <input name="location" defaultValue={user.location} className="form-input" />
                </div>
                <div className="form-card">
                  <label className="form-label">Profile Image URL</label>
                  <input name="profileImage" placeholder="https://..." className="form-input" />
                </div>
                <div className="form-actions form-span-2">
                  <button type="button" className="button-secondary" onClick={() => setIsEditOpen(false)}>Cancel</button>
                  <button type="submit" className="button-primary">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .profile-page { background: var(--background-color); min-height: 100vh; }
        .cover-section { position: relative; height: 200px; overflow: hidden; }
        .cover-image { width: 100%; height: 100%; background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%); background-size: cover; background-position: center; }
        .profile-header { background: var(--secondary-color); border-bottom: 1px solid var(--border-color); padding: 2.5rem 0 2rem 0; }
        .profile-info { display: flex; align-items: flex-start; justify-content: space-between; gap: 1.5rem; }
        .avatar-row { display:flex; justify-content:center; margin-top:-64px; margin-bottom:0.75rem; }
        .profile-avatar { width: 120px; height: 120px; border-radius:50%; border:4px solid var(--secondary-color); box-shadow:0 4px 16px rgba(0,0,0,.12); }
        .profile-details { flex: 1; }
        .profile-name-section { text-align:center; margin-bottom: 0.5rem; }
        .profile-name { font-size: 1.5rem; font-weight: 700; color: var(--primary-color); margin: 0 0 0.25rem 0; }
        .profile-username { font-size: 1rem; color: var(--text-muted); margin: 0; }
        .profile-bio { font-size: 1rem; color: var(--text-color); line-height: 1.6; margin: 1rem 0; text-align:center; }
        .profile-meta { display:flex; gap:1.5rem; margin-bottom:1rem; flex-wrap:wrap; justify-content:center; }
        .meta-item { display:flex; align-items:center; gap:.5rem; color:var(--text-muted); font-size:.9rem; }
        .profile-stats { display:flex; gap:2rem; justify-content:center; }
        .stat { display:flex; flex-direction:column; }
        .stat-number { font-size:1.25rem; font-weight:700; color:var(--primary-color); }
        .stat-label { font-size:.9rem; color:var(--text-muted); }
        .profile-actions { display:flex; gap:.5rem; align-items:center; position:relative; }
        .settings-button, .share-button { background:none; border:none; color:var(--text-muted); cursor:pointer; padding:.75rem; border-radius:50%; transition:all .2s ease; }
        .settings-button:hover, .share-button:hover { background: var(--border-color); color: var(--primary-color); }
        .more-menu-wrap { position: relative; }
        .settings-menu { position:absolute; right:0; top:100%; margin-top:.5rem; background:var(--secondary-color); border:1px solid var(--border-color); border-radius:8px; box-shadow:0 12px 24px rgba(0,0,0,.12); padding:.5rem; display:flex; flex-direction:column; gap:.25rem; z-index:2; }
        .settings-item { background:none; border:none; text-align:left; padding:.5rem .75rem; border-radius:6px; cursor:pointer; color:var(--primary-color); }
        .settings-item:hover { background:rgba(0,0,0,.04); }
        .edit-profile-button { background: var(--primary-color); color: var(--text-light); border:none; padding:.75rem 1.5rem; border-radius:25px; font-weight:600; cursor:pointer; transition:all .2s ease; font-size:.9rem; }
        .edit-profile-button:hover { background: var(--accent-color); transform: translateY(-1px); }
        .activity-section { padding: 2rem 0; }
        .activity-tabs { display:flex; border-bottom:1px solid var(--border-color); margin-bottom:1.5rem; }
        .tab-button { padding:.6rem 1.2rem; background:none; border:none; font-size:1rem; font-weight:600; color:var(--text-muted); cursor:pointer; border-bottom:2px solid transparent; transition:all .2s ease; display:flex; align-items:center; gap:.5rem; }
        .activity-tabs.pills .tab-button { border:1px solid var(--border-color); border-radius:999px; margin-right:.5rem; background:var(--secondary-color); }
        .activity-tabs.pills .tab-button.active { background: rgba(245,197,24,.12); border-color: var(--accent-color); color: var(--primary-color); }
        .tab-button.active { color:var(--primary-color); border-bottom-color:var(--accent-color); }
        .tab-button:hover { color:var(--primary-color); }
        .activity-feed { display:flex; flex-direction:column; gap:1.5rem; }
        .activity-card { background:var(--secondary-color); border-radius:12px; padding:1.5rem; border:1px solid var(--border-color); transition:all .2s ease; }
        .activity-card:hover { box-shadow:0 4px 12px rgba(0,0,0,.08); transform: translateY(-1px); }
        .activity-meta { display:flex; justify-content:space-between; align-items:flex-start; }
        .activity-text { font-size:1rem; line-height:1.6; color:var(--text-color); margin-bottom:1rem; }
        .activity-actions { display:flex; gap:2rem; padding-top:1rem; border-top:1px solid var(--border-color); }
        .action-button { display:flex; align-items:center; gap:.5rem; background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:.9rem; transition:color .2s ease; }
        .action-button:hover { color: var(--accent-color); }
        @media (max-width:768px){
          .avatar-row{ margin-top:-48px; }
          .profile-avatar{ width:96px; height:96px; }
          .profile-actions{ justify-content:center; width:100%; }
        }

        /* --- Premium Edit Profile styles --- */
        .edit-form { display:grid; grid-template-columns: 1fr 1fr; gap: 1rem 1.25rem; }
        .form-span-2 { grid-column: 1 / -1; }
        .form-card { background: var(--off-white); border: 1px solid var(--border-color); border-radius: 12px; padding: 1rem; }
        .form-label { display:block; font-weight:600; color: var(--primary-color); margin-bottom: .5rem; }
        .form-input, .form-textarea { width:100%; border:1px solid var(--border-color); border-radius: 10px; padding: .75rem .9rem; background:#fff; color: var(--primary-color); transition: box-shadow .2s ease, border-color .2s ease; }
        .form-input:focus, .form-textarea:focus { outline:none; border-color: var(--accent-color); box-shadow: 0 0 0 3px rgba(245,197,24,.25); }
        .form-actions { display:flex; justify-content:flex-end; gap:.5rem; margin-top:.5rem; }
        .button-primary { background: linear-gradient(135deg, var(--primary-color), #333); color:#fff; border:none; padding:.9rem 1.5rem; border-radius: 999px; font-weight:700; cursor:pointer; box-shadow: 0 10px 20px rgba(0,0,0,.2); transition: transform .15s ease, box-shadow .2s ease, background .2s ease; }
        .button-primary:hover { transform: translateY(-2px); box-shadow: 0 14px 28px rgba(0,0,0,.25); background: linear-gradient(135deg, var(--accent-color), #D4A90F); }
        .button-secondary { background:#fff; color: var(--primary-color); border:1px solid var(--border-color); padding:.9rem 1.2rem; border-radius:999px; font-weight:600; cursor:pointer; transition: box-shadow .2s ease; }
        .button-secondary:hover { box-shadow: 0 8px 16px rgba(0,0,0,.08); }

        /* Saved toast */
        .toast { position: fixed; top: 90px; right: 24px; background: #111; color:#fff; padding:.8rem 1rem; border-radius:10px; box-shadow: 0 10px 20px rgba(0,0,0,.25); z-index: 1100; opacity:.98; }
        @media (max-width: 768px) { .edit-form { grid-template-columns: 1fr; } }
      `}</style>

      {showSavedToast && (
        <div className="toast">Profile updated successfully</div>
      )}
    </Layout>
  );
};

export default Profile;