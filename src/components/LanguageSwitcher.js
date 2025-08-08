import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-1.5 md:gap-1 md:ml-2.5">
      <button
        className={`border-2 border-primary py-1.5 px-2 md:py-2 md:px-3 rounded-md font-semibold text-xs md:text-sm cursor-pointer transition-all duration-300 ease-in-out min-w-8 md:min-w-10 text-center hover:bg-primary hover:text-white hover:-translate-y-0.5 ${
          i18n.language === "en"
            ? "bg-primary text-white shadow-lg"
            : "bg-transparent text-primary"
        }`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <button
        className={`border-2 border-primary py-1.5 px-2 md:py-2 md:px-3 rounded-md font-semibold text-xs md:text-sm cursor-pointer transition-all duration-300 ease-in-out min-w-8 md:min-w-10 text-center hover:bg-primary hover:text-white hover:-translate-y-0.5 ${
          i18n.language === "ka"
            ? "bg-primary text-white shadow-lg"
            : "bg-transparent text-primary"
        }`}
        onClick={() => changeLanguage("ka")}
      >
        ქარ
      </button>
    </div>
  );
};

export default LanguageSwitcher;
