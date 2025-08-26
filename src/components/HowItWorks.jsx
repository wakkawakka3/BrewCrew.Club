import React from "react";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      class="section fade-in"
      aria-labelledby="how-it-works-heading"
    >
      <h2 id="how-it-works-heading">How It Works</h2>
      <div class="how-it-works-flow">
        <div class="flow-card">
          <h3>For Users</h3>
          <ol>
            <li>
              <strong>Sign Up:</strong> Download the app or create your account.
            </li>
            <li>
              <strong>Discover & Share:</strong> Find new cafés and post about
              your favorite brews.
            </li>
            <li>
              <strong>Earn Rewards:</strong> Get points for your activities.
            </li>
            <li>
              <strong>Redeem Perks:</strong> Use points for free drinks and
              exclusive merch.
            </li>
          </ol>
        </div>
        <div class="flow-card">
          <h3>For Cafés</h3>
          <ol>
            <li>
              <strong>Partner Up:</strong> Reach out to us to get started.
            </li>
            <li>
              <strong>List Your Café:</strong> Add your location and the perks
              you want to offer.
            </li>
            <li>
              <strong>Access Insights:</strong> Use your dashboard to track
              customer engagement.
            </li>
            <li>
              <strong>Build Loyalty:</strong> Watch your community and business
              grow.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
