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
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center min-h-20 gap-5">
        <div className="logo">
          <Link
            to="/"
            onClick={closeMenu}
            className="no-underline text-secondary"
          >
            <h1 className="m-0 text-2xl font-bold text-primary font-serif">
              {t("header.title")}
            </h1>
            <p className="m-0 text-sm text-gray-text italic">
              {t("header.subtitle")}
            </p>
          </Link>
        </div>

        <nav
          className={`flex items-center md:static md:flex-row md:justify-start md:items-center md:w-auto md:h-auto md:bg-transparent md:shadow-none ${
            isMenuOpen
              ? "fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-white flex-col justify-start items-center transition-all duration-300 ease-in-out shadow-lg z-40"
              : "fixed top-20 -left-full w-full h-[calc(100vh-80px)] bg-white flex-col justify-start items-center transition-all duration-300 ease-in-out shadow-lg z-40"
          } md:relative md:top-auto md:left-auto md:w-auto md:h-auto md:bg-transparent md:shadow-none`}
        >
          <ul className="flex list-none m-0 p-0 gap-8 md:flex-row md:gap-8 md:w-auto md:p-0 flex-col gap-0 w-full p-5">
            <li
              className={`${
                isActive("/") ? "text-primary" : "text-secondary"
              } md:w-auto md:text-center md:border-b-0 w-full text-center border-b border-gray-100`}
            >
              <Link
                to="/"
                onClick={closeMenu}
                className="no-underline font-medium text-base py-2.5 relative transition-colors duration-300 hover:text-primary block py-4 px-5 text-lg md:py-2.5 md:px-0 md:text-base group"
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
              className={`${
                isActive("/about") ? "text-primary" : "text-secondary"
              } md:w-auto md:text-center md:border-b-0 w-full text-center border-b border-gray-100`}
            >
              <Link
                to="/about"
                onClick={closeMenu}
                className="no-underline font-medium text-base py-2.5 relative transition-colors duration-300 hover:text-primary block py-4 px-5 text-lg md:py-2.5 md:px-0 md:text-base group"
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
              className={`${
                isActive("/projects") ? "text-primary" : "text-secondary"
              } md:w-auto md:text-center md:border-b-0 w-full text-center border-b border-gray-100`}
            >
              <Link
                to="/projects"
                onClick={closeMenu}
                className="no-underline font-medium text-base py-2.5 relative transition-colors duration-300 hover:text-primary block py-4 px-5 text-lg md:py-2.5 md:px-0 md:text-base group"
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
              className={`${
                isActive("/team") ? "text-primary" : "text-secondary"
              } md:w-auto md:text-center md:border-b-0 w-full text-center border-b border-gray-100`}
            >
              <Link
                to="/team"
                onClick={closeMenu}
                className="no-underline font-medium text-base py-2.5 relative transition-colors duration-300 hover:text-primary block py-4 px-5 text-lg md:py-2.5 md:px-0 md:text-base group"
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
              className={`${
                isActive("/trainings") ? "text-primary" : "text-secondary"
              } md:w-auto md:text-center md:border-b-0 w-full text-center border-b border-gray-100`}
            >
              <Link
                to="/trainings"
                onClick={closeMenu}
                className="no-underline font-medium text-base py-2.5 relative transition-colors duration-300 hover:text-primary block py-4 px-5 text-lg md:py-2.5 md:px-0 md:text-base group"
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
              className={`${
                isActive("/publications") ? "text-primary" : "text-secondary"
              } md:w-auto md:text-center md:border-b-0 w-full text-center border-b border-gray-100`}
            >
              <Link
                to="/publications"
                onClick={closeMenu}
                className="no-underline font-medium text-base py-2.5 relative transition-colors duration-300 hover:text-primary block py-4 px-5 text-lg md:py-2.5 md:px-0 md:text-base group"
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
              className={`${
                isActive("/news") ? "text-primary" : "text-secondary"
              } md:w-auto md:text-center md:border-b-0 w-full text-center border-b border-gray-100`}
            >
              <Link
                to="/news"
                onClick={closeMenu}
                className="no-underline font-medium text-base py-2.5 relative transition-colors duration-300 hover:text-primary block py-4 px-5 text-lg md:py-2.5 md:px-0 md:text-base group"
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
              className={`${
                isActive("/blog") ? "text-primary" : "text-secondary"
              } md:w-auto md:text-center md:border-b-0 w-full text-center border-b border-gray-100`}
            >
              <Link
                to="/blog"
                onClick={closeMenu}
                className="no-underline font-medium text-base py-2.5 relative transition-colors duration-300 hover:text-primary block py-4 px-5 text-lg md:py-2.5 md:px-0 md:text-base group"
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
              className={`${
                isActive("/contact") ? "text-primary" : "text-secondary"
              } md:w-auto md:text-center md:border-b-0 w-full text-center border-b border-gray-100`}
            >
              <Link
                to="/contact"
                onClick={closeMenu}
                className="no-underline font-medium text-base py-2.5 relative transition-colors duration-300 hover:text-primary block py-4 px-5 text-lg md:py-2.5 md:px-0 md:text-base group"
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
              className={`${
                isActive("/admin") ? "text-primary" : "text-secondary"
              } md:w-auto md:text-center md:border-b-0 w-full text-center border-b border-gray-100`}
            >
              <Link
                to="/admin"
                onClick={closeMenu}
                className="no-underline font-medium text-base py-2.5 relative transition-colors duration-300 hover:text-primary block py-4 px-5 text-lg md:py-2.5 md:px-0 md:text-base group"
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

        <LanguageSwitcher />

        <div
          className="hidden flex-col cursor-pointer p-2.5 md:hidden"
          onClick={toggleMenu}
        >
          <span
            className={`w-6 h-0.5 bg-secondary my-0.5 transition-all duration-300 rounded-sm ${
              isMenuOpen
                ? "rotate-[-45deg] translate-x-[-5px] translate-y-[6px]"
                : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-secondary my-0.5 transition-all duration-300 rounded-sm ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-secondary my-0.5 transition-all duration-300 rounded-sm ${
              isMenuOpen
                ? "rotate-[45deg] translate-x-[-5px] translate-y-[-6px]"
                : ""
            }`}
          ></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
