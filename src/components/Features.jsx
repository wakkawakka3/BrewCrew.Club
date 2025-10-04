import React from "react";

const CafeDiscoveryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const CoffeeCommunityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);

const RewardsProgramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
  </svg>
);

const CoffeePassIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M21.99 8c0-.55-.45-1-1-1h-1V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v2H2c-.55 0-1 .45-1 1s.45 1 1 1h1v10H2c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-1V9h1c.55 0 1-.45 1-1zM5 5h14v2H5V5zm14 14H5V9h14v10z" />
    <path d="M12 12h-2v-2h2v2zm-4 0H8v-2h2v2zm-4 0H4v-2h2v2zm12 4h-8v-2h8v2z" />
  </svg>
);

const CafeAnalyticsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
    <path d="M7 12h2v5H7zM11 7h2v10h-2zM15 14h2v3h-2z" />
  </svg>
);

const PersonalizedExperienceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const featuresData = [
  {
    icon: <CafeDiscoveryIcon />,
    title: "Café Discovery",
    description:
      "Find hidden gems and read honest reviews from passionate coffee lovers across India.",
  },
  {
    icon: <CoffeeCommunityIcon />,
    title: "Coffee Community",
    description:
      "Connect with fellow enthusiasts, share stories, and build lasting friendships over great coffee.",
  },
  {
    icon: <RewardsProgramIcon />,
    title: "Rewards Program",
    description:
      "Earn points for every visit, review, and share. Redeem for free drinks and exclusive merch.",
  },
  {
    icon: <CoffeePassIcon />,
    title: "Coffee Pass",
    description:
      "Subscribe for daily discounts, priority access, and special member-only perks at partner cafés.",
  },
  {
    icon: <CafeAnalyticsIcon />,
    title: "Café Analytics",
    description:
      "For café owners: Track visits, understand your customers, and grow your coffee business.",
  },
  {
    icon: <PersonalizedExperienceIcon />,
    title: "Personalized Experience",
    description:
      "Get recommendations based on your taste profile and discover cafés you'll absolutely love.",
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-header">
          <span className="badge">Everything You Need</span>
          <h2>
            Premium Features for <span className="highlight">Coffee Lovers</span>
          </h2>
          <p className="description">
            Discover, discuss, and dive deep into the world of specialty
            coffee. Your journey to the perfect cup starts here.
          </p>
        </div>
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .features-section {
          padding: 5rem 0;
          background-color: #fdfaf6;
          text-align: center;
        }
        .features-header {
          margin-bottom: 3rem;
        }
        .badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: #f4e9dc;
          color: #3d2b1f;
          border-radius: 999px;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        h2 {
          font-size: 2.8rem;
          color: #3d2b1f;
          margin-bottom: 1rem;
        }
        .highlight {
          color: #b8860b;
        }
        .description {
          font-size: 1.25rem;
          color: #7a6a5a;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .feature-card {
          background: #fff;
          padding: 2.5rem 2rem;
          border-radius: 12px;
          border: 1px solid #eee;
          text-align: left;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        .feature-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          background: linear-gradient(to right, #ff9966, #ff5e62);
          color: white;
        }
        .feature-card h3 {
          font-size: 1.5rem;
          color: #3d2b1f;
          margin-bottom: 0.5rem;
        }
        .feature-card p {
          color: #7a6a5a;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default Features;