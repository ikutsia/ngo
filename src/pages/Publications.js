import React, { useState } from 'react';
import './Publications.css';

const Publications = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Publications' },
    { id: 'research', name: 'Research Papers' },
    { id: 'reports', name: 'Annual Reports' },
    { id: 'guides', name: 'Educational Guides' },
    { id: 'case-studies', name: 'Case Studies' }
  ];

  const publications = [
    {
      id: 1,
      title: "Digital Literacy Impact in Rural Georgian Schools",
      category: "research",
      authors: "Dr. Nino Kalandadze, Mariam Chkheidze",
      date: "March 2024",
      description: "A comprehensive study on the effectiveness of digital literacy programs in rural communities across Georgia.",
      pdfUrl: "#",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Annual Report 2023: Transforming Education in Georgia",
      category: "reports",
      authors: "Georgian Education Initiative",
      date: "January 2024",
      description: "Our comprehensive annual report highlighting achievements, challenges, and future plans for educational development.",
      pdfUrl: "#",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Teacher Professional Development: Best Practices Guide",
      category: "guides",
      authors: "David Mchedlishvili",
      date: "February 2024",
      description: "A practical guide for implementing effective teacher training programs in Georgian schools.",
      pdfUrl: "#",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "STEM Education Success Story: Tbilisi Public School #5",
      category: "case-studies",
      authors: "Levan Beridze",
      date: "December 2023",
      description: "A detailed case study of successful STEM program implementation in a Tbilisi public school.",
      pdfUrl: "#",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      title: "Inclusive Education Policies: Recommendations for Georgia",
      category: "research",
      authors: "Ana Kapanadze, Dr. Tamar Kiknadze",
      date: "November 2023",
      description: "Research-based recommendations for developing inclusive education policies in Georgia.",
      pdfUrl: "#",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      title: "Technology Integration Handbook for Educators",
      category: "guides",
      authors: "Georgian Education Initiative",
      date: "October 2023",
      description: "A comprehensive handbook for teachers on integrating technology into their classrooms effectively.",
      pdfUrl: "#",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const filteredPublications = activeCategory === 'all' 
    ? publications 
    : publications.filter(pub => pub.category === activeCategory);

  return (
    <div className="publications">
      {/* Hero Section */}
      <section className="publications-hero">
        <div className="container">
          <div className="publications-hero-content">
            <h1>Publications & Research</h1>
            <p>Explore our research papers, reports, and educational resources that contribute to the advancement of education in Georgia</p>
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

      {/* Publications Grid */}
      <section className="publications-grid-section">
        <div className="container">
          <div className="publications-grid">
            {filteredPublications.map((publication) => (
              <div key={publication.id} className="publication-card">
                <div className="publication-image">
                  <img src={publication.image} alt={publication.title} />
                  <div className="publication-category">{publication.category}</div>
                </div>
                <div className="publication-content">
                  <h3>{publication.title}</h3>
                  <p className="publication-authors">By {publication.authors}</p>
                  <p className="publication-date">{publication.date}</p>
                  <p className="publication-description">{publication.description}</p>
                  <a href={publication.pdfUrl} className="download-btn">
                    <i className="fas fa-download"></i>
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publication */}
      <section className="featured-publication">
        <div className="container">
          <div className="featured-content">
            <div className="featured-text">
              <h2>Featured Publication</h2>
              <h3>Digital Literacy Impact in Rural Georgian Schools</h3>
              <p>Our latest research study examines the transformative impact of digital literacy programs in rural communities across Georgia. This comprehensive study involved 50 schools and over 2,000 students, providing valuable insights into the effectiveness of technology integration in education.</p>
              <div className="featured-stats">
                <div className="stat">
                  <span className="stat-number">50</span>
                  <span className="stat-label">Schools Studied</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2,000+</span>
                  <span className="stat-label">Students Involved</span>
                </div>
                <div className="stat">
                  <span className="stat-number">85%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
              </div>
              <a href="/publications/digital-literacy-impact" className="btn btn-primary">Read Full Report</a>
            </div>
            <div className="featured-image">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Featured Publication" />
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="research-areas">
        <div className="container">
          <div className="section-header">
            <h2>Our Research Areas</h2>
            <p>We focus on key areas that drive educational innovation and improvement</p>
          </div>
          <div className="research-grid">
            <div className="research-area">
              <div className="research-icon">
                <i className="fas fa-laptop"></i>
              </div>
              <h3>Technology Integration</h3>
              <p>Research on effective technology integration in classrooms and digital literacy development.</p>
            </div>
            <div className="research-area">
              <div className="research-icon">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3>Teacher Development</h3>
              <p>Studies on professional development programs and their impact on teaching quality.</p>
            </div>
            <div className="research-area">
              <div className="research-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Inclusive Education</h3>
              <p>Research on creating inclusive learning environments for all students.</p>
            </div>
            <div className="research-area">
              <div className="research-icon">
                <i className="fas fa-flask"></i>
              </div>
              <h3>STEM Education</h3>
              <p>Studies on Science, Technology, Engineering, and Mathematics education effectiveness.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications; 