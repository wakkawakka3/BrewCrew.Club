import React, { useState } from "react";
import Layout from "../components/Layout";

// --- SVG Icon Components ---
const LikeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const CommentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

// --- Mock Data ---
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
  },
};

const userPosts = [
  {
    id: 1,
    content:
      "Just had the most amazing cold brew at a small cafe in Bandra. The flavor was so rich and smooth. #coldbrew #mumbaicafe",
    likes: 45,
    commentsCount: 7,
    timestamp: "1 day ago",
  },
  {
    id: 2,
    content:
      "What are your thoughts on robusta vs. arabica beans for a morning espresso?",
    likes: 102,
    commentsCount: 23,
    timestamp: "3 days ago",
  },
  {
    id: 3,
    content:
      "My home coffee station is finally complete! Rocking a new grinder and a pour-over kit. ☕️",
    likes: 231,
    commentsCount: 18,
    timestamp: "5 days ago",
  },
  {
    id: 4,
    content:
      "Exploring the coffee culture in Chikmagalur. The plantations are breathtaking!",
    likes: 88,
    commentsCount: 11,
    timestamp: "1 week ago",
  },
  {
    id: 5,
    content:
      "Debating whether to get a Coffee Pass subscription. Is it worth it for daily coffee drinkers?",
    likes: 32,
    commentsCount: 15,
    timestamp: "2 weeks ago",
  },
];

const userReviews = [
  {
    id: 1,
    cafe: "Blue Tokai Coffee Roasters",
    rating: 5,
    content:
      "Amazing Ethiopian pour over! The fruity notes really came through. A must-visit for any coffee lover.",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    cafe: "Third Wave Coffee",
    rating: 4,
    content:
      "Great ambiance and a solid cup of coffee. The flat white was well-made, though a bit crowded.",
    timestamp: "1 week ago",
  },
  {
    id: 3,
    cafe: "Subko Coffee",
    rating: 5,
    content:
      "The best croissants in Mumbai, and their specialty coffee is next level. The attention to detail is impressive.",
    timestamp: "2 weeks ago",
  },
  {
    id: 4,
    cafe: "Sleepy Owl",
    rating: 4,
    content:
      "Love their cold brew packs for home. Convenient and consistently good.",
    timestamp: "1 month ago",
  },
  {
    id: 5,
    cafe: "Café Coffee Day",
    rating: 3,
    content:
      "A classic spot for a quick coffee. Not specialty, but reliable and has a comfortable seating area.",
    timestamp: "1 month ago",
  },
];

const userComments = [
  {
    id: 1,
    onPost: "Best Cold Brew Recipe?",
    content:
      "I use a 1:8 ratio and let it steep for 18 hours in the fridge. Comes out perfect!",
    timestamp: "6 hours ago",
  },
  {
    id: 2,
    onPost: "Single-origin Ethiopian coffee",
    content:
      "You should try the one from Koinonia Coffee Roasters too! They have some great options.",
    timestamp: "1 day ago",
  },
  {
    id: 3,
    onPost: "Latte art classes in Bangalore",
    content:
      "I took a class at the Third Wave Coffee academy, it was fantastic and very hands-on.",
    timestamp: "4 days ago",
  },
  {
    id: 4,
    onPost: "Thoughts on robusta vs. arabica?",
    content:
      "For espresso, a blend with a small percentage of high-quality robusta can give you an amazing crema!",
    timestamp: "5 days ago",
  },
  {
    id: 5,
    onPost: "Home coffee station complete!",
    content: "That grinder is a beast! Congrats on the a setup.",
    timestamp: "6 days ago",
  },
];

// --- UI Components ---
const StatItem = ({ value, label }) => (
  <div className="stat-item">
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
);

const BadgeItem = ({ label }) => <div className="badge-item">{label}</div>;

const PostItem = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="content-item-card">
      <p className="post-content">{post.content}</p>
      <div className="item-meta">
        <div className="post-actions">
          <div className={`action-item ${liked ? 'liked' : ''}`} onClick={handleLike}>
            <LikeIcon />
            <span>{likeCount}</span>
          </div>
          <div className="action-item">
            <CommentIcon />
            <span>{post.commentsCount}</span>
          </div>
        </div>
        <span className="timestamp">{post.timestamp}</span>
      </div>
    </div>
  );
};

const ReviewItem = ({ review }) => (
  <div className="content-item-card">
    <div className="review-header">
      <h4 className="cafe-name">{review.cafe}</h4>
      <div className="rating">
        {"★".repeat(review.rating)}
        {"☆".repeat(5 - review.rating)}
      </div>
    </div>
    <p className="review-content">{review.content}</p>
    <div className="item-meta">
      <span className="timestamp">{review.timestamp}</span>
    </div>
  </div>
);

const CommentItem = ({ comment }) => (
  <div className="content-item-card">
    <p className="comment-context">On post: "{comment.onPost}"</p>
    <p className="comment-content">{comment.content}</p>
    <div className="item-meta">
      <span className="timestamp">{comment.timestamp}</span>
    </div>
  </div>
);

