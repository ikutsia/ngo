import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gradient-to-br from-secondary to-secondary-light text-white py-15 pb-5 mt-auto">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="footer-section">
            <h3 className="text-primary text-2xl mb-4 font-serif">{t('footer.title')}</h3>
            <p className="leading-relaxed text-gray-300 mb-5">{t('footer.description')}</p>
            <div className="flex gap-4 mt-5">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center justify-center w-10 h-10 bg-secondary-light text-white rounded-full no-underline transition-all duration-300 hover:bg-primary hover:-translate-y-0.5">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="flex items-center justify-center w-10 h-10 bg-secondary-light text-white rounded-full no-underline transition-all duration-300 hover:bg-primary hover:-translate-y-0.5">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center justify-center w-10 h-10 bg-secondary-light text-white rounded-full no-underline transition-all duration-300 hover:bg-primary hover:-translate-y-0.5">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex items-center justify-center w-10 h-10 bg-secondary-light text-white rounded-full no-underline transition-all duration-300 hover:bg-primary hover:-translate-y-0.5">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="text-primary text-xl mb-4 font-semibold">{t('footer.quickLinks')}</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-2.5"><Link to="/about" className="text-gray-300 no-underline transition-colors duration-300 hover:text-primary">{t('footer.links.about')}</Link></li>
              <li className="mb-2.5"><Link to="/projects" className="text-gray-300 no-underline transition-colors duration-300 hover:text-primary">{t('footer.links.projects')}</Link></li>
              <li className="mb-2.5"><Link to="/team" className="text-gray-300 no-underline transition-colors duration-300 hover:text-primary">{t('footer.links.team')}</Link></li>
              <li className="mb-2.5"><Link to="/trainings" className="text-gray-300 no-underline transition-colors duration-300 hover:text-primary">{t('footer.links.trainings')}</Link></li>
              <li className="mb-2.5"><Link to="/publications" className="text-gray-300 no-underline transition-colors duration-300 hover:text-primary">{t('footer.links.publications')}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="text-primary text-xl mb-4 font-semibold">{t('footer.resources')}</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-2.5"><Link to="/news" className="text-gray-300 no-underline transition-colors duration-300 hover:text-primary">{t('footer.links.news')}</Link></li>
              <li className="mb-2.5"><Link to="/blog" className="text-gray-300 no-underline transition-colors duration-300 hover:text-primary">{t('footer.links.blog')}</Link></li>
              <li className="mb-2.5"><Link to="/publications" className="text-gray-300 no-underline transition-colors duration-300 hover:text-primary">{t('footer.links.researchPapers')}</Link></li>
              <li className="mb-2.5"><Link to="/trainings" className="text-gray-300 no-underline transition-colors duration-300 hover:text-primary">{t('footer.links.trainingMaterials')}</Link></li>
              <li className="mb-2.5"><Link to="/contact" className="text-gray-300 no-underline transition-colors duration-300 hover:text-primary">{t('footer.links.getInvolved')}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="text-primary text-xl mb-4 font-semibold">{t('footer.contactInfo')}</h4>
            <div className="contact-info">
              <p className="flex items-start gap-2.5 mb-4 text-gray-300">
                <i className="fas fa-map-marker-alt text-primary mt-1 min-w-4"></i>
                {t('footer.contact.address')}<br />
                {t('footer.contact.city')}
              </p>
              <p className="flex items-start gap-2.5 mb-4 text-gray-300">
                <i className="fas fa-phone text-primary mt-1 min-w-4"></i>
                {t('footer.contact.phone')}
              </p>
              <p className="flex items-start gap-2.5 mb-4 text-gray-300">
                <i className="fas fa-envelope text-primary mt-1 min-w-4"></i>
                {t('footer.contact.email')}
              </p>
              <p className="flex items-start gap-2.5 mb-4 text-gray-300">
                <i className="fas fa-clock text-primary mt-1 min-w-4"></i>
                {t('footer.contact.hours')}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-light pt-5">
          <div className="flex justify-between items-center flex-wrap gap-5">
            <p className="text-gray-400 m-0">{t('footer.copyright')}</p>
            <div className="flex gap-5">
              <Link to="/privacy" className="text-gray-400 no-underline text-sm transition-colors duration-300 hover:text-primary">{t('footer.legal.privacy')}</Link>
              <Link to="/terms" className="text-gray-400 no-underline text-sm transition-colors duration-300 hover:text-primary">{t('footer.legal.terms')}</Link>
              <Link to="/accessibility" className="text-gray-400 no-underline text-sm transition-colors duration-300 hover:text-primary">{t('footer.legal.accessibility')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 