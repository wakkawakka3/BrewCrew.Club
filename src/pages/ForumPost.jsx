import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Layout from '../components/Layout';

const ArrowLeftIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>;
const ThumbsUpIcon = ({ liked }) => <svg width="16" height="16" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>;
const SendIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>;
const Share2Icon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>;

const ForumPost = () => {
    const location = useLocation();
    const { post } = location.state || {};
    const [likedComments, setLikedComments] = useState([]);

    const handleCommentLike = (commentId) => {
        setLikedComments(prev => prev.includes(commentId) ? prev.filter(id => id !== commentId) : [...prev, commentId]);
    };

    if (!post) {
        return (
            <Layout>
                <main className="post-detail-page">
                    <div className="post-container">
                        <Link to="/forum" className="back-link"><ArrowLeftIcon /> Back to Forum</Link>
                        <p>Post not found.</p>
                    </div>
                </main>
            </Layout>
        );
    }

    return (
        <Layout>
            <main className="post-detail-page">
                {/* Enhanced Hero Section */}
                <header className="post-hero">
                    <div className="hero-background">
                        <div className="hero-pattern"></div>
                    </div>
                    <div className="container hero-content">
                        <div className="hero-badge">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                            <span>Forum Discussion</span>
                        </div>
                        <h1 className="hero-title">
                            <span className="gradient-text">{post.title}</span>
                        </h1>
                        <div className="hero-meta">
                            <span>By {post.author}</span>
                            <span>•</span>
                            <span>{post.time}</span>
                            {post.location && (
                                <>
                                    <span>•</span>
                                    <span>{post.location}</span>
                                </>
                            )}
                        </div>
                    </div>
                </header>

                <div className="container">
                    <div className="post-container">
                        <Link to="/forum" className="back-link"><ArrowLeftIcon /> Back to Forum</Link>
                    <p className="post-content">{post.content}</p>

                    <div className="comments-section">
                        <h3>Comments ({post.comments.length})</h3>
                        <div className="comment-list">
                            {post.comments.map(comment => (
                                <div key={comment.id} className="comment">
                                    <div className="comment-header">
                                        <span className="comment-author">{comment.author}</span>
                                        <span className="comment-time">{comment.time}</span>
                                    </div>
                                    <p className="comment-text">{comment.text}</p>
                                    <div className="comment-actions">
                                        <button onClick={() => handleCommentLike(comment.id)} className={likedComments.includes(comment.id) ? 'liked' : ''}>
                                            <ThumbsUpIcon liked={likedComments.includes(comment.id)} /> 
                                            {comment.likes > 0 && <span>{comment.likes + (likedComments.includes(comment.id) ? 1 : 0)}</span>}
                                        </button>
                                        <button>Reply</button>
                                        <button><Share2Icon /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="add-comment-section">
                        <h4>Add a Comment</h4>
                        <div className="comment-input-wrapper">
                            <input
                                type="text"
                                placeholder="Write a comment..."
                            />
                            <button><SendIcon /></button>
                        </div>
                    </div>
                </div>
                </div>
            </main>
            <style jsx>{`
                /* Apple-inspired Design System */
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

                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(2deg); }
                }

                @keyframes like-animation {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                }

                /* Hero Section */
                .post-hero {
                    position: relative;
                    padding: 6rem 0 4rem;
                    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
                    overflow: hidden;
                }

                .hero-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    pointer-events: none;
                }

                .hero-pattern {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: radial-gradient(circle at 20% 80%, rgba(245, 197, 24, 0.08) 0%, transparent 50%),
                                    radial-gradient(circle at 80% 20%, rgba(245, 197, 24, 0.06) 0%, transparent 50%);
                    animation: float 8s ease-in-out infinite;
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(245, 197, 24, 0.12);
                    color: var(--accent-color);
                    padding: 0.5rem 1rem;
                    border-radius: 50px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    margin-bottom: 2rem;
                }

                .hero-title {
                    font-size: 3rem;
                    font-weight: 600;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    letter-spacing: -0.02em;
                }

                .gradient-text {
                    background: linear-gradient(135deg, var(--accent-color), var(--yellow-600));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .hero-meta {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    color: #86868b;
                    font-size: 1rem;
                    flex-wrap: wrap;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }

                .post-detail-page {
                    background: #f5f5f7;
                    min-height: 100vh;
                }
                .post-container {
                    background: #fff;
                    border-radius: 24px;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
                    max-width: 800px;
                    width: 100%;
                    padding: 3rem;
                    margin: 2rem auto;
                    border: 1px solid #d2d2d7;
                }
                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #555;
                    text-decoration: none;
                    margin-bottom: 1.5rem;
                    font-size: 0.9rem;
                }
                .post-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }
                .post-meta {
                    display: flex;
                    gap: 1rem;
                    color: #777;
                    font-size: 0.9rem;
                    margin-bottom: 2rem;
                }
                .post-content {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: #333;
                }
                .comments-section {
                    margin-top: 3rem;
                    border-top: 1px solid #f0f0f0;
                    padding-top: 2rem;
                }
                .comments-section h3 {
                    font-size: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                .comment-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                .comment {
                    border: 1px solid #eef;
                    border-radius: 8px;
                    padding: 1.5rem;
                }
                .comment-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 0.5rem;
                }
                .comment-author {
                    font-weight: 600;
                }
                .comment-time {
                    color: #888;
                    font-size: 0.8rem;
                }
                .comment-text {
                    color: #444;
                    margin-bottom: 1rem;
                }
                .comment-actions {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .comment-actions button {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #666;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-size: 0.9rem;
                }
                .add-comment-section {
                    margin-top: 2rem;
                    padding-top: 2rem;
                    border-top: 1px solid #f0f0f0;
                }
                .add-comment-section h4 {
                    font-size: 1.2rem;
                    margin-bottom: 1rem;
                }
                .comment-input-wrapper {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background-color: #f7f7f7;
                    border-radius: 8px;
                    padding: 0.5rem 1rem;
                }
                .comment-input-wrapper input {
                    flex-grow: 1;
                    border: none;
                    background: transparent;
                    outline: none;
                    font-size: 1rem;
                }
                .comment-input-wrapper button {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #555;
                }
            `}</style>
        </Layout>
    );
}

export default ForumPost;
