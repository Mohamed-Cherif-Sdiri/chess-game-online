import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png'; // Importez votre logo depuis les assets
import './Navbar.css'; // Assurez-vous d'avoir le CSS correspondant

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo" className="navbar-logo-img" />
      </Link>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
      <div className="navbar-buttons">
        <Link 
          to="/login" 
          className={`navbar-button ${location.pathname === '/login' ? 'active' : ''}`}
        >
          Sign In
        </Link>
        <Link 
          to="/register" 
          className={`navbar-button ${location.pathname === '/register' ? 'active' : ''}`}
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

