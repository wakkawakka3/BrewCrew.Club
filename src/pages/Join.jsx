import React, { useState } from "react";
import Layout from "../components/Layout";

// Enhanced Icons
const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const LockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <circle cx="12" cy="16" r="1"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const CoffeeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="1" x2="6" y2="4"/>
    <line x1="10" y1="1" x2="10" y2="4"/>
    <line x1="14" y1="1" x2="14" y2="4"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20,6 9,17 4,12"/>
  </svg>
);

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    city: '',
    interests: []
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cities = [
    'Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Kolkata', 
    'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Surat',
    'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane',
    'Bhopal', 'Visakhapatnam', 'Pimpri-Chinchwad', 'Patna', 'Vadodara'
  ];

  const interests = [
    'Coffee Brewing', 'Café Hopping', 'Coffee Reviews', 
    'Latte Art', 'Coffee Roasting', 'Specialty Coffee',
    'Coffee Events', 'Coffee Education', 'Coffee Trading'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.city) {
      newErrors.city = 'Please select your city';
    }

    if (formData.interests.length === 0) {
      newErrors.interests = 'Please select at least one interest';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert("Welcome to BrewCrew Club! 🎉");
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <Layout>
      <div className="join-page">
        {/* Enhanced Hero Section */}
        <header className="join-hero">
          <div className="hero-background">
            <div className="hero-pattern"></div>
          </div>
          <div className="container hero-content">
            <div className="hero-badge">
              <CoffeeIcon />
              <span>Join the Community</span>
            </div>
            <h1 className="hero-title">
              <span className="gradient-text">Welcome to</span> BrewCrew Club
            </h1>
            <p className="hero-description">
              Discover amazing cafés, earn rewards, and share your coffee story with
            India's first coffee-only community.
          </p>
          </div>
        </header>

        {/* Enhanced Form Section */}
        <main className="form-section">
          <div className="container">
            <div className="form-container">
              <div className="form-header">
                <h2>Create Your Account</h2>
                <p>Join thousands of coffee lovers across India</p>
              </div>

          <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form-row">
            <div className="form-group">
                    <label htmlFor="name">
                      <UserIcon />
                      Full Name
                    </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={errors.name ? 'error' : ''}
                required
              />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
            </div>

                <div className="form-row">
            <div className="form-group">
                    <label htmlFor="email">
                      <MailIcon />
                      Email Address
                    </label>
              <input
                type="email"
                id="email"
                name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? 'error' : ''}
                required
              />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
            </div>

                <div className="form-row">
            <div className="form-group">
                    <label htmlFor="password">
                      <LockIcon />
                      Password
                    </label>
              <input
                type="password"
                id="password"
                name="password"
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={errors.password ? 'error' : ''}
                      required
                    />
                    {errors.password && <span className="error-message">{errors.password}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="confirmPassword">
                      <LockIcon />
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={errors.confirmPassword ? 'error' : ''}
                required
              />
                    {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={errors.city ? 'error' : ''}
                      required
                    >
                      <option value="">Select your city</option>
                      {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                    {errors.city && <span className="error-message">{errors.city}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Your Interests</label>
                    <div className="interests-grid">
                      {interests.map(interest => (
                        <button
                          key={interest}
                          type="button"
                          className={`interest-tag ${formData.interests.includes(interest) ? 'selected' : ''}`}
                          onClick={() => handleInterestToggle(interest)}
                        >
                          {formData.interests.includes(interest) && <CheckIcon />}
                          {interest}
                        </button>
                      ))}
                    </div>
                    {errors.interests && <span className="error-message">{errors.interests}</span>}
                  </div>
            </div>

                <button 
                  type="submit" 
                  className={`cta-button ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      <CoffeeIcon />
                      Join BrewCrew Club
                    </>
                  )}
            </button>
          </form>

              <div className="form-footer">
          <p className="privacy-text">
                  By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>. 
                  We'll never spam you or sell your data.
                </p>
                <p className="login-text">
                  Already have an account? <a href="#">Sign in</a>
                </p>
              </div>
            </div>
        </div>
      </main>
      </div>
      <style jsx>{`
        /* Premium Apple-like Design System */
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

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Hero Section */
        .join-hero {
          position: relative;
          padding: 8rem 0 6rem;
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
          background-image: radial-gradient(circle at 20% 80%, rgba(184, 134, 11, 0.05) 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, rgba(184, 134, 11, 0.03) 0%, transparent 50%);
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
          background: rgba(184, 134, 11, 0.1);
          color: #b8860b;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .gradient-text {
          background: linear-gradient(135deg, #b8860b, #f4d03f);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.25rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Form Section */
        .form-section {
          padding: 6rem 0;
          background: #f8f9fa;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .form-container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          padding: 3rem;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 1px solid #f0f0f0;
        }

        .form-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .form-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }

        .form-header p {
          font-size: 1.1rem;
          color: #666;
        }

        /* Form Styles */
        .signup-form {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .form-row {
          display: flex;
          flex-direction: column;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          font-weight: 600;
          color: #333;
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group select {
          width: 100%;
          padding: 1rem 1.5rem;
          border: 2px solid #f0f0f0;
          border-radius: 12px;
          font-size: 1rem;
          background: #f8f9fa;
          transition: all 0.3s ease;
          color: #333;
        }

        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #b8860b;
          background: white;
          box-shadow: 0 0 0 4px rgba(184, 134, 11, 0.1);
        }

        .form-group input.error,
        .form-group select.error {
          border-color: #e53e3e;
          background: #fef2f2;
        }

        .error-message {
          color: #e53e3e;
          font-size: 0.85rem;
          margin-top: 0.5rem;
          font-weight: 500;
        }

        /* Interests Grid */
        .interests-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .interest-tag {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border: 2px solid #f0f0f0;
          border-radius: 50px;
          background: #f8f9fa;
          color: #666;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .interest-tag:hover {
          border-color: #b8860b;
          background: rgba(184, 134, 11, 0.05);
          color: #b8860b;
        }

        .interest-tag.selected {
          background: linear-gradient(135deg, #b8860b, #f4d03f);
          color: white;
          border-color: #b8860b;
        }

        /* CTA Button */
        .cta-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1.25rem 2rem;
          background: linear-gradient(135deg, #b8860b, #f4d03f);
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .cta-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(184, 134, 11, 0.3);
        }

        .cta-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .cta-button.loading {
          background: #999;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        /* Form Footer */
        .form-footer {
          margin-top: 3rem;
          text-align: center;
        }

        .privacy-text {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .privacy-text a {
          color: #b8860b;
          text-decoration: none;
          font-weight: 600;
        }

        .privacy-text a:hover {
          text-decoration: underline;
        }

        .login-text {
          font-size: 1rem;
          color: #333;
        }

        .login-text a {
          color: #b8860b;
          text-decoration: none;
          font-weight: 600;
        }

        .login-text a:hover {
          text-decoration: underline;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .form-container {
            padding: 2rem;
            margin: 0 1rem;
          }

          .form-header h2 {
            font-size: 2rem;
          }

          .interests-grid {
            grid-template-columns: 1fr;
          }

          .cta-button {
            padding: 1rem 1.5rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .form-container {
            padding: 1.5rem;
          }

          .form-group input,
          .form-group select {
            padding: 0.875rem 1rem;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Join;
