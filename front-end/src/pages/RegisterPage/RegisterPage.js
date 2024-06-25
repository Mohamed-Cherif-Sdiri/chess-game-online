import { useState } from 'react';
import LoginImage from '../../assets/images/LoginImg.png';
import googleIcon from '../../assets/images/googleIcon.png';
import hideIcon from '../../assets/images/hide.svg';
import showIcon from '../../assets/images/show.svg';
import Navbar from '../../components/Navbar/Navbar';
import './RegisterPage.css';

export default function RegisterPage() {
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
   
      return;
    }

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
                <label className="register-email">Name*</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="username"
                  className="register-input-field"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label className="register-email">Email*</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="username"
                  className="register-input-field"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label className="register-password">Password*</label>
                <div className="register-password-container">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a password"
                    autoComplete="current-password"
                    className="register-input-field"
                    name="password"
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
                  <button type="submit" disabled={!passwordValid}>Create account</button>
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
            alt="Image description"
            className="register-image"
          />
        </div>
      </div>
    </>
  );
}
