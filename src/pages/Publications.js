import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Publications = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = t("publications.categories", { returnObjects: true });
  const publications = t("publications.publicationsList", {
    returnObjects: true,
  }).map((publication, index) => ({
    ...publication,
    pdfUrl: "#",
    image: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    ][index],
  }));

  const filteredPublications =
    activeCategory === "all"
      ? publications
      : publications.filter((pub) => pub.category === activeCategory);

  const featuredStats = t("publications.featuredPublication.stats", {
    returnObjects: true,
  });
  const researchAreas = t("publications.researchAreas.areas", {
    returnObjects: true,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 font-serif">
              {t("publications.hero.title")}
            </h1>
            <p className="text-xl leading-relaxed opacity-90 max-w-2xl mx-auto">
              {t("publications.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-gray-light py-10 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-3 border-2 border-primary rounded-full font-semibold transition-all duration-300 hover:bg-primary hover:text-white transform hover:-translate-y-1 ${
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-transparent text-primary"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPublications.map((publication) => (
              <div
                key={publication.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-3 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={publication.image}
                    alt={publication.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold capitalize">
                    {publication.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-secondary mb-3 leading-tight">
                    {publication.title}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-1">
                    By {publication.authors}
                  </p>
                  <p className="text-gray-text text-xs mb-4">
                    {publication.date}
                  </p>
                  <p className="text-gray-text leading-relaxed text-sm mb-6">
                    {publication.description}
                  </p>
                  <a
                    href={publication.pdfUrl}
                    className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-dark text-sm"
                  >
                    <i className="fas fa-download"></i>
                    {t("publications.downloadPDF")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publication */}
      <section className="bg-gray-light py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary font-serif">
                {t("publications.featuredPublication.title")}
              </h2>
              <h3 className="text-2xl font-bold text-secondary leading-tight">
                {t("publications.featuredPublication.publicationTitle")}
              </h3>
              <p className="text-gray-text leading-relaxed text-lg">
                {t("publications.featuredPublication.description")}
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {featuredStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <span className="block text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </span>
                    <span className="text-gray-text text-sm font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="/publications/digital-literacy-impact"
                className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg transition-all duration-300 hover:bg-primary-dark transform hover:-translate-y-1"
              >
                {t("publications.featuredPublication.readFullReport")}
              </a>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Featured Publication"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-5 font-serif">
              {t("publications.researchAreas.title")}
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              {t("publications.researchAreas.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <i
                    className={`fas ${
                      index === 0
                        ? "fa-laptop"
                        : index === 1
                        ? "fa-chalkboard-teacher"
                        : index === 2
                        ? "fa-users"
                        : "fa-flask"
                    } text-3xl text-white`}
                  ></i>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-text leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;
