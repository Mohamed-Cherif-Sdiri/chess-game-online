// src/pages/LoginPage/LoginPage.js
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './LoginPage.css'; // Assurez-vous d'avoir le CSS correspondant

const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-form">
          <h1>Sign In</h1>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="btn">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


