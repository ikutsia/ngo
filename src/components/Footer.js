import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Georgian Education Initiative</h3>
            <p>Empowering education and fostering academic excellence across Georgia through innovative programs, research, and community engagement.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Our Projects</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/trainings">Trainings</Link></li>
              <li><Link to="/publications">Publications</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/news">Latest News</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/publications">Research Papers</Link></li>
              <li><Link to="/trainings">Training Materials</Link></li>
              <li><Link to="/contact">Get Involved</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Information</h4>
            <div className="contact-info">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                123 Education Street<br />
                Tbilisi, Georgia 0101
              </p>
              <p>
                <i className="fas fa-phone"></i>
                +995 32 123 4567
              </p>
              <p>
                <i className="fas fa-envelope"></i>
                info@georgianeducation.ge
              </p>
              <p>
                <i className="fas fa-clock"></i>
                Mon-Fri: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Georgian Education Initiative. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/accessibility">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 