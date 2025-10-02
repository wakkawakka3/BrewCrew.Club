
import React, { useState, useMemo } from 'react';
import Layout from '../components/Layout';

// --- SVG Icons ---
const SearchIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const FilterIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>;
const TrendingIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 12"></polyline></svg>;
const PlusIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
const HeartIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>;
const MessageIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;
const ShareIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>;
const MoreHorizontalIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>;


// --- Data ---
const forumPosts = [
    { id: 1, initials: 'SC', author: 'Sarah Coffee', username: '@sarahbrews', time: '2 hours ago', location: 'Mumbai', content: 'Just discovered this amazing single-origin Ethiopian coffee at Blue Tokai! The fruity notes are incredible. Anyone else tried their Sidama beans?', category: 'Coffee Review', likes: 24, comments: 8, trending: true },
    { id: 2, initials: 'RS', author: 'Rohan Sharma', username: '@rohanroasts', time: '4 hours ago', location: 'Bangalore', content: `Looking for the best latte art classes in Bangalore. Any recommendations? Want to step up my home brewing game! ☕`, category: 'Question', likes: 15, comments: 12, trending: false },
    { id: 3, initials: 'PP', author: 'Priya Patel', username: '@priyacoffee', time: '6 hours ago', location: 'Delhi', content: 'Café hopping in Delhi today! Started at Subko, now at Sleepy Owl. The cold brew scene here is amazing. Which café should I hit next?', category: 'Café Hopping', likes: 42, comments: 18, trending: true },
];

const categories = ["All Posts", "Coffee Reviews", "Café Recommendations", "Brewing Tips", "Equipment", "Questions", "Café Hopping"];
const trendingTopics = ["#ethiopiancoffee", "#latteart", "#bluetokaireview", "#coldbrewtips"];

// --- Components ---

const ForumHero = ({ onNewDiscussionClick }) => (
    <div className="forum-hero">
        <h1>
            Coffee <br />
            <span className="brand-highlight">Community Forum</span>
        </h1>
        <p>Share experiences, ask questions, and connect with coffee enthusiasts across India</p>
        <button className="start-discussion-btn" onClick={onNewDiscussionClick}>
            <PlusIcon />
            Start a Discussion
        </button>
    </div>
);

