import React from "react";
import "./About.css";

const About = () => {
  const values = [
    {
      icon: "fas fa-lightbulb",
      title: "Innovation",
      description:
        "We embrace new technologies and methodologies to enhance educational outcomes.",
    },
    {
      icon: "fas fa-hands-helping",
      title: "Collaboration",
      description:
        "We believe in the power of partnerships and working together with communities.",
    },
    {
      icon: "fas fa-star",
      title: "Excellence",
      description:
        "We strive for the highest quality in all our programs and initiatives.",
    },
    {
      icon: "fas fa-heart",
      title: "Compassion",
      description:
        "We approach our work with empathy and understanding for all stakeholders.",
    },
    {
      icon: "fas fa-balance-scale",
      title: "Equity",
      description:
        "We ensure equal access to educational opportunities for all students.",
    },
    {
      icon: "fas fa-globe",
      title: "Global Perspective",
      description:
        "We incorporate international best practices while respecting local culture.",
    },
  ];

  const timeline = [
    {
      year: "2009",
      title: "Foundation",
      description:
        "Georgian Education Initiative was established with a vision to transform education in Georgia.",
    },
    {
      year: "2012",
      title: "First Major Project",
      description:
        "Launched our flagship Digital Literacy Program reaching 50 rural schools.",
    },
    {
      year: "2015",
      title: "National Recognition",
      description:
        "Received the National Education Excellence Award for innovative teaching methods.",
    },
    {
      year: "2018",
      title: "International Partnerships",
      description:
        "Established partnerships with leading educational institutions across Europe.",
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description:
        "Pioneered comprehensive online learning platforms during the pandemic.",
    },
    {
      year: "2024",
      title: "Future Forward",
      description:
        "Expanding our reach to serve over 10,000 students across Georgia.",
    },
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About Georgian Education Initiative</h1>
            <p>
              Empowering the future of Georgia through innovative education and
              community engagement since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h2>Our Mission</h2>
              <p>
                To transform education in Georgia by providing innovative
                learning opportunities, supporting educators, and fostering a
                culture of academic excellence that empowers students to reach
                their full potential and become active contributors to society.
              </p>
            </div>
            <div className="vision-card">
              <div className="card-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h2>Our Vision</h2>
              <p>
                To be the leading educational organization in Georgia,
                recognized for excellence in innovative teaching methodologies,
                comprehensive student support, and meaningful community
                engagement that creates lasting positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="history-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>
              Fifteen years of dedication to educational excellence and
              community impact
            </p>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <i className={value.icon}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="impact-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Impact</h2>
            <p>Numbers that tell the story of our commitment to education</p>
          </div>
          <div className="impact-grid">
            <div className="impact-item">
              <div className="impact-number">15+</div>
              <div className="impact-label">Years of Service</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">500+</div>
              <div className="impact-label">Schools Supported</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">10,000+</div>
              <div className="impact-label">Students Reached</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">200+</div>
              <div className="impact-label">Teachers Trained</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">25+</div>
              <div className="impact-label">Communities Served</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">50+</div>
              <div className="impact-label">Partnerships</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="team-preview">
        <div className="container">
          <div className="team-preview-content">
            <h2>Meet Our Team</h2>
            <p>
              Our dedicated team of educators, researchers, and community
              leaders work together to create meaningful change in Georgia's
              educational landscape.
            </p>
            <div className="team-preview-stats">
              <div className="team-stat">
                <div className="team-stat-number">25+</div>
                <div className="team-stat-label">Team Members</div>
              </div>
              <div className="team-stat">
                <div className="team-stat-number">15+</div>
                <div className="team-stat-label">Years Average Experience</div>
              </div>
              <div className="team-stat">
                <div className="team-stat-number">100%</div>
                <div className="team-stat-label">Georgian Nationals</div>
              </div>
            </div>
            <a href="/team" className="btn btn-primary">
              Meet Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
