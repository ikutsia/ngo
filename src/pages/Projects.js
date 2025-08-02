import React, { useState } from "react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "digital-literacy", name: "Digital Literacy" },
    { id: "teacher-development", name: "Teacher Development" },
    { id: "stem-education", name: "STEM Education" },
    { id: "rural-education", name: "Rural Education" },
    { id: "special-needs", name: "Special Needs" },
  ];

  const projects = [
    {
      id: 1,
      title: "Digital Literacy Program",
      category: "digital-literacy",
      description:
        "Comprehensive digital skills training for students and teachers in rural communities.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "Active",
      duration: "2022-2025",
      participants: "2,500+",
      location: "Rural Georgia",
    },
    {
      id: 2,
      title: "Teacher Development Initiative",
      category: "teacher-development",
      description:
        "Professional development programs to enhance teaching methodologies and student engagement.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "Active",
      duration: "2021-2024",
      participants: "200+",
      location: "Nationwide",
    },
    {
      id: 3,
      title: "STEM Education for Youth",
      category: "stem-education",
      description:
        "Hands-on science, technology, engineering, and mathematics programs for students.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "Active",
      duration: "2023-2026",
      participants: "1,800+",
      location: "Tbilisi & Regions",
    },
    {
      id: 4,
      title: "Rural School Connectivity",
      category: "rural-education",
      description:
        "Providing internet access and technology infrastructure to remote schools.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "Completed",
      duration: "2020-2023",
      participants: "150+",
      location: "Mountain Regions",
    },
    {
      id: 5,
      title: "Inclusive Education Program",
      category: "special-needs",
      description:
        "Supporting students with special needs through specialized resources and training.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "Active",
      duration: "2022-2025",
      participants: "500+",
      location: "Nationwide",
    },
    {
      id: 6,
      title: "Coding Bootcamp for Teens",
      category: "stem-education",
      description:
        "Intensive programming courses to prepare students for tech careers.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "Active",
      duration: "2024-2025",
      participants: "300+",
      location: "Tbilisi",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 font-serif">
              Our Projects
            </h1>
            <p className="text-xl leading-relaxed opacity-90 max-w-2xl mx-auto">
              Discover our innovative educational initiatives that are
              transforming learning across Georgia
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
                      project.status.toLowerCase() === "active"
                        ? "bg-green-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {project.status}
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
                    <div className="flex items-center gap-3 text-gray-text text-sm">
                      <i className="fas fa-calendar text-primary w-4"></i>
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-text text-sm">
                      <i className="fas fa-users text-primary w-4"></i>
                      <span>{project.participants} Participants</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-text text-sm">
                      <i className="fas fa-map-marker-alt text-primary w-4"></i>
                      <span>{project.location}</span>
                    </div>
                  </div>
                  <button className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-dark">
                    Learn More
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
              Project Impact
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Our projects have made a significant difference in communities
              across Georgia
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="text-center p-10 bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl font-bold text-primary mb-3">25+</div>
              <div className="text-lg font-medium text-secondary">
                Active Projects
              </div>
            </div>
            <div className="text-center p-10 bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl font-bold text-primary mb-3">500+</div>
              <div className="text-lg font-medium text-secondary">
                Schools Reached
              </div>
            </div>
            <div className="text-center p-10 bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl font-bold text-primary mb-3">
                10,000+
              </div>
              <div className="text-lg font-medium text-secondary">
                Students Impacted
              </div>
            </div>
            <div className="text-center p-10 bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl font-bold text-primary mb-3">200+</div>
              <div className="text-lg font-medium text-secondary">
                Teachers Trained
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="bg-gradient-to-br from-secondary to-secondary-light text-white py-20 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-5 font-serif">Get Involved</h2>
            <p className="text-xl leading-relaxed opacity-90 max-w-2xl mx-auto mb-12">
              Join us in making a difference in education across Georgia. There
              are many ways to support our projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
              <div className="p-8 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm border border-white border-opacity-20">
                <i className="fas fa-hand-holding-heart text-4xl text-primary mb-6"></i>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Volunteer
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Share your skills and time with our educational programs
                </p>
              </div>
              <div className="p-8 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm border border-white border-opacity-20">
                <i className="fas fa-donate text-4xl text-primary mb-6"></i>
                <h3 className="text-xl font-bold text-primary mb-4">Donate</h3>
                <p className="text-gray-300 leading-relaxed">
                  Support our projects with financial contributions
                </p>
              </div>
              <div className="p-8 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm border border-white border-opacity-20">
                <i className="fas fa-handshake text-4xl text-primary mb-6"></i>
                <h3 className="text-xl font-bold text-primary mb-4">Partner</h3>
                <p className="text-gray-300 leading-relaxed">
                  Collaborate with us on educational initiatives
                </p>
              </div>
            </div>
            <button className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg transition-all duration-300 hover:bg-primary-dark transform hover:-translate-y-1">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
