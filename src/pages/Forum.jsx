import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

const SearchIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const PlusIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
const HeartIcon = ({ liked }) => <svg width="18" height="18" viewBox="0 0 24 24" fill={liked ? '#e53e3e' : 'none'} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`feather feather-heart ${liked ? 'liked' : ''}`}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>;
const MessageSquareIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;
const ShareIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5-5 5 5M12 15V3"></path></svg>;
const MoreHorizontalIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>;
const TrendingIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>;

const Forum = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showNewPostModal, setShowNewPostModal] = useState(false);
    
    const [posts, setPosts] = useState([
        { id: 1, author: 'Sarah Coffee', title: 'A deep dive into Ethiopian coffee', handle: '@sarahbrews', time: '2 hours ago', location: 'Mumbai', avatar: 'SC', content: 'Just discovered this amazing single-origin Ethiopian coffee at Blue Tokai! The fruity notes are incredible. Anyone else tried their Sidama beans?', category: 'Coffee Review', likes: 24, trending: true, comments: [
            { id: 1, author: 'Rohan Sharma', time: '1 hour ago', text: "I have! It's one of my favorites.", likes: 15 },
            { id: 2, author: 'Priya Mehta', time: '45 minutes ago', text: 'Thanks for the recommendation, Sarah! I\'ll definitely give it a try.', likes: 8 },
        ] },
        { id: 2, author: 'Rohan Sharma', title: 'Best latte art classes in Bangalore?', handle: '@rohanroasts', time: '4 hours ago', location: 'Bangalore', avatar: 'RS', content: 'Looking for the best latte art classes in Bangalore. Any recommendations? Want to step up my home brewing game! ☕', category: 'Questions', likes: 15, comments: [] },
        { id: 3, author: 'Priya Patel', title: 'My café hopping journey in Delhi', handle: '@priyacoffee', time: '6 hours ago', location: 'Delhi', avatar: 'PP', content: 'Café hopping in Delhi today! Started at Subko, now at Sleepy Owl. The cold brew scene here is amazing. Which café should I hit next?', category: 'Café Hopping', likes: 42, trending: true, comments: [] },
        { id: 4, author: 'Mike Anderson', title: 'New Artisan Coffee Shop in Town!', handle: '@mike_a', time: '1 day ago', location: 'New York', avatar: 'MA', content: 'Just visited "The Daily Grind," a new artisan coffee shop on 5th Ave. Their espresso is a must-try! The atmosphere is great for working or just hanging out.', category: 'Café Hopping', likes: 31, trending: false, comments: [] },
        { id: 5, author: 'Jessica Lee', title: 'Cold Brew: Immersion vs. Slow Drip', handle: '@jessica_l', time: '2 days ago', location: 'Online', avatar: 'JL', content: "What are your thoughts on immersion vs. slow drip for cold brew? I've been using an immersion method with my french press, but I'm curious about the slow drip towers. Is it worth the investment?", category: 'Questions', likes: 22, trending: false, comments: [] },
        { id: 6, author: 'David Chen', title: 'Review: The new Baratza Encore ESP', handle: '@david_c', time: '3 days ago', location: 'San Francisco', avatar: 'DC', content: 'I recently upgraded to the Baratza Encore ESP, and it has been a game-changer for my espresso setup. The grind consistency is so much better than my old grinder. Highly recommend for anyone getting serious about home espresso.', category: 'Coffee Review', likes: 55, trending: true, comments: [] },
    ]);
    
    const [likedPosts, setLikedPosts] = useState([]);

    const handleLike = (postId) => {
        setLikedPosts(prev => prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]);
    };

    const handlePostClick = (post) => {
        navigate(`/forum-post`, { state: { post } });
    };

    const handleAddNewPost = (newPost) => {
        setPosts(prevPosts => [newPost, ...prevPosts]);
    };

    const categories = ['All', 'Announcements', 'Introductions', 'Coffee Review', 'Café Hopping', 'Events', 'Questions'];

    const filteredPosts = posts.filter(post => {
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        const matchesSearch = post.content.toLowerCase().includes(searchQuery.toLowerCase()) || post.author.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <Layout>
            <div className="forum-page">
                 <header className="page-header"><h1 className="hero-title"><span className="black-text">Community</span> <span className="yellow-text">Forum</span></h1><p>Connect with fellow coffee lovers, share your experiences, and learn something new.</p></header>
                <main className="container">
                    <div className="forum-layout">
                         <aside className="forum-sidebar"><div className="sidebar-widget"><h3>Categories</h3><ul className="category-list">{categories.map(cat => (<li key={cat} className={selectedCategory === cat ? 'active' : ''} onClick={() => setSelectedCategory(cat)}>{cat}</li>))}</ul></div></aside>
                        <div className="forum-posts-section">
                             <div className="forum-toolbar"><div className="search-box-forum"><SearchIcon /><input type="text" placeholder="Search forum..." className="search-input-forum" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} /></div><button className="new-post-btn" onClick={() => setShowNewPostModal(true)}><PlusIcon /><span>New Post</span></button></div>
                            {filteredPosts.map((post) => (
                                <div key={post.id} className="post-card" onClick={() => handlePostClick(post)}>
                                   <div className="post-header"><div className="post-author-details"><div className="post-avatar">{post.avatar}</div><div className="author-info"><div className="author-line"><span className="post-author">{post.author}</span><span className="post-category-tag">{post.category}</span></div><span className="post-meta">{post.handle} &bull; {post.time} &bull; {post.location}</span></div></div><div className="post-actions-menu">{post.trending && <span className="trending-badge"><TrendingIcon /><span>Trending</span></span>}<MoreHorizontalIcon /></div></div>
                                    <p className="post-content">{post.content}</p>
                                   <div className="post-footer"><div className="post-stats"><button className="stat-btn" onClick={(e) => { e.stopPropagation(); handleLike(post.id); }}><HeartIcon liked={likedPosts.includes(post.id)} /><span>{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span></button><button className="stat-btn" onClick={(e) => e.stopPropagation()}><MessageSquareIcon /><span>{post.comments.length}</span></button><button className="stat-btn" onClick={(e) => e.stopPropagation()}><ShareIcon /><span>Share</span></button></div></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
                {showNewPostModal && <NewPostModal onAddPost={handleAddNewPost} onClose={() => setShowNewPostModal(false)} categories={categories.filter(c => c !== 'All' && c !== 'Announcements')} />}
            </div>

            <style jsx>{`
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes heartBeat { 0% { transform: scale(1); } 50% { transform: scale(1.25); } 100% { transform: scale(1); } }

                .black-text { color: #1a1a1a; } .yellow-text { color: #B8860B; }
                .page-header { text-align: center; padding: 4rem 1rem 2rem; }
                .hero-title { font-size: 3.5rem; font-weight: 700; margin-bottom: 1rem; animation: fadeInUp 0.6s ease-out; }
                .page-header p { font-size: 1.1rem; max-width: 600px; margin: 0 auto; color: #666; animation: fadeInUp 0.6s ease-out 0.2s; animation-fill-mode: both; }
                .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }

                .forum-layout { display: grid; grid-template-columns: 240px 1fr; gap: 2rem; padding: 2rem 0; }
                .forum-posts-section { max-width: 100%; }

                .forum-toolbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
                .search-box-forum { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; border-radius: 2rem; background-color: #f7f7f7; border: 1px solid #eee; flex-grow: 1; max-width: 400px; }
                .search-input-forum { border: none; background: transparent; outline: none; width: 100%; font-size: 1rem; }
                .new-post-btn { background: var(--primary-color); color: white; border: none; border-radius: 2rem; padding: 0.75rem 1.5rem; font-size: 1rem; font-weight: 600; display: flex; align-items: center; gap: 0.5rem; cursor: pointer; transition: background-color 0.2s; }
                .new-post-btn:hover { background: var(--accent-color); }

                .post-card { background-color: #fff; border-radius: 14px; padding: 1.5rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #eef0f2; transition: transform 0.2s ease, box-shadow 0.2s ease; margin-bottom: 1.5rem; cursor: pointer; }
                .post-card:hover { box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08); transform: translateY(-2px); }

                .post-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; margin-bottom: 1rem; }
                .post-author-details { display: flex; gap: 1rem; align-items: flex-start; }
                .post-avatar { width: 48px; height: 48px; border-radius: 50%; background-color: #e0e0e0; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #666; font-size: 1.1rem; flex-shrink: 0; }
                .author-info { display: flex; flex-direction: column; gap: 0.25rem; }
                .author-line { display: flex; align-items: center; gap: 0.75rem; }
                .post-author { font-weight: 600; font-size: 1.1rem; color: #1a1a1a; }
                .post-meta { color: #777; font-size: 0.9rem; }
                .post-actions-menu { display: flex; align-items: center; gap: 1rem; color: #777; }
                .post-actions-menu.large-menu { gap: 0.5rem; }
                .post-actions-menu.large-menu .stat-btn { background: #f7f7f7; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; }

                .post-content { margin: 0.5rem 0 1.5rem; color: #333; line-height: 1.6; font-size: 1rem; }
                .post-category-tag { background-color: #fdf8e1; color: #B8860B; padding: 0.25rem 0.6rem; border-radius: 50px; font-size: 0.75rem; font-weight: 600; }

                .post-footer { display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #f0f0f0; padding-top: 1rem; }
                .post-stats { display: flex; gap: 1.25rem; align-items: center; }
                .stat-btn { background: none; border: none; display: flex; align-items: center; gap: 0.5rem; color: #777; font-size: 0.9rem; cursor: pointer; }
                .stat-btn:hover { color: var(--accent-color); }
                .feather-heart.liked { animation: heartBeat 0.4s ease; color: #e53e3e; }
                .reply-btn { background: none; border: none; color: var(--accent-color); font-weight: 600; font-size: 0.9rem; cursor: pointer; }
                .trending-badge { display: inline-flex; align-items: center; gap: 0.35rem; background-color: #fdf8e1; color: #B8860B; padding: 0.3rem 0.6rem; border-radius: 6px; font-size: 0.85rem; font-weight: 600; }

                .sidebar-widget { background: #fff; padding: 1.5rem; border-radius: 12px; border: 1px solid #eef0f2; }
                .sidebar-widget h3 { margin-top: 0; margin-bottom: 1rem; font-size: 1.25rem; }
                .category-list { list-style: none; padding: 0; margin: 0; }
                .category-list li { padding: 0.75rem 0; border-bottom: 1px solid #eee; cursor: pointer; transition: color 0.2s; font-weight: 500; color: #333; }
                .category-list li:last-child { border-bottom: none; }
                .category-list li.active, .category-list li:hover { color: var(--accent-color); font-weight: 600; }

                .post-card.large { cursor: default; }
                .post-title-large { font-size: 2rem; margin-bottom: 1.5rem; color: #1a1a1a; }
                .post-content-large { font-size: 1.1rem; line-height: 1.7; color: #333; }

                .comments-section { margin-top: 3rem; border-top: 1px solid #f0f0f0; padding-top: 2rem; }
                .comments-section h3 { font-size: 1.5rem; margin-bottom: 1.5rem; }

                .add-comment-form { display: flex; gap: 1rem; margin-bottom: 2rem; align-items: center; }
                .add-comment-form .post-avatar { width: 40px; height: 40px; font-size: 1rem; }
                .add-comment-form input { flex-grow: 1; padding: 0.75rem 1rem; border: 1px solid #ddd; border-radius: 2rem; background: #f7f7f7; transition: all 0.2s; }
                .add-comment-form input:focus { background: #fff; border-color: var(--accent-color); box-shadow: 0 0 0 3px rgba(184, 134, 11, 0.1); outline: none; }
                .post-comment-btn { background: var(--primary-color); color: white; border: none; width: 44px; height: 44px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background-color 0.2s; }
                .post-comment-btn:hover { background: var(--accent-color); }
                
                .comment-thread { display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 1.5rem; }
                .comment-avatar { width: 40px; height: 40px; border-radius: 50%; background-color: #e0e0e0; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #666; font-size: 1rem; flex-shrink: 0; }
                .comment-body { flex-grow: 1; }
                .comment-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem; }
                .comment-author { font-weight: 600; font-size: 0.95rem; }
                .comment-time { font-size: 0.85rem; color: #777; }
                .comment-text { margin: 0 0 0.5rem; line-height: 1.5; color: #333; }
                .comment-actions { display: flex; align-items: center; gap: 1rem; }
                .comment-actions button { background: none; border: none; color: #777; display: flex; align-items: center; gap: 0.35rem; font-size: 0.85rem; cursor: pointer; padding: 0; }
                .comment-actions button:hover { color: var(--accent-color); }
                .comment-menu { color: #777; }

                .back-btn { background: #fff; border: 1px solid #eef0f2; display: flex; align-items: center; gap: 0.5rem; font-size: 1rem; color: #333; cursor: pointer; margin-bottom: 2rem; padding: 0.6rem 1.2rem; border-radius: 2rem; font-weight: 600; transition: all 0.2s; }
                .back-btn:hover { background: #f7f7f7; color: var(--accent-color); border-color: #ddd; }

                @media (max-width: 992px) { .forum-layout { grid-template-columns: 1fr; } .forum-sidebar { margin-bottom: 2rem; } }
                @media (max-width: 576px) { .post-footer { flex-direction: column; align-items: flex-start; gap: 1rem; } }
            `}</style>
        </Layout>
    );
};

const NewPostModal = ({ onAddPost, onClose, categories }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState(categories[0] || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim() || !category) {
            alert('Please fill out all fields.');
            return;
        }

        const newPost = {
            id: Date.now(),
            author: 'Current User', 
            handle: '@currentuser',
            time: 'Just now',
            location: 'Your Location',
            avatar: 'CU',
            title,
            content,
            category,
            likes: 0,
            comments: [],
            trending: false,
        };

        onAddPost(newPost);
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>&times;</button>
                <h2>Create New Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="post-title">Title</label>
                        <input id="post-title" type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter a title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="post-category">Category</label>
                        <select id="post-category" value={category} onChange={e => setCategory(e.target.value)}>
                            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="post-content">Content</label>
                        <textarea id="post-content" value={content} onChange={e => setContent(e.target.value)} placeholder="What's on your mind?" rows="6"></textarea>
                    </div>
                    <div className="form-actions">
                        <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
                        <button type="submit" className="submit-btn">Post</button>
                    </div>
                </form>
            </div>
            <style jsx>{`
                .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; z-index: 1000; }
                .modal-content { background: #fff; padding: 2rem; border-radius: 12px; width: 90%; max-width: 550px; position: relative; }
                .modal-close { position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #888; }
                h2 { margin-top: 0; margin-bottom: 1.5rem; }
                .form-group { margin-bottom: 1.25rem; }
                label { display: block; margin-bottom: 0.5rem; font-weight: 600; font-size: 0.9rem; }
                input, select, textarea { width: 100%; padding: 0.75rem; border-radius: 6px; border: 1px solid #ddd; font-size: 1rem; }
                textarea { resize: vertical; }
                .form-actions { display: flex; justify-content: flex-end; gap: 1rem; margin-top: 2rem; }
                .cancel-btn, .submit-btn { padding: 0.75rem 1.5rem; border-radius: 8px; border: none; font-size: 1rem; font-weight: 600; cursor: pointer; }
                .cancel-btn { background: #eee; }
                .submit-btn { background: var(--primary-color); color: #fff; }
            `}</style>
        </div>
    );
};

export default Forum;
