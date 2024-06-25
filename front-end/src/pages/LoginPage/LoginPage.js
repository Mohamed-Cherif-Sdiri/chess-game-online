
import React, { useState } from 'react';
import googleIcon from '../../assets/images/googleIcon.png';
import hideIcon from '../../assets/images/hide.svg';
import showIcon from '../../assets/images/show.svg';
import Navbar from '../../components/Navbar/Navbar';
import './LoginPage.css';
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <>
      <Navbar />
      <div className="login-page">
        <div className="login-info">
          <div className="login-title">
            <h1>Log in to your account</h1>
            <span>Welcome back! Please enter your details.</span>
          </div>
          <form id="login-form" onSubmit={handleSubmit}>
            <div className="login-form-container">
              <label className="login-email">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                autoComplete="username"
                className="login-input-field"
                name="email"
                onChange={handleChange}
                value={formData.email}
              />
              <label className="login-password">Password</label>
              <div className="login-password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="login-input-field"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                />
                <button
                  type="button"
                  className="login-toggle-password"
                  onClick={togglePasswordVisibility}
                >
                  <img
                    src={showPassword ? hideIcon : showIcon}
                    alt="Toggle Password Visibility"
                  />
                </button>
              </div>
              <div className="login-checkbox-container">
                <div className="login-checkbox-wrapper">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                  />
                  <label htmlFor="remember">Remember for 30 days</label>
                </div>
                <a href="/">Forgot password?</a>
              </div>
              <div className="login-btn-container">
                <button type="submit">Sign in</button>
                <button type="button" className="login-google-button">
                  <img
                    src={googleIcon}
                    alt="Google icon"
                    className="login-google-icon"
                  />
                  Sign in with Google
                </button>
                <span>
                  Don't have an account? <a href="/">Sign up</a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
