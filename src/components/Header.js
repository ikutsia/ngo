import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <h1>Georgian Education Initiative</h1>
            <p>Empowering Education in Georgia</p>
          </Link>
        </div>
        
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className={isActive('/') ? 'active' : ''}>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li className={isActive('/about') ? 'active' : ''}>
              <Link to="/about" onClick={closeMenu}>About Us</Link>
            </li>
            <li className={isActive('/projects') ? 'active' : ''}>
              <Link to="/projects" onClick={closeMenu}>Projects</Link>
            </li>
            <li className={isActive('/team') ? 'active' : ''}>
              <Link to="/team" onClick={closeMenu}>Our Team</Link>
            </li>
            <li className={isActive('/trainings') ? 'active' : ''}>
              <Link to="/trainings" onClick={closeMenu}>Trainings</Link>
            </li>
            <li className={isActive('/publications') ? 'active' : ''}>
              <Link to="/publications" onClick={closeMenu}>Publications</Link>
            </li>
            <li className={isActive('/news') ? 'active' : ''}>
              <Link to="/news" onClick={closeMenu}>News</Link>
            </li>
            <li className={isActive('/blog') ? 'active' : ''}>
              <Link to="/blog" onClick={closeMenu}>Blog</Link>
            </li>
            <li className={isActive('/contact') ? 'active' : ''}>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </header>
  );
};

export default Header; 