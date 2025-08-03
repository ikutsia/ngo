import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

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
            <h1>{t("header.title")}</h1>
            <p>{t("header.subtitle")}</p>
          </Link>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li className={isActive("/") ? "active" : ""}>
              <Link to="/" onClick={closeMenu}>
                {t("navigation.home")}
              </Link>
            </li>
            <li className={isActive("/about") ? "active" : ""}>
              <Link to="/about" onClick={closeMenu}>
                {t("navigation.about")}
              </Link>
            </li>
            <li className={isActive("/projects") ? "active" : ""}>
              <Link to="/projects" onClick={closeMenu}>
                {t("navigation.projects")}
              </Link>
            </li>
            <li className={isActive("/team") ? "active" : ""}>
              <Link to="/team" onClick={closeMenu}>
                {t("navigation.team")}
              </Link>
            </li>
            <li className={isActive("/trainings") ? "active" : ""}>
              <Link to="/trainings" onClick={closeMenu}>
                {t("navigation.trainings")}
              </Link>
            </li>
            <li className={isActive("/publications") ? "active" : ""}>
              <Link to="/publications" onClick={closeMenu}>
                {t("navigation.publications")}
              </Link>
            </li>
            <li className={isActive("/news") ? "active" : ""}>
              <Link to="/news" onClick={closeMenu}>
                {t("navigation.news")}
              </Link>
            </li>
            <li className={isActive("/blog") ? "active" : ""}>
              <Link to="/blog" onClick={closeMenu}>
                {t("navigation.blog")}
              </Link>
            </li>
            <li className={isActive("/contact") ? "active" : ""}>
              <Link to="/contact" onClick={closeMenu}>
                {t("navigation.contact")}
              </Link>
            </li>
          </ul>
        </nav>

        <LanguageSwitcher />
        
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? "active" : ""}`}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