const Sidebar = ({ selectedCategory, setSelectedCategory, searchQuery, setSearchQuery }) => (
    <aside className="forum-sidebar">
        <div className="sidebar-widget">
            <div className="search-box">
                <SearchIcon />
                <input type="text" placeholder="Search discussions..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
        </div>
        <div className="sidebar-widget">
            <h4 className="sidebar-title"><FilterIcon /> Categories</h4>
            <div className="category-list">
                {categories.map(cat => (
                    <button 
                        key={cat} 
                        className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
        <div className="sidebar-widget">
            <h4 className="sidebar-title"><TrendingIcon /> Trending</h4>
            <div className="trending-tags">
                {trendingTopics.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
        </div>
    </aside>
);

const PostCard = ({ post }) => (
    <article className="post-card">
        <div className="post-header">
            <div className="post-avatar">{post.initials}</div>
            <div className="post-author-info">
                <span className="post-author">{post.author}</span>
                <span className="post-meta">{post.username} • {post.time} • {post.location}</span>
            </div>
            <div className="post-actions-menu">
                <MoreHorizontalIcon />
                {post.trending && <span className="trending-badge"><TrendingIcon /> Trending</span>}
            </div>
        </div>
        <p className="post-content">{post.content}</p>
        <div className="post-footer">
            <span className="post-category-tag">{post.category}</span>
            <div className="post-stats">
                <button className="stat-btn"><HeartIcon /> {post.likes}</button>
                <button className="stat-btn"><MessageIcon /> {post.comments}</button>
                <button className="stat-btn"><ShareIcon /> Share</button>
            </div>
            <button className="reply-btn">Reply</button>
        </div>
    </article>
);

const NewDiscussionModal = ({ onCancel }) => (
    <div className="modal-overlay">
        <div className="modal-content">
            <h3>Start a New Discussion</h3>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input id="title" type="text" placeholder="What's brewing in your mind?" />
            </div>
            <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea id="content" rows="5" placeholder="Share your coffee thoughts..."></textarea>
            </div>
            <div className="form-group">
                <label>Category</label>
                <div className="category-tags">
                    {categories.slice(1).map(cat => <span key={cat} className="category-tag-choice">{cat}</span>)}
                </div>
            </div>
            <div className="form-actions">
                <button className="btn-primary">Post Discussion</button>
                <button className="btn-secondary" onClick={onCancel}>Cancel</button>
            </div>
        </div>
    </div>
);


const Forum = () => {
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Posts");

    const filteredPosts = useMemo(() => {
        return forumPosts.filter(post => {
            const categoryMatch = selectedCategory === "All Posts" || post.category === selectedCategory;
            const searchMatch = post.content.toLowerCase().includes(searchQuery.toLowerCase()) || post.author.toLowerCase().includes(searchQuery.toLowerCase());
            return categoryMatch && searchMatch;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <Layout>
            {showModal && <NewDiscussionModal onCancel={() => setShowModal(false)} />}
            <ForumHero onNewDiscussionClick={() => setShowModal(true)} />
            <div className="forum-layout">
                <Sidebar 
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
                <main className="forum-main-content">
                    {filteredPosts.map(post => <PostCard key={post.id} post={post} />)}
                </main>
            </div>
            <style jsx global>{`
                body {
                    background-color: #fcfcfc;
                }
            `}</style>
            <style jsx>{`
                /* Color Palette */
                :root {
                    --premium-yellow: #B8860B;
                    --premium-yellow-light: #fdf8e1;
                    --text-on-light: #B8860B;
                }
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

                .forum-hero {
                    text-align: center;
                    padding: 3rem 2rem 3rem;
                    background-color: #fff;
                    border-bottom: 1px solid #eee;
                }
                .forum-hero h1 {
                    font-size: 3.5rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    line-height: 1.2;
                    margin: 0;
                    animation: fadeInUp 0.6s ease-out;
                }
                .forum-hero .brand-highlight {
                    color: #B8860B; /* Premium Yellow */
                }
                .forum-hero p {
                    font-size: 1.1rem;
                    color: #555;
                    max-width: 500px;
                    margin: 1rem auto 2rem;
                }
                .start-discussion-btn {
                    background-color: #1a1a1a;
                    color: #fff;
                    padding: 0.8rem 1.5rem;
                    border-radius: 25px;
                    border: none;
                    font-weight: 600;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: background-color 0.3s;
                }
                .start-discussion-btn:hover {
                    background-color: #333;
                }

                /* Forum Layout */
                .forum-layout {
                    display: flex;
                    gap: 2rem;
                    padding: 2rem;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .forum-sidebar {
                    flex: 1;
                    max-width: 300px;
                }
                .forum-main-content {
                    flex: 2.5;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                /* Sidebar */
                .sidebar-widget {
                    background-color: #fff;
                    border: 1px solid #f0f0f0;
                    border-radius: 12px;
                    padding: 1.5rem;
                    margin-bottom: 2rem;
                }
                .sidebar-title {
                    font-size: 1rem;
                    font-weight: 600;
                    margin: 0 0 1rem 0;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #333;
                }
                .search-box {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    border-radius: 8px;
                    background-color: #f7f7f7;
                    border: 1px solid #eee;
                }
                .search-box input {
                    border: none;
                    background: transparent;
                    outline: none;
                    width: 100%;
                    font-size: 0.95rem;
                }
                .category-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .category-btn {
                    width: 100%;
                    text-align: left;
                    padding: 0.75rem 1rem;
                    border-radius: 8px;
                    border: none;
                    background: transparent;
                    cursor: pointer;
                    font-size: 0.95rem;
                    font-weight: 500;
                    color: #555;
                    transition: background-color 0.2s, color 0.2s;
                }
                .category-btn:hover {
                    background-color: #f5f5f5;
                }
                .category-btn.active {
                    background-color: #fdf8e1; /* Light Yellow */
                    color: #B8860B; /* Dark Yellow */
                    font-weight: 600;
                }
                .trending-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }
                .tag {
                    background-color: #fdf8e1; /* Light Yellow */
                    color: #B8860B; /* Dark Yellow */
                    padding: 0.3rem 0.6rem;
                    border-radius: 6px;
                    font-size: 0.8rem;
                    font-weight: 500;
                }

                /* Post Card */
                .post-card {
                    background: #fff;
                    border: 1px solid #f0f0f0;
                    border-radius: 12px;
                    padding: 1.5rem;
                }
                .post-header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1rem;
                }
                .post-avatar { width: 40px; height: 40px; border-radius: 50%; background: #e5e5e5; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #555; margin-right: 1rem;}
                .post-author-info { flex-grow: 1; }
                .post-author { font-weight: 600; color: #1a1a1a; }
                .post-meta { color: #777; font-size: 0.85rem; display: block;}
                .post-actions-menu {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #777;
                }
                .trending-badge {
                    display: inline-flex; align-items: center; gap: 0.25rem; background-color: #fdf8e1; color: #B8860B; padding: 0.25rem 0.5rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600;
                }
                .post-content { margin: 0 0 1rem 0; color: #333; line-height: 1.6; }
                .post-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .post-category-tag {
                    background-color: #fdf8e1; color: #B8860B; padding: 0.3rem 0.8rem; border-radius: 12px; font-size: 0.8rem; font-weight: 500;
                }
                .post-stats {
                    display: flex;
                    gap: 1rem;
                }
                .stat-btn {
                    background: none; border: none; cursor: pointer; color: #777; display: flex; align-items: center; gap: 0.35rem; font-size: 0.9rem;
                }
                .reply-btn {
                    background: none; border: none; cursor: pointer; font-weight: 600; color: #B8860B; font-size: 0.9rem;
                }
                
                /* Modal */
                .modal-overlay {
                    position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000;
                }
                .modal-content {
                    background: #fff; border-radius: 12px; padding: 2rem; width: 90%; max-width: 550px;
                }
                .modal-content h3 { font-size: 1.5rem; font-weight: 600; margin: 0 0 2rem 0; }
                .form-group { margin-bottom: 1.5rem; }
                .form-group label { display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem; }
                .form-group input, .form-group textarea {
                    width: 100%; padding: 0.75rem 1rem; border: 1px solid #ddd; border-radius: 8px; font-size: 1rem;
                }
                .category-tags {
                    display: flex; flex-wrap: wrap; gap: 0.75rem;
                }
                .category-tag-choice {
                    cursor: pointer; background-color: #fdf8e1; color: #B8860B; padding: 0.5rem 1rem; border-radius: 16px; font-size: 0.9rem; font-weight: 500; border: 1px solid transparent; transition: all 0.2s;
                }
                .category-tag-choice:hover { border-color: #B8860B; }
                .form-actions {
                    display: flex; justify-content: flex-end; gap: 1rem; margin-top: 2rem;
                }
                .btn-primary {
                    background-color: #1a1a1a; color: #fff; padding: 0.75rem 1.5rem; border-radius: 20px; border: none; font-weight: 600; cursor: pointer;
                }
                .btn-secondary {
                    background-color: #e5e5e5; color: #1a1a1a; padding: 0.75rem 1.5rem; border-radius: 20px; border: none; font-weight: 600; cursor: pointer;
                }

                @media (max-width: 768px) {
                    .forum-layout { flex-direction: column; }
                    .forum-sidebar { max-width: 100%; }
                }
            `}</style>
        </Layout>
    );
};

export default Forum;
