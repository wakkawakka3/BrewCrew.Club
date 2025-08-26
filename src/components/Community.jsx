import React from 'react';
import { Link } from 'react-router-dom';

const Community = () => {
  return (
    <section
        id="community"
        class="section fade-in"
        aria-labelledby="community-heading"
      >
        <h2 id="community-heading">Join the Community</h2>
        <p>
          Share your latte art, explore hidden cafés, and enjoy exclusive perks.
          Coffee tastes better when brewed together.
        </p>
        <a href="pages/blog.html" class="cta-button">Share Your Coffee Story</a>
      </section>
  );
};

export default Community;