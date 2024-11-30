import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import '../styles/LoginPage.css';
import '../images/Humble hands.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();

    const credentials = { email, password };

    try {
      const response = await fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.text(); // Assuming login returns a text response
        alert(data); // Display welcome message or success notification
        navigate('/'); // Redirect to home page
      } else {
        alert('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <img src="Humble hands.png" alt="DonateKart" className="login-logo" />
        </div>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email ID or Mobile
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
            <a href="#" className="reset-password">
              Reset Password
            </a>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="login-footer">
          <p>
            By continuing, I agree to the Terms of Use, Privacy Policy, and receiving SMS and WhatsApp communication.
          </p>
        </div>
      </div>
      <div className="register-link">
        <p>
          New to Donatekart? <a href="/register">Register now</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
