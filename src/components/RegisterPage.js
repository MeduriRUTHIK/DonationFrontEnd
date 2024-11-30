import React, { useState } from 'react';
import '../styles/LoginPage.css';
import '../images/Humble hands.png';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const userData = { username, email, password };

    try {
      // Send POST request to backend for user registration
      const response = await fetch('http://localhost:8080/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert('Registration successful!');
        // Optionally, redirect to the login page
      } else {
        alert('Failed to register. Please try again.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <img src="Humble hands.png" alt="DonateKart" className="login-logo" />
        </div>
        <form onSubmit={handleRegister} className="login-form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-input"
            />
          </div>
          <button type="submit" className="login-button">Register</button>
        </form>
        <div className="login-footer">
          <p>By continuing, I agree to the Terms of Use, Privacy Policy, and receiving SMS and WhatsApp communication.</p>
        </div>
      </div>
      <div className="register-link">
        <p>Already have an account? <a href="/login">Login now</a></p>
      </div>
    </div>
  );
};

export default RegisterPage;
