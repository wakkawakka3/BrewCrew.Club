// src/pages/Forum.js

import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../index.css';

// --- SVG Icon Components ---
const Search = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    ></path>
  </svg>
);
const Filter = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L12 14.414V19a1 1 0 01-1.447.894L7 18.5V14.414L3.293 6.707A1 1 0 013 6V4z"
    ></path>
  </svg>
);
const TrendingUp = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    ></path>
  </svg>
);
const Plus = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    ></path>
  </svg>
);
const Clock = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);
const MapPin = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    ></path>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    ></path>
  </svg>
);
const Heart = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);
const MessageCircle = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);
const Share2 = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
    <polyline points="16 6 12 2 8 6"></polyline>
    <line x1="12" y1="2" x2="12" y2="15"></line>
  </svg>
);

// --- Data ---
const forumPosts = [
  {
    id: 1,
    author: "Sarah Coffee",
    username: "@sarahbrews",
    time: "2 hours ago",
    content:
      "Just discovered this amazing single-origin Ethiopian coffee at Blue Tokai! The fruity notes are incredible. Anyone else tried their Sidama beans?",
    category: "Coffee Review",
    likes: 24,
    comments: 8,
    location: "Mumbai",
    trending: true,
  },
  {
    id: 2,
    author: "Rohan Sharma",
    username: "@rohanroasts",
    time: "4 hours ago",
    content: `Looking for the best latte art classes in Bangalore. Any recommendations? Want to step up my home brewing game! ☕`,
    category: "Question",
    likes: 15,
    comments: 12,
    location: "Bangalore",
    trending: false,
  },
  {
    id: 3,
    author: "Priya Patel",
    username: "@priyacoffee",
    time: "6 hours ago",
    content:
      "Café hopping in Delhi today! Started at Subko, now at Sleepy Owl. The cold brew scene here is amazing. Which café should I hit next?",
    category: "Café Hopping",
    likes: 42,
    comments: 18,
    location: "Delhi",
    trending: true,
  },
];
const categories = [
  "All Posts",
  "Coffee Reviews",
  "Café Recommendations",
  "Brewing Tips",
  "Equipment",
  "Questions",
  "Café Hopping",
];
const trendingTopics = [
  "ethiopiancoffee",
  "latteart",
  "bluetokaireview",
  "coldbrewtips",
];

// --- Sub-components ---

const ForumHero = ({ onNewDiscussionClick }) => (
  <section className="forum-hero">
    <div className="container">
      <div className="hero-content">
        <h1>Coffee Community Forum</h1>
        <p>Share your coffee discoveries, ask questions, and connect with fellow enthusiasts.</p>
        <button onClick={onNewDiscussionClick} className="cta-button">
          <Plus style={{ width: "20px", height: "20px" }} />
          <span>Start New Discussion</span>
        </button>
      </div>
    </div>
  </section>
);

const ForumSidebar = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
}) => (
  <aside className="sidebar">
    <div className="sidebar-widget">
      <div style={{ position: "relative" }}>
        <Search
          style={{
            position: "absolute",
            left: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
            width: "1rem",
            height: "1rem",
            color: "#999",
          }}
        />
        <input
          type="text"
          placeholder="Search discussions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
          style={{ paddingLeft: "2.5rem", width: "100%" }}
        />
      </div>
    </div>
    <div className="sidebar-widget">
      <h3>
        <Filter
          style={{
            color: "var(--accent-color)",
            width: "1.2rem",
            height: "1.2rem",
          }}
        />
        Categories
      </h3>
      <div>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`category-button ${
              selectedCategory === category ? "active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
    <div className="sidebar-widget">
      <h3>
        <TrendingUp
          style={{
            color: "var(--accent-color)",
            width: "1.2rem",
            height: "1.2rem",
          }}
        />
        Trending
      </h3>
      <div className="trending-tags">
        {trendingTopics.map((topic) => (
          <span key={topic} className="tag">
            #{topic}
          </span>
        ))}
      </div>
    </div>
  </aside>
);

const NewPostForm = ({ onCancel }) => (
  <div className="contact-form-wrapper">
    <form className="contact-form">
      <h3>Start a New Discussion</h3>
      <div className="form-group">
        <label htmlFor="post-title">Title</label>
        <input
          id="post-title"
          type="text"
          placeholder="What's brewing in your mind?"
        />
      </div>
      <div className="form-group">
        <label htmlFor="post-content">Content</label>
        <textarea
          id="post-content"
          placeholder="Share your coffee thoughts..."
          rows="5"
        ></textarea>
      </div>
      <div className="form-group">
        <label>Category</label>
        <div className="trending-tags">
          {categories.slice(1).map((category) => (
            <span key={category} className="tag">
              {category}
            </span>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button type="submit" className="cta-button">
          Post Discussion
        </button>
        <button
          type="button"
          className="cta-button cta-button-outline"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
);

const ForumPostCard = ({ post }) => (
  <article className="post-card">
    <div className="post-main">
      <div className="post-header">
        <div className="post-author-details">
          <div className="post-avatar">
            {post.author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="author-info">
            <div className="author-name">{post.author}</div>
            <div className="post-meta">
              <span>{post.username}</span>
              <span>•</span>
              <span>
                <Clock style={{ width: "1em", height: "1em" }} /> {post.time}
              </span>
              <span>•</span>
              <span>
                <MapPin style={{ width: "1em", height: "1em" }} />{" "}
                {post.location}
              </span>
            </div>
          </div>
        </div>
        {post.trending && (
          <div className="trending-badge">
            <TrendingUp style={{ width: "1em", height: "1em" }} /> Trending
          </div>
        )}
      </div>
      <p className="post-content">{post.content}</p>
      <span className="post-category">{post.category}</span>
      <div className="post-actions">
        <div className="action-buttons">
          <button>
            <Heart style={{ width: "18px", height: "18px" }} />
            <span>{post.likes}</span>
          </button>
          <button>
            <MessageCircle style={{ width: "18px", height: "18px" }} />
            <span>{post.comments}</span>
          </button>
          <button>
            <Share2 style={{ width: "18px", height: "18px" }} />
            <span>Share</span>
          </button>
        </div>
        <button className="reply-button">Reply</button>
      </div>
    </div>
  </article>
);

const Forum = () => {
  const [showNewPost, setShowNewPost] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  const filteredPosts = useMemo(() => {
    return forumPosts.filter((post) => {
      const categoryMatch =
        selectedCategory === "All Posts" ||
        post.category.includes(selectedCategory.replace("s", ""));
      const searchMatch =
        searchQuery === "" ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <Navbar />
      <ForumHero onNewDiscussionClick={() => setShowNewPost(!showNewPost)} />
      <div className="default-main" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div className="forum-layout">
            <ForumSidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <div className="forum-main-content">
              {showNewPost && (
                <NewPostForm onCancel={() => setShowNewPost(false)} />
              )}
              {filteredPosts.map((post) => (
                <ForumPostCard key={post.id} post={post} />
              ))}
              <div style={{ textAlign: "center", paddingTop: "2rem" }}>
                <button className="load-more-button">
                  Load More Discussions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Forum;
