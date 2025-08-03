import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t('footer.title')}</h3>
            <p>{t('footer.description')}</p>
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
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li><Link to="/about">{t('footer.links.about')}</Link></li>
              <li><Link to="/projects">{t('footer.links.projects')}</Link></li>
              <li><Link to="/team">{t('footer.links.team')}</Link></li>
              <li><Link to="/trainings">{t('footer.links.trainings')}</Link></li>
              <li><Link to="/publications">{t('footer.links.publications')}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('footer.resources')}</h4>
            <ul>
              <li><Link to="/news">{t('footer.links.news')}</Link></li>
              <li><Link to="/blog">{t('footer.links.blog')}</Link></li>
              <li><Link to="/publications">{t('footer.links.researchPapers')}</Link></li>
              <li><Link to="/trainings">{t('footer.links.trainingMaterials')}</Link></li>
              <li><Link to="/contact">{t('footer.links.getInvolved')}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('footer.contactInfo')}</h4>
                          <div className="contact-info">
                <p>
                  <i className="fas fa-map-marker-alt"></i>
                  {t('footer.contact.address')}<br />
                  {t('footer.contact.city')}
                </p>
                <p>
                  <i className="fas fa-phone"></i>
                  {t('footer.contact.phone')}
                </p>
                <p>
                  <i className="fas fa-envelope"></i>
                  {t('footer.contact.email')}
                </p>
                <p>
                  <i className="fas fa-clock"></i>
                  {t('footer.contact.hours')}
                </p>
              </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>{t('footer.copyright')}</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">{t('footer.legal.privacy')}</Link>
              <Link to="/terms">{t('footer.legal.terms')}</Link>
              <Link to="/accessibility">{t('footer.legal.accessibility')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 