const Profile = () => {
  const [user, setUser] = useState(initialUser);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedUser, setEditedUser] = useState(user);
  const [activeTab, setActiveTab] = useState("posts");

  // Modal handling
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
    setEditedUser((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Layout>
      <div className="profile-page-container">
        <div className="profile-card">
          <div className="profile-card-header">
            <img
              src={user.profileImage}
              alt={user.name}
              className="profile-avatar"
            />
          </div>
          <div className="profile-info">
            <h1 className="user-name">{user.name}</h1>
            <p className="user-location">{user.location}</p>
            <p className="user-bio">{user.bio}</p>
          </div>

          <div className="profile-stats">
            <StatItem value={user.stats.reviews} label="Reviews" />
            <StatItem value={user.stats.checkIns} label="Check-ins" />
            <StatItem value={user.stats.followers} label="Followers" />
            <StatItem value={user.stats.points} label="Points" />
          </div>

          <div className="profile-badges">
            <h3 className="section-title">Badges</h3>
            <div className="badges-container">
              {user.badges.map((badge) => (
                <BadgeItem key={badge} label={badge} />
              ))}
            </div>
          </div>

          <button className="edit-profile-btn" onClick={handleEditProfile}>
            Edit Profile
          </button>

          <div className="profile-content-section">
            <div className="content-tabs">
              <button
                className={activeTab === "posts" ? "active" : ""}
                onClick={() => setActiveTab("posts")}
              >
                Posts
              </button>
              <button
                className={activeTab === "reviews" ? "active" : ""}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button>
              <button
                className={activeTab === "comments" ? "active" : ""}
                onClick={() => setActiveTab("comments")}
              >
                Comments
              </button>
            </div>
            <div className="content-list">
              {activeTab === "posts" &&
                userPosts.map((post) => <PostItem key={post.id} post={post} />)}
              {activeTab === "reviews" &&
                userReviews.map((review) => (
                  <ReviewItem key={review.id} review={review} />
                ))}
              {activeTab === "comments" &&
                userComments.map((comment) => (
                  <CommentItem key={comment.id} comment={comment} />
                ))}
            </div>
          </div>
        </div>
      </div>

      {isEditModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Edit Profile</h2>
            <button className="close-btn" onClick={handleCloseModal}>
              &times;
            </button>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={editedUser.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={editedUser.location}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Bio</label>
              <textarea
                name="bio"
                value={editedUser.bio}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="modal-actions">
              <button onClick={handleCloseModal} className="cancel-btn">
                Cancel
              </button>
              <button onClick={handleSaveProfile} className="save-btn">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .profile-page-container {
          padding: 2.5rem 1rem;
          background-color: #f0f2f5;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }
        .profile-card {
          width: 100%;
          max-width: 680px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          text-align: center;
        }
        .profile-card-header {
          margin-top: -60px;
          margin-bottom: 1rem;
        }
        .profile-avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 5px solid #fff;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          object-fit: cover;
        }
        .user-name {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1c1e21;
          margin: 0;
        }
        .user-location {
          color: #65676b;
          margin: 0.25rem 0 0.75rem;
          font-size: 1rem;
        }
        .user-bio {
          color: #65676b;
          font-size: 1rem;
          max-width: 450px;
          margin: 0 auto 1.5rem;
        }
        .profile-stats {
          display: flex;
          justify-content: space-around;
          background: #f7f8fa;
          border-radius: 12px;
          padding: 1rem;
          margin-bottom: 2rem;
        }
        .stat-item {
          flex-basis: 25%;
        }
        .stat-value {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1c1e21;
        }
        .stat-label {
          color: #65676b;
          font-size: 0.85rem;
        }
        .section-title {
          color: #1c1e21;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-align: left;
        }
        .badges-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
          margin-bottom: 2rem;
        }
        .badge-item {
          background-color: #fef9e7;
          color: #d4a90f;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .edit-profile-btn {
          width: 100%;
          padding: 0.75rem;
          font-size: 1rem;
          font-weight: 600;
          color: #d4a90f;
          background-color: #fef9e7;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s;
          margin-bottom: 2rem;
        }
        .edit-profile-btn:hover {
          background-color: #fdf3d9;
        }

        .profile-content-section {
          border-top: 1px solid #ddd;
          padding-top: 1.5rem;
        }
        .content-tabs {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid #e0e0e0;
        }
        .content-tabs button {
          background: none;
          border: none;
          padding: 0.75rem 0;
          cursor: pointer;
          font-size: 1rem;
          color: #65676b;
          font-weight: 600;
          position: relative;
        }
        .content-tabs button.active {
          color: #f5c518;
        }
        .content-tabs button.active::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 3px;
          background-color: #f5c518;
        }
        .content-list {
          display: grid;
          gap: 1rem;
        }
        .content-item-card {
          background: #f7f8fa;
          padding: 1.25rem;
          border-radius: 12px;
          text-align: left;
        }
        .post-content,
        .review-content,
        .comment-content {
          margin: 0 0 1rem;
          color: #1c1e21;
          line-height: 1.5;
        }

        .item-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          color: #65676b;
        }
        .post-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .action-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
        }
        .action-item svg {
          stroke: #65676b;
        }

        @keyframes heartbeat {
            0% { transform: scale(1); }
            50% { transform: scale(1.3); }
            100% { transform: scale(1); }
        }

        .action-item.liked svg {
            fill: red;
            stroke: red;
            animation: heartbeat 0.5s ease;
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .cafe-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1c1e21;
          margin: 0;
        }
        .rating {
          color: #ffc107;
          font-size: 1rem;
        }
        .comment-context {
          font-style: italic;
          color: #65676b;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: #fff;
          padding: 2rem;
          border-radius: 12px;
          width: 90%;
          max-width: 450px;
        }
        .modal-content h2 {
          margin-top: 0;
        }
        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 6px;
        }
        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .cancel-btn {
          background-color: #eee;
        }
        .save-btn {
          background-color: #f5c518;
          color: #0f1115;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
          cursor: pointer;
        }
      `}</style>
    </Layout>
  );
};

export default Profile;
