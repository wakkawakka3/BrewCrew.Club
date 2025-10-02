import React from "react";
import Layout from "../components/Layout";

const AboutUs = () => {
  const team = [
    {
      name: "Akansh Rawat",
      role: "Founder & CEO",
      image: "https://placehold.co/200x200/d7a86e/3d2b1f?text=Akansh",
      bio: "A coffee fanatic on a mission to unite India's coffee lovers.",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: "Community",
      description: "Connecting coffee lovers and fostering a sense of belonging.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
      title: "Passion",
      description: "Our love for coffee is the driving force behind everything we do.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
        </svg>
      ),
      title: "Authenticity",
      description: "Sharing genuine stories and experiences from the coffee world.",
    },
  ];

  const journey = [
    {
      year: "July 2025",
      title: "The Launch",
      description:
        "BrewCrew Club officially launches, opening its doors to coffee enthusiasts across India.",
    },
    {
      year: "Late 2025",
      title: "Community Growth",
      description:
        "Expanding our community features, including forums and local meetups.",
    },
    {
      year: "2026",
      title: "Partner Program",
      description:
        "Introducing our café partner program to help local businesses thrive.",
    },
    {
      year: "Future",
      title: "Beyond Coffee",
      description: "Exploring new horizons, from workshops to exclusive merchandise.",
    },
  ];

  return (
    <Layout noPadding>
      <div className="about-us-page">
        {/* Hero Section */}
        <header className="about-hero">
          <div className="hero-content container">
            <h1 className="hero-title">
              <span className="black-text">Our Story:</span> <span className="yellow-text">The BrewCrew Journey</span>
            </h1>
            <p className="subtitle">
              From a simple idea to India's first coffee-only community.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="container">
          {/* Our Mission Section */}
          <section className="mission-section text-center">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-intro">
              To be the digital hub for India's passionate coffee community. We
              connect enthusiasts, amplify stories, and support local cafés, one
              cup at a time.
            </p>
          </section>

          {/* Our Values Section */}
          <section className="values-section">
            <h2 className="section-title text-center">Our Values</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3 className="value-title">{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Journey Section */}
          <section className="journey-section">
            <h2 className="section-title text-center">Our Journey</h2>
            <div className="timeline-container">
              <div className="timeline">
                {journey.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-content">
                      <div className="timeline-year">{item.year}</div>
                      <h3 className="timeline-title">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="team-section">
            <h2 className="section-title text-center">Meet the Team</h2>
            <p className="section-intro text-center">
              The passionate individual behind BrewCrew Club.
            </p>
            <div className="team-grid">
              {team.map((member, index) => (
                <div key={index} className="team-member-card">
                  <div className="team-member-image-wrapper">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-role">{member.role}</p>
                  <p className="team-member-bio">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section text-center">
            <h2 className="section-title">Join the BrewCrew</h2>
            <p className="section-intro">
              Become a part of India's fastest-growing coffee community.
            </p>
            <a href="/join" className="cta-button">
              Sign Up Today
            </a>
          </section>
        </main>
      </div>

      <style jsx>{`
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
        .about-us-page {
          background: var(--off-white);
        }
        .black-text {
          color: #1a1a1a;
        }
        .yellow-text {
          color: #B8860B;
        }

        /* Hero Section */
        .about-hero {
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url('https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2070&auto=format&fit=crop')
              center/cover no-repeat;
          color: var(--text-light);
          padding: 6rem 0;
          text-align: center;
          border-bottom: 4px solid var(--accent-color);
        }
        .hero-title {
          color: var(--text-light);
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          animation: fadeInUp 0.6s ease-out;
        }
        .hero-title .black-text{
          color: white;
        }

        .hero-content .subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
          color: var(--text-light);
        }

        /* Common Section Styles */
        .container > section {
          padding: 4rem 0;
          border-bottom: 1px solid var(--border-color);
        }
        .container > section:last-child {
          border-bottom: none;
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--primary-color);
        }
        .section-intro {
          font-size: 1.1rem;
          max-width: 800px;
          margin: 0 auto 3rem auto;
          color: var(--text-muted);
        }
        .text-center {
          text-align: center;
        }

        /* Values Section */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .value-card {
          background: var(--secondary-color);
          padding: 2rem;
          border-radius: var(--border-radius-md);
          text-align: center;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
          border-color: var(--accent-color);
        }
        .value-icon {
          color: var(--accent-color);
          width: 48px;
          height: 48px;
          margin: 0 auto 1.5rem auto;
        }
        .value-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        /* Journey Section (Timeline) */
        .timeline-container {
          position: relative;
          max-width: 900px;
          margin: 3rem auto 0 auto;
        }
        .timeline::before {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          bottom: 0;
          width: 4px;
          background: var(--border-color);
          border-radius: 2px;
        }
        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
        }
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        .timeline-content {
          position: relative;
          width: 45%;
          padding: 1.5rem;
          background: var(--secondary-color);
          border-radius: var(--border-radius-md);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }
        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
          border-color: var(--accent-color);
        }
        .timeline-item:nth-child(odd) .timeline-content {
          left: 0;
        }
        .timeline-item:nth-child(even) .timeline-content {
          left: 55%;
        }
        .timeline-content::after {
          content: "";
          position: absolute;
          top: 20px;
          width: 0;
          height: 0;
          border: 10px solid transparent;
        }
        .timeline-item:nth-child(odd) .timeline-content::after {
          right: -20px;
          border-left-color: var(--border-color);
        }
        .timeline-item:nth-child(even) .timeline-content::after {
          left: -20px;
          border-right-color: var(--border-color);
        }
        .timeline-year {
          background: var(--accent-color);
          color: var(--primary-color);
          font-weight: bold;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          position: absolute;
          top: 1.5rem;
          font-size: 0.8rem;
        }
        .timeline-item:nth-child(odd) .timeline-year {
          left: calc(100% + 45px);
        }
        .timeline-item:nth-child(even) .timeline-year {
          right: calc(100% + 45px);
        }

        .timeline-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        /* Team Section */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 400px;
          margin: 0 auto;
        }
        .team-member-card {
          background: var(--secondary-color);
          padding: 2rem;
          border-radius: var(--border-radius-md);
          text-align: center;
          border: 1px solid var(--border-color);
        }
        .team-member-image-wrapper {
          width: 140px;
          height: 140px;
          margin: 0 auto 1.5rem auto;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid var(--accent-color);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .team-member-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .team-member-name {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
        }
        .team-member-role {
          color: var(--accent-color);
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .team-member-bio {
          font-size: 0.95rem;
        }

        /* CTA Section */
        .cta-button {
          display: inline-block;
          background: var(--primary-color);
          color: var(--text-light);
          padding: 1rem 2.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }
        .cta-button:hover {
          background: var(--accent-color);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          .timeline::before {
            left: 20px;
            transform: none;
          }
          .timeline-item:nth-child(odd) .timeline-content,
          .timeline-item:nth-child(even) .timeline-content {
            width: 100%;
            left: 0;
            padding-left: 40px;
          }
          .timeline-item:nth-child(odd) .timeline-content::after,
          .timeline-item:nth-child(even) .timeline-content::after {
            left: -20px;
            border-right-color: var(--border-color);
            border-left-color: transparent;
          }
          .timeline-item:nth-child(odd) .timeline-year,
          .timeline-item:nth-child(even) .timeline-year {
            left: 0;
            top: -1.25rem;
            transform: translateX(-50%);
            left: 20px;
          }
          .timeline-content {
             margin-left: 30px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default AboutUs;
