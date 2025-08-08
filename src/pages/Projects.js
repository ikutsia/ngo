import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";

const Projects = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [firestoreProjects, setFirestoreProjects] = useState([]);

  const categories = [
    { id: "all", name: t("projects.categories.all") },
    { id: "digital-literacy", name: t("projects.categories.digital-literacy") },
    {
      id: "teacher-development",
      name: t("projects.categories.teacher-development"),
    },
    { id: "stem-education", name: t("projects.categories.stem-education") },
    { id: "rural-education", name: t("projects.categories.rural-education") },
    { id: "special-needs", name: t("projects.categories.special-needs") },
  ];

  // Load static projects from translations (primary source)
  const staticProjects = t("projects.projectList", { returnObjects: true }).map(
    (project, index) => ({
      id: index + 1,
      ...project,
      category: [
        "digital-literacy",
        "teacher-development",
        "stem-education",
        "rural-education",
        "special-needs",
        "stem-education",
      ][index],
      image: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      ][index],
    })
  );

  // Load additional projects from Firestore (optional enhancement)
  useEffect(() => {
    loadFirestoreProjects();
  }, []);

  const loadFirestoreProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectsList = querySnapshot.docs.map((doc) => ({
        id: `firestore-${doc.id}`,
        ...doc.data(),
      }));
      setFirestoreProjects(projectsList);
    } catch (error) {
      console.error("Error loading Firestore projects:", error);
      // Don't set fallback - just keep static projects
    }
  };

  // Combine static and Firestore projects
  const allProjects = [...staticProjects, ...firestoreProjects];

  const filteredProjects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);

  const impactStats = t("projects.impact.stats", { returnObjects: true });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 font-serif">
              {t("projects.hero.title")}
            </h1>
            <p className="text-xl leading-relaxed opacity-90 max-w-2xl mx-auto">
              {t("projects.hero.subtitle")}
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

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project) => (
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
                  <div
                    className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold text-white ${
                      project.status?.toLowerCase() === "active" ||
                      project.status?.toLowerCase() === "აქტიური"
                        ? "bg-green-500"
                        : project.status?.toLowerCase() === "completed"
                        ? "bg-blue-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {project.status || "Active"}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-text leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {project.duration && (
                      <div className="flex items-center gap-3 text-gray-text text-sm">
                        <i className="fas fa-calendar text-primary w-4"></i>
                        <span>{project.duration}</span>
                      </div>
                    )}
                    {project.participants && (
                      <div className="flex items-center gap-3 text-gray-text text-sm">
                        <i className="fas fa-users text-primary w-4"></i>
                        <span>
                          {project.participants} {t("projects.participants")}
                        </span>
                      </div>
                    )}
                    {project.location && (
                      <div className="flex items-center gap-3 text-gray-text text-sm">
                        <i className="fas fa-map-marker-alt text-primary w-4"></i>
                        <span>{project.location}</span>
                      </div>
                    )}
                  </div>
                  <button className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-dark">
                    {t("projects.learnMore")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="bg-gray-light py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-5 font-serif">
              {t("projects.impact.title")}
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              {t("projects.impact.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-10 bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
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

      {/* Get Involved */}
      <section className="bg-gradient-to-br from-secondary to-secondary-light text-white py-20 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-5 font-serif">
              {t("projects.getInvolved.title")}
            </h2>
            <p className="text-xl leading-relaxed opacity-90 max-w-2xl mx-auto mb-12">
              {t("projects.getInvolved.subtitle")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
              <div className="p-8 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm border border-white border-opacity-20">
                <i className="fas fa-hand-holding-heart text-4xl text-primary mb-6"></i>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {t("projects.getInvolved.volunteer.title")}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t("projects.getInvolved.volunteer.description")}
                </p>
              </div>
              <div className="p-8 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm border border-white border-opacity-20">
                <i className="fas fa-donate text-4xl text-primary mb-6"></i>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {t("projects.getInvolved.donate.title")}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t("projects.getInvolved.donate.description")}
                </p>
              </div>
              <div className="p-8 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm border border-white border-opacity-20">
                <i className="fas fa-handshake text-4xl text-primary mb-6"></i>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {t("projects.getInvolved.partner.title")}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t("projects.getInvolved.partner.description")}
                </p>
              </div>
            </div>
            <button className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg transition-all duration-300 hover:bg-primary-dark transform hover:-translate-y-1">
              {t("projects.getInvolved.contactUs")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
