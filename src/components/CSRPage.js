import React from 'react';
import '../styles/CSRPage.css';

const CSRPage = () => {
  return (
    <div className="csr-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Disaster Relief Response</h1>
          <p>Rebuilding Lives, Restoring Communities</p>
          <button className="cta-button">Join Donatekart - Support Communities in Need</button>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-card">
          <h2>Empowering Communities to Rise Stronger from Crisis</h2>
          <p>
            At Donatekart, we believe in swift, effective disaster relief response. We're not just a charity; we're a movement dedicated to ensuring that when disaster strikes, communities receive the support they need to rebuild. Our approach is simple: we provide essential products directly to those affected, ensuring transparency and faster recovery.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h2>In times of need, we're the first to arrive</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>24Hrs</h3>
            <p>Understand the gravity of the disaster</p>
          </div>
          <div className="timeline-item">
            <h3>24Hrs</h3>
            <p>Procuring raw materials from our trusted list of vendors</p>
          </div>
          <div className="timeline-item">
            <h3>24Hrs</h3>
            <p>Delivery of relief materials to NGOs operating directly in disaster-affected areas</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSRPage;
