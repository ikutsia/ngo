import React from "react";
import "./Team.css";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Nino Kalandadze",
      position: "Executive Director",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Leading our organization with 15+ years of experience in educational policy and program development.",
      email: "nino.kalandadze@georgianeducation.ge",
      linkedin: "#",
    },
    {
      id: 2,
      name: "Giorgi Tsiklauri",
      position: "Program Director",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Overseeing all educational programs and ensuring quality implementation across Georgia.",
      email: "giorgi.tsiklauri@georgianeducation.ge",
      linkedin: "#",
    },
    {
      id: 3,
      name: "Mariam Chkheidze",
      position: "Research Coordinator",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Conducting research on educational outcomes and developing evidence-based programs.",
      email: "mariam.chkheidze@georgianeducation.ge",
      linkedin: "#",
    },
    {
      id: 4,
      name: "Levan Beridze",
      position: "Technology Director",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Leading our digital transformation initiatives and technology integration programs.",
      email: "levan.beridze@georgianeducation.ge",
      linkedin: "#",
    },
    {
      id: 5,
      name: "Ana Kapanadze",
      position: "Community Outreach Manager",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Building partnerships with communities and managing stakeholder relationships.",
      email: "ana.kapanadze@georgianeducation.ge",
      linkedin: "#",
    },
    {
      id: 6,
      name: "David Mchedlishvili",
      position: "Training Coordinator",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Developing and delivering professional development programs for educators.",
      email: "david.mchedlishvili@georgianeducation.ge",
      linkedin: "#",
    },
  ];

  const advisors = [
    {
      name: "Prof. Tamar Kiknadze",
      position: "Education Policy Advisor",
      institution: "Tbilisi State University",
    },
    {
      name: "Dr. Zurab Kipshidze",
      position: "Technology Advisor",
      institution: "Georgian Technical University",
    },
    {
      name: "Nino Gvazava",
      position: "Community Development Advisor",
      institution: "Civil Society Institute",
    },
  ];

  return (
    <div className="team">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="container">
          <div className="team-hero-content">
            <h1>Our Team</h1>
            <p>
              Meet the dedicated professionals who are driving educational
              innovation across Georgia
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="leadership-team">
        <div className="container">
          <div className="section-header">
            <h2>Leadership Team</h2>
            <p>
              Our experienced leaders guide our mission and vision for
              educational excellence
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="member-overlay">
                    <div className="member-social">
                      <a
                        href={`mailto:${member.email}`}
                        className="social-link"
                      >
                        <i className="fas fa-envelope"></i>
                      </a>
                      <a href={member.linkedin} className="social-link">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="advisory-board">
        <div className="container">
          <div className="section-header">
            <h2>Advisory Board</h2>
            <p>
              Expert advisors who provide strategic guidance and support our
              mission
            </p>
          </div>
          <div className="advisors-grid">
            {advisors.map((advisor, index) => (
              <div key={index} className="advisor-card">
                <div className="advisor-icon">
                  <i className="fas fa-user-tie"></i>
                </div>
                <h3>{advisor.name}</h3>
                <p className="advisor-position">{advisor.position}</p>
                <p className="advisor-institution">{advisor.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="team-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Average Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Georgian Nationals</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">80%</div>
              <div className="stat-label">Advanced Degrees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="join-team">
        <div className="container">
          <div className="join-team-content">
            <h2>Join Our Team</h2>
            <p>
              We're always looking for passionate individuals who share our
              commitment to educational excellence. Explore opportunities to
              make a difference in Georgia's education system.
            </p>
            <div className="join-options">
              <div className="join-option">
                <i className="fas fa-briefcase"></i>
                <h3>Career Opportunities</h3>
                <p>View current job openings and apply to join our team</p>
              </div>
              <div className="join-option">
                <i className="fas fa-hands-helping"></i>
                <h3>Volunteer</h3>
                <p>Share your skills and time with our educational programs</p>
              </div>
              <div className="join-option">
                <i className="fas fa-graduation-cap"></i>
                <h3>Internships</h3>
                <p>Gain valuable experience through our internship programs</p>
              </div>
            </div>
            <button className="btn btn-primary">View Opportunities</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
