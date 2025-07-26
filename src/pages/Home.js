import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Digital Literacy Program",
      description: "Empowering rural communities with essential digital skills and computer literacy training.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Education Technology"
    },
    {
      id: 2,
      title: "Teacher Development Initiative",
      description: "Comprehensive training programs for educators to enhance teaching methodologies and student engagement.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Professional Development"
    },
    {
      id: 3,
      title: "STEM Education for Youth",
      description: "Inspiring the next generation of innovators through hands-on science, technology, engineering, and mathematics programs.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "STEM Education"
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "500+", label: "Schools Supported" },
    { number: "10,000+", label: "Students Reached" },
    { number: "200+", label: "Teachers Trained" }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Empowering Education in Georgia</h1>
            <p>We are dedicated to advancing educational excellence, fostering innovation, and building a brighter future for Georgia's youth through comprehensive programs, research, and community engagement.</p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">Explore Our Projects</Link>
              <Link to="/about" className="btn btn-secondary">Learn More About Us</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">
              <i className="fas fa-graduation-cap"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>Discover our innovative educational initiatives that are making a difference across Georgia</p>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-category">{project.category}</div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to={`/projects/${project.id}`} className="project-link">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="section-footer">
            <Link to="/projects" className="btn btn-outline">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>To transform education in Georgia by providing innovative learning opportunities, supporting educators, and fostering a culture of academic excellence that empowers students to reach their full potential.</p>
              <div className="mission-values">
                <div className="value-item">
                  <i className="fas fa-lightbulb"></i>
                  <h4>Innovation</h4>
                  <p>Embracing new technologies and methodologies</p>
                </div>
                <div className="value-item">
                  <i className="fas fa-hands-helping"></i>
                  <h4>Collaboration</h4>
                  <p>Working together with communities and partners</p>
                </div>
                <div className="value-item">
                  <i className="fas fa-star"></i>
                  <h4>Excellence</h4>
                  <p>Striving for the highest quality in everything we do</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Join Us in Building a Better Future</h2>
            <p>Whether you're an educator, student, or community member, there are many ways to get involved with our mission.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get Involved</Link>
              <Link to="/trainings" className="btn btn-secondary">Attend Training</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 