import React from 'react';

const LifePage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <section style={{ padding: '20px', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#00a000' }}>100% Transparent Medical Fundraiser</h1>
        <p style={{ fontSize: '24px', color: '#006600', margin: '10px 0' }}>Healing Bharat Together</p>
        <img
          src="medical-fundraiser-illustration.png" // Replace with your actual image URL
          alt="Medical Fundraiser"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </section>

      {/* Campaign Section */}
      <section style={{ padding: '20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '20px' }}>DonateKart Life Campaigns</h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          {/* Sample Campaign Card */}
          {Array(6)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  width: '300px',
                  padding: '15px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              >
                <img
                  src={`campaign-image-${index + 1}.jpg`} // Replace with campaign images
                  alt={`Campaign ${index + 1}`}
                  style={{ width: '100%', borderRadius: '8px' }}
                />
                <h3 style={{ fontSize: '20px', margin: '10px 0' }}>
                  Campaign Title {index + 1}
                </h3>
                <p style={{ margin: '5px 0' }}>
                  <strong>₹X Raised</strong>
                </p>
                <p>Y Backers</p>
                <button
                  style={{
                    padding: '10px 15px',
                    backgroundColor: '#ff5722',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Donate Now
                </button>
              </div>
            ))}
        </div>
        <button
          style={{
            display: 'block',
            margin: '20px auto',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          View More
        </button>
      </section>

      {/* Features Section */}
      <section style={{ padding: '20px', backgroundColor: '#eef' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '20px' }}>
          Why Choose DonateKart Life Campaigns
        </h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          {[
            'Avail Tax Benefits',
            'Trustworthy & Secure',
            'Regular Updates',
            'Donate Hassle-free',
            '100% Verified Campaigns',
            'Greater Impact',
          ].map((feature, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                width: '200px',
                padding: '15px',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 style={{ fontSize: '18px' }}>{feature}</h3>
              <p>Feature description here</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <h2 style={{ fontSize: '36px' }}>Our Impact</h2>
        <p style={{ fontSize: '24px', color: '#007bff' }}>300+ Cr Raised Across India</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '20px' }}>
          <div>
            <h3 style={{ fontSize: '20px' }}>300+ Cr</h3>
            <p>Raised</p>
          </div>
          <div>
            <h3 style={{ fontSize: '20px' }}>15 Lakhs</h3>
            <p>Donor Transactions</p>
          </div>
          <div>
            <h3 style={{ fontSize: '20px' }}>1400+</h3>
            <p>NGOs Impacted</p>
          </div>
          <div>
            <h3 style={{ fontSize: '20px' }}>5000+</h3>
            <p>Campaigns</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={{ padding: '20px', backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
        <p>© 2024 DonateKart. All rights reserved.</p>
        <div>
          <a href="#" style={{ margin: '0 10px', color: 'white' }}>
            Privacy Policy
          </a>
          |
          <a href="#" style={{ margin: '0 10px', color: 'white' }}>
            Terms of Use
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LifePage;
