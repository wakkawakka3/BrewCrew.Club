import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ArticleCard = ({ title, excerpt, author, date }) => (
  <a href="#" className="article-card">
    <div className="article-image">Image Placeholder</div>
    <div className="article-content">
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <div className="article-meta">
        By {author} | {date}
      </div>
    </div>
  </a>
);

const Blog = () => {
  return (
    <div className="page-container default-page">
      <Navbar />
      <main className="default-main container">
        <header className="page-header">
          <h1>The BrewCrew Blog</h1>
          <p>
            Dive deep into the world of coffee with brewing guides, café
            spotlights, and stories from our vibrant community.
          </p>
        </header>

        <div className="blog-grid">
          <ArticleCard
            title="The Ultimate Guide to make the Classic Coffee"
            excerpt="Exploring the most simple way one can make coffee easily :)"
            author="Akansh Rawat"
            date="soon, 2025"
          />
          <ArticleCard
            title="The Ultimate Guide to make the Classic Indian Home style Tea"
            excerpt="Exploring the most simple way one can make tea easily for the tea lovers."
            author="Akansh Rawat"
            date="soon, 2025"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
