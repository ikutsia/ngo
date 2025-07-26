import React, { useState } from 'react';
import './Trainings.css';

const Trainings = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Trainings' },
    { id: 'teachers', name: 'Teacher Development' },
    { id: 'technology', name: 'Technology Integration' },
    { id: 'leadership', name: 'Educational Leadership' },
    { id: 'special-needs', name: 'Special Education' }
  ];

  const trainings = [
    {
      id: 1,
      title: "Modern Teaching Methodologies",
      category: "teachers",
      description: "Learn innovative teaching strategies and classroom management techniques for the 21st century.",
      duration: "3 Days",
      level: "Intermediate",
      location: "Tbilisi",
      startDate: "March 15, 2024",
      price: "Free",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Digital Tools for Education",
      category: "technology",
      description: "Master digital tools and platforms to enhance student engagement and learning outcomes.",
      duration: "2 Days",
      level: "Beginner",
      location: "Online",
      startDate: "March 20, 2024",
      price: "Free",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "School Leadership & Management",
      category: "leadership",
      description: "Develop leadership skills for educational administrators and school principals.",
      duration: "5 Days",
      level: "Advanced",
      location: "Tbilisi",
      startDate: "April 5, 2024",
      price: "Free",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Inclusive Education Practices",
      category: "special-needs",
      description: "Learn strategies for creating inclusive classrooms that support all students.",
      duration: "2 Days",
      level: "Intermediate",
      location: "Batumi",
      startDate: "April 10, 2024",
      price: "Free",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      title: "STEM Education Fundamentals",
      category: "teachers",
      description: "Introduction to Science, Technology, Engineering, and Mathematics teaching methods.",
      duration: "3 Days",
      level: "Beginner",
      location: "Kutaisi",
      startDate: "April 15, 2024",
      price: "Free",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      title: "Online Learning Platforms",
      category: "technology",
      description: "Master popular online learning platforms and create engaging virtual classrooms.",
      duration: "1 Day",
      level: "Beginner",
      location: "Online",
      startDate: "April 20, 2024",
      price: "Free",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const filteredTrainings = activeCategory === 'all' 
    ? trainings 
    : trainings.filter(training => training.category === activeCategory);

  return (
    <div className="trainings">
      {/* Hero Section */}
      <section className="trainings-hero">
        <div className="container">
          <div className="trainings-hero-content">
            <h1>Professional Development Trainings</h1>
            <p>Enhance your teaching skills and advance your career with our comprehensive training programs</p>
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

      {/* Trainings Grid */}
      <section className="trainings-grid-section">
        <div className="container">
          <div className="trainings-grid">
            {filteredTrainings.map((training) => (
              <div key={training.id} className="training-card">
                <div className="training-image">
                  <img src={training.image} alt={training.title} />
                  <div className="training-level">{training.level}</div>
                </div>
                <div className="training-content">
                  <h3>{training.title}</h3>
                  <p>{training.description}</p>
                  <div className="training-details">
                    <div className="training-detail">
                      <i className="fas fa-clock"></i>
                      <span>{training.duration}</span>
                    </div>
                    <div className="training-detail">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>{training.location}</span>
                    </div>
                    <div className="training-detail">
                      <i className="fas fa-calendar"></i>
                      <span>{training.startDate}</span>
                    </div>
                    <div className="training-detail">
                      <i className="fas fa-tag"></i>
                      <span>{training.price}</span>
                    </div>
                  </div>
                  <button className="training-btn">Register Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="training-benefits">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our Trainings?</h2>
            <p>Discover the benefits of participating in our professional development programs</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3>Certification</h3>
              <p>Receive recognized certificates upon completion of our training programs</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Expert Instructors</h3>
              <p>Learn from experienced educators and industry professionals</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Hands-on Practice</h3>
              <p>Apply what you learn through practical exercises and real-world scenarios</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <h3>Networking</h3>
              <p>Connect with fellow educators and build professional relationships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="upcoming-events">
        <div className="container">
          <div className="section-header">
            <h2>Upcoming Training Events</h2>
            <p>Mark your calendar for these exciting professional development opportunities</p>
          </div>
          <div className="events-timeline">
            {trainings.slice(0, 4).map((training, index) => (
              <div key={training.id} className="event-item">
                <div className="event-date">
                  <div className="event-month">{training.startDate.split(' ')[0]}</div>
                  <div className="event-day">{training.startDate.split(' ')[1]}</div>
                </div>
                <div className="event-content">
                  <h3>{training.title}</h3>
                  <p>{training.description}</p>
                  <div className="event-meta">
                    <span><i className="fas fa-map-marker-alt"></i> {training.location}</span>
                    <span><i className="fas fa-clock"></i> {training.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="training-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Advance Your Teaching Career?</h2>
            <p>Join hundreds of educators who have transformed their teaching through our professional development programs.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Browse All Trainings</button>
              <button className="btn btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainings; 