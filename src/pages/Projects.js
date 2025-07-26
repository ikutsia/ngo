import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'digital-literacy', name: 'Digital Literacy' },
    { id: 'teacher-development', name: 'Teacher Development' },
    { id: 'stem-education', name: 'STEM Education' },
    { id: 'rural-education', name: 'Rural Education' },
    { id: 'special-needs', name: 'Special Needs' }
  ];

  const projects = [
    {
      id: 1,
      title: "Digital Literacy Program",
      category: "digital-literacy",
      description: "Comprehensive digital skills training for students and teachers in rural communities.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "Active",
      duration: "2022-2025",
      participants: "2,500+",
      location: "Rural Georgia"
    },
    {
      id: 2,
      title: "Teacher Development Initiative",
      category: "teacher-development",
      description: "Professional development programs to enhance teaching methodologies and student engagement.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "Active",
      duration: "2021-2024",
      participants: "200+",
      location: "Nationwide"
    },
    {
      id: 3,
      title: "STEM Education for Youth",
      category: "stem-education",
      description: "Hands-on science, technology, engineering, and mathematics programs for students.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "Active",
      duration: "2023-2026",
      participants: "1,800+",
      location: "Tbilisi & Regions"
    },
    {
      id: 4,
      title: "Rural School Connectivity",
      category: "rural-education",
      description: "Providing internet access and technology infrastructure to remote schools.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "Completed",
      duration: "2020-2023",
      participants: "150+",
      location: "Mountain Regions"
    },
    {
      id: 5,
      title: "Inclusive Education Program",
      category: "special-needs",
      description: "Supporting students with special needs through specialized resources and training.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "Active",
      duration: "2022-2025",
      participants: "500+",
      location: "Nationwide"
    },
    {
      id: 6,
      title: "Coding Bootcamp for Teens",
      category: "stem-education",
      description: "Intensive programming courses to prepare students for tech careers.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "Active",
      duration: "2024-2025",
      participants: "300+",
      location: "Tbilisi"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="projects">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <div className="projects-hero-content">
            <h1>Our Projects</h1>
            <p>Discover our innovative educational initiatives that are transforming learning across Georgia</p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className={`project-status ${project.status.toLowerCase()}`}>
                    {project.status}
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-details">
                    <div className="project-detail">
                      <i className="fas fa-calendar"></i>
                      <span>{project.duration}</span>
                    </div>
                    <div className="project-detail">
                      <i className="fas fa-users"></i>
                      <span>{project.participants} Participants</span>
                    </div>
                    <div className="project-detail">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>{project.location}</span>
                    </div>
                  </div>
                  <button className="project-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="project-stats">
        <div className="container">
          <div className="section-header">
            <h2>Project Impact</h2>
            <p>Our projects have made a significant difference in communities across Georgia</p>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Active Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Schools Reached</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Students Impacted</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Teachers Trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="get-involved">
        <div className="container">
          <div className="get-involved-content">
            <h2>Get Involved</h2>
            <p>Join us in making a difference in education across Georgia. There are many ways to support our projects.</p>
            <div className="involvement-options">
              <div className="involvement-option">
                <i className="fas fa-hand-holding-heart"></i>
                <h3>Volunteer</h3>
                <p>Share your skills and time with our educational programs</p>
              </div>
              <div className="involvement-option">
                <i className="fas fa-donate"></i>
                <h3>Donate</h3>
                <p>Support our projects with financial contributions</p>
              </div>
              <div className="involvement-option">
                <i className="fas fa-handshake"></i>
                <h3>Partner</h3>
                <p>Collaborate with us on educational initiatives</p>
              </div>
            </div>
            <button className="btn btn-primary">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 