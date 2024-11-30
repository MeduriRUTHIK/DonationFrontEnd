// src/components/HomePage.js

import React from 'react';
import '../styles/HomePage.css'; // Import the styles for HomePage
import '../images/Humble hands.png';
function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Support Shekhar’s Mission to Save Children From Injustice</h1>
        <a href="/donation" className="donate-btn">Donate Now</a>
      </div>

      {/* Featured Campaigns */}
      <div className="campaigns">
        <h2>Featured Campaigns</h2>
        <div className="campaign-cards">
          <div className="campaign-card">
            <img src="your-image-url.jpg" alt="campaign1" />
            <p>A Simple Blanket Can Be A Lifeline For The Homeless</p>
            <a href="/donate" className="donate-btn">Donate Now</a>
          </div>
          <div className="campaign-card">
            <img src="your-image-url.jpg" alt="campaign2" />
            <p>Speak Up For Her</p>
            <a href="/donate" className="donate-btn">Donate Now</a>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories">
        <h2>Categories</h2>
        <div className="category-cards">
          <div className="category-card">
            <img src="your-image-url.jpg" alt="category1" />
            <p>Animals</p>
          </div>
          <div className="category-card">
            <img src="your-image-url.jpg" alt="category2" />
            <p>Children</p>
          </div>
          <div className="category-card">
            <img src="your-image-url.jpg" alt="category3" />
            <p>Medical</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="how-it-works">
        <h2>How It Works?</h2>
        <div className="how-it-works-cards">
          <div className="how-card">
            <h3>Choose A Cause</h3>
            <p>Select campaigns and causes to donate to.</p>
          </div>
          <div className="how-card">
            <h3>Select Products</h3>
            <p>Choose the products you want to donate.</p>
          </div>
          <div className="how-card">
            <h3>Order Processing</h3>
            <p>Complete the checkout process to donate.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Great platform to make a difference!" - Donor</p>
          </div>
          <div className="testimonial-card">
            <p>"Such a helpful initiative!" - NGO</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <p>© 2024 DonateKart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
