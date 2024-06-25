import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Assurez-vous d'avoir le CSS correspondant

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1 className="navbar-title">White Queen Chess Club</h1>
      <ul className="navbar-links flex">
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
