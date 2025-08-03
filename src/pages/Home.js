import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const featuredProjects = t("home.projects", { returnObjects: true }).map(
    (project, index) => ({
      id: index + 1,
      ...project,
      image: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      ][index],
    })
  );

  const stats = t("home.stats", { returnObjects: true });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-10"></div>
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-serif">
              {t("home.hero.title")}
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              {t("home.hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-5">
              <Link
                to="/projects"
                className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-transparent hover:text-white hover:border-2 hover:border-white transform hover:-translate-y-1"
              >
                {t("home.hero.exploreProjects")}
              </Link>
              <Link
                to="/about"
                className="inline-block px-8 py-4 bg-transparent text-white border-2 border-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-primary transform hover:-translate-y-1"
              >
                {t("home.hero.learnMore")}
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-72 h-72 bg-white bg-opacity-10 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white border-opacity-20">
              <i className="fas fa-graduation-cap text-6xl text-white text-opacity-80"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-light py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl font-bold text-primary mb-3">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-5 font-serif">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Discover our innovative educational initiatives that are making a
              difference across Georgia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-3"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-text leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <Link
                    to={`/projects/${project.id}`}
                    className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
                  >
                    {t("home.learnMore")} <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/projects"
              className="inline-block px-8 py-4 bg-transparent text-primary border-2 border-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary hover:text-white"
            >
              {t("home.viewAllProjects")}
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary-light text-white py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 font-serif">
                {t('home.mission.title')}
              </h2>
              <p className="text-xl leading-relaxed opacity-90 mb-12">
                {t('home.mission.description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
                {t('home.mission.values', { returnObjects: true }).map((value, index) => (
                  <div key={index} className="text-center p-8">
                    <i className={`${['fas fa-lightbulb', 'fas fa-hands-helping', 'fas fa-star'][index]} text-5xl text-primary mb-5`}></i>
                    <h4 className="text-xl font-bold text-primary mb-4">
                      {value.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-light py-24 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary mb-5 font-serif">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl text-gray-text mb-10">
              {t('home.cta.description')}
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg transition-all duration-300 hover:bg-primary-dark transform hover:-translate-y-1"
              >
                {t('home.cta.button')}
              </Link>
              <Link
                to="/trainings"
                className="inline-block px-8 py-4 bg-transparent text-primary border-2 border-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary hover:text-white transform hover:-translate-y-1"
              >
                Attend Training
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
