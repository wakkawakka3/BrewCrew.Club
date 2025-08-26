import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="section fade-in"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading">About BrewCrew Club</h2>
      <div className="content-wrapper">
        <p>
          At BrewCrew Club, we believe coffee is more than a drink — it’s a
          vibe, a culture, and a community. From hidden indie cafés to your
          daily cappuccino fix, we’re building India’s first coffee-first
          platform where you can explore cafés, meet coffee lovers, and sip
          smarter.
        </p>
        <blockquote className="brand-story">
          <p>
            <strong>
              Born out of countless café-hopping sessions, BrewCrew Club is a
              community-driven platform designed for and by coffee lovers. Our
              vision is to build India's largest, most passionate coffee-first
              community.
            </strong>
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default About;