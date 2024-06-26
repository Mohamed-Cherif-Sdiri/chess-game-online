import React, { useState } from 'react';
import LoginImage from '../../assets/images/LoginImg.png';
import googleIcon from '../../assets/images/googleIcon.png';
import hideIcon from '../../assets/images/hide.svg';
import showIcon from '../../assets/images/show.svg';
import Navbar from '../../components/Navbar/Navbar';
import './RegisterPage.css';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [passwordValid, setPasswordValid] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === 'password') {
      setPasswordValid(value.length >= 8);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      // Gérer ici les cas où le mot de passe est trop court
      return;
    }

    // Envoyer le formulaire ou effectuer d'autres actions nécessaires
    console.log('Form data:', formData);
  };

  return (
    <>
      <Navbar />
      <div className="register-page">
        <div className="register-info">
          <div className="register-title">
            <h1>Register</h1>
          </div>
          <form id="register-form" onSubmit={handleSubmit}>
            <div className="register-content">
              <div className="register-form-container">
                <label htmlFor="name" className="register-label">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  autoComplete="username"
                  className="register-input-field"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email" className="register-label">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="username"
                  className="register-input-field"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="password" className="register-label">
                  Password*
                </label>
                <div className="register-password-container">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="Create a password"
                    autoComplete="new-password"
                    className="register-input-field"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="register-toggle-password"
                    onClick={togglePasswordVisibility}
                  >
                    <img
                      src={showPassword ? hideIcon : showIcon}
                      alt="Toggle Password Visibility"
                    />
                  </button>
                </div>
                <span className={`condition-characters ${passwordValid ? 'valid' : 'invalid'}`}>
                  {passwordValid ? 'Must be at least 8 characters' : 'Password must be at least 8 characters'}
                </span>
                <div className="register-btn-container">
                  <button type="submit" disabled={!passwordValid}>
                    Create account
                  </button>
                  <button type="button" className="register-google-button">
                    <img
                      src={googleIcon}
                      alt="Google icon"
                      className="register-google-icon"
                    />
                    Sign in with Google
                  </button>
                  <span>
                    Already have an account? <a href="/">Sign in</a>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="register-image-container">
          <img
            src={LoginImage}
            alt="Login Image"
            className="register-image"
          />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
