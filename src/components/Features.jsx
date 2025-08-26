import React from "react";

const Features = () => {
  return (
    <section
      id="features"
      class="section fade-in"
      aria-labelledby="features-heading"
    >
      <h2 id="features-heading">Features & Benefits</h2>
      <div class="features-grid">
        <div class="feature-card">
          <h3>For Users</h3>
          <ul>
            <li>
              <strong>📍 Café Discovery:</strong> Find hidden gems and read
              honest reviews.
            </li>
            <li>
              <strong>👥 Community:</strong> Share your stories and connect with
              enthusiasts.
            </li>
            <li>
              <strong>🎟️ Rewards:</strong> Earn points and redeem them for free
              drinks.
            </li>
            <li>
              <strong>💳 Coffee Pass:</strong> Upcoming subscription for daily
              discounts.
            </li>
          </ul>
        </div>
        <div class="feature-card">
          <h3>For Cafés & Brands</h3>
          <ul>
            <li>
              <strong>📊 Dashboard:</strong> Gain valuable insights into
              customer visits and loyalty.
            </li>
            <li>
              <strong>🎯 Targeted Audience:</strong> Connect directly with
              dedicated coffee lovers.
            </li>
            <li>
              <strong>🎟️ Increase Footfall:</strong> Drive more customers with
              exclusive perks.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
