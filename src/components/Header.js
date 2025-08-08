import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

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
    <header className="bg-gradient-to-br from-white to-gray-light shadow-lg sticky top-0 z-50 border-b-3 border-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center min-h-16 md:min-h-20 gap-4">
        {/* Logo */}
        <div className="logo flex-shrink-0">
          <Link
            to="/"
            onClick={closeMenu}
            className="no-underline text-secondary"
          >
            <h1 className="m-0 text-xl md:text-2xl font-bold text-primary font-serif">
              {t("header.title")}
            </h1>
            <p className="m-0 text-xs md:text-sm text-gray-text italic">
              {t("header.subtitle")}
            </p>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex list-none m-0 p-0 gap-8">
            <li className={isActive("/") ? "text-primary" : "text-secondary"}>
              <Link
                to="/"
                className="no-underline font-medium text-base py-2.5 relative transition-colors duration-300 hover:text-primary group"
              >
                {t("navigation.home")}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-in-out ${
                    isActive("/") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
            <li
              className={isActive("/about") ? "text-primary" : "text-secondary"}
            >
              <Link
                to="/about"
                className="no-underline font-medium text-base py-2.5 relative transition-colors duration-300 hover:text-primary group"
              >
                {t("navigation.about")}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-in-out ${
                    isActive("/about") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
            <li
              className={
                isActive("/projects") ? "text-primary" : "text-secondary"
              }
            >
              <Link
                to="/projects"
                className="no-underline font-medium text-base py-2.5 relative transition-colors duration-300 hover:text-primary group"
              >
                {t("navigation.projects")}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-in-out ${
                    isActive("/projects") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
            <li
              className={isActive("/team") ? "text-primary" : "text-secondary"}
            >
              <Link
                to="/team"
                className="no-underline font-medium text-base py-2.5 relative transition-colors duration-300 hover:text-primary group"
              >
                {t("navigation.team")}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-in-out ${
                    isActive("/team") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
            <li
              className={
                isActive("/trainings") ? "text-primary" : "text-secondary"
              }
            >
              <Link
                to="/trainings"
                className="no-underline font-medium text-base py-2.5 relative transition-colors duration-300 hover:text-primary group"
              >
                {t("navigation.trainings")}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-in-out ${
                    isActive("/trainings") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
            <li
              className={
                isActive("/publications") ? "text-primary" : "text-secondary"
              }
            >
              <Link
                to="/publications"
                className="no-underline font-medium text-base py-2.5 relative transition-colors duration-300 hover:text-primary group"
              >
                {t("navigation.publications")}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-in-out ${
                    isActive("/publications")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
            <li
              className={isActive("/news") ? "text-primary" : "text-secondary"}
            >
              <Link
                to="/news"
                className="no-underline font-medium text-base py-2.5 relative transition-colors duration-300 hover:text-primary group"
              >
                {t("navigation.news")}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-in-out ${
                    isActive("/news") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
            <li
              className={isActive("/blog") ? "text-primary" : "text-secondary"}
            >
              <Link
                to="/blog"
                className="no-underline font-medium text-base py-2.5 relative transition-colors duration-300 hover:text-primary group"
              >
                {t("navigation.blog")}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-in-out ${
                    isActive("/blog") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
            <li
              className={
                isActive("/contact") ? "text-primary" : "text-secondary"
              }
            >
              <Link
                to="/contact"
                className="no-underline font-medium text-base py-2.5 relative transition-colors duration-300 hover:text-primary group"
              >
                {t("navigation.contact")}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-in-out ${
                    isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
            <li
              className={isActive("/admin") ? "text-primary" : "text-secondary"}
            >
              <Link
                to="/admin"
                className="no-underline font-medium text-base py-2.5 relative transition-colors duration-300 hover:text-primary group"
              >
                Admin
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-in-out ${
                    isActive("/admin") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Language Switcher */}
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        {/* Mobile Language Switcher */}
        <div className="md:hidden">
          <LanguageSwitcher />
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 p-1 rounded-md hover:bg-gray-100 transition-colors duration-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-secondary mb-1 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45 translate-y-1" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-secondary mb-1 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-secondary transition-all duration-300 ease-in-out ${
              isMenuOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={closeMenu}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute top-16 left-0 right-0 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="py-4">
            <ul className="space-y-0">
              <li className="border-b border-gray-100">
                <Link
                  to="/"
                  onClick={closeMenu}
                  className={`block px-6 py-4 text-lg font-medium transition-colors duration-200 ${
                    isActive("/")
                      ? "text-primary bg-primary bg-opacity-10"
                      : "text-secondary hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {t("navigation.home")}
                </Link>
              </li>
              <li className="border-b border-gray-100">
                <Link
                  to="/about"
                  onClick={closeMenu}
                  className={`block px-6 py-4 text-lg font-medium transition-colors duration-200 ${
                    isActive("/about")
                      ? "text-primary bg-primary bg-opacity-10"
                      : "text-secondary hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {t("navigation.about")}
                </Link>
              </li>
              <li className="border-b border-gray-100">
                <Link
                  to="/projects"
                  onClick={closeMenu}
                  className={`block px-6 py-4 text-lg font-medium transition-colors duration-200 ${
                    isActive("/projects")
                      ? "text-primary bg-primary bg-opacity-10"
                      : "text-secondary hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {t("navigation.projects")}
                </Link>
              </li>
              <li className="border-b border-gray-100">
                <Link
                  to="/team"
                  onClick={closeMenu}
                  className={`block px-6 py-4 text-lg font-medium transition-colors duration-200 ${
                    isActive("/team")
                      ? "text-primary bg-primary bg-opacity-10"
                      : "text-secondary hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {t("navigation.team")}
                </Link>
              </li>
              <li className="border-b border-gray-100">
                <Link
                  to="/trainings"
                  onClick={closeMenu}
                  className={`block px-6 py-4 text-lg font-medium transition-colors duration-200 ${
                    isActive("/trainings")
                      ? "text-primary bg-primary bg-opacity-10"
                      : "text-secondary hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {t("navigation.trainings")}
                </Link>
              </li>
              <li className="border-b border-gray-100">
                <Link
                  to="/publications"
                  onClick={closeMenu}
                  className={`block px-6 py-4 text-lg font-medium transition-colors duration-200 ${
                    isActive("/publications")
                      ? "text-primary bg-primary bg-opacity-10"
                      : "text-secondary hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {t("navigation.publications")}
                </Link>
              </li>
              <li className="border-b border-gray-100">
                <Link
                  to="/news"
                  onClick={closeMenu}
                  className={`block px-6 py-4 text-lg font-medium transition-colors duration-200 ${
                    isActive("/news")
                      ? "text-primary bg-primary bg-opacity-10"
                      : "text-secondary hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {t("navigation.news")}
                </Link>
              </li>
              <li className="border-b border-gray-100">
                <Link
                  to="/blog"
                  onClick={closeMenu}
                  className={`block px-6 py-4 text-lg font-medium transition-colors duration-200 ${
                    isActive("/blog")
                      ? "text-primary bg-primary bg-opacity-10"
                      : "text-secondary hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {t("navigation.blog")}
                </Link>
              </li>
              <li className="border-b border-gray-100">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className={`block px-6 py-4 text-lg font-medium transition-colors duration-200 ${
                    isActive("/contact")
                      ? "text-primary bg-primary bg-opacity-10"
                      : "text-secondary hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {t("navigation.contact")}
                </Link>
              </li>
              <li className="border-b border-gray-100">
                <Link
                  to="/admin"
                  onClick={closeMenu}
                  className={`block px-6 py-4 text-lg font-medium transition-colors duration-200 ${
                    isActive("/admin")
                      ? "text-primary bg-primary bg-opacity-10"
                      : "text-secondary hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  Admin
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
