import React from "react";

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary-light text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 font-serif">
              Our Team
            </h1>
            <p className="text-xl leading-relaxed opacity-90 max-w-2xl mx-auto">
              Meet the dedicated professionals who are driving educational
              innovation across Georgia
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-secondary mb-5 font-serif">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Our experienced leaders guide our mission and vision for
              educational excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-3 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-5">
                      <a
                        href={`mailto:${member.email}`}
                        className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center transition-all duration-300 hover:bg-secondary hover:text-white transform hover:scale-110"
                      >
                        <i className="fas fa-envelope"></i>
                      </a>
                      <a
                        href={member.linkedin}
                        className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center transition-all duration-300 hover:bg-secondary hover:text-white transform hover:scale-110"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-text leading-relaxed text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="bg-gray-light py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-secondary mb-5 font-serif">
              Advisory Board
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Expert advisors who provide strategic guidance and support our
              mission
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-user-tie text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {advisor.name}
                </h3>
                <p className="text-primary font-semibold mb-2">
                  {advisor.position}
                </p>
                <p className="text-gray-text italic text-sm">
                  {advisor.institution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="text-center p-10 bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl font-bold text-primary mb-3">25+</div>
              <div className="text-lg font-medium text-secondary">
                Team Members
              </div>
            </div>
            <div className="text-center p-10 bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl font-bold text-primary mb-3">15+</div>
              <div className="text-lg font-medium text-secondary">
                Years Average Experience
              </div>
            </div>
            <div className="text-center p-10 bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl font-bold text-primary mb-3">100%</div>
              <div className="text-lg font-medium text-secondary">
                Georgian Nationals
              </div>
            </div>
            <div className="text-center p-10 bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl font-bold text-primary mb-3">80%</div>
              <div className="text-lg font-medium text-secondary">
                Advanced Degrees
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-5 font-serif">
              Join Our Team
            </h2>
            <p className="text-xl leading-relaxed opacity-90 max-w-2xl mx-auto mb-12">
              We're always looking for passionate individuals who share our
              commitment to educational excellence. Explore opportunities to
              make a difference in Georgia's education system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
              <div className="p-8 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm border border-white border-opacity-20">
                <i className="fas fa-briefcase text-4xl text-white mb-6"></i>
                <h3 className="text-xl font-bold text-white mb-4">
                  Career Opportunities
                </h3>
                <p className="text-white text-opacity-80 leading-relaxed">
                  View current job openings and apply to join our team
                </p>
              </div>
              <div className="p-8 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm border border-white border-opacity-20">
                <i className="fas fa-hands-helping text-4xl text-white mb-6"></i>
                <h3 className="text-xl font-bold text-white mb-4">Volunteer</h3>
                <p className="text-white text-opacity-80 leading-relaxed">
                  Share your skills and time with our educational programs
                </p>
              </div>
              <div className="p-8 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm border border-white border-opacity-20">
                <i className="fas fa-graduation-cap text-4xl text-white mb-6"></i>
                <h3 className="text-xl font-bold text-white mb-4">
                  Internships
                </h3>
                <p className="text-white text-opacity-80 leading-relaxed">
                  Gain valuable experience through our internship programs
                </p>
              </div>
            </div>
            <button className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-transparent hover:text-white hover:border-2 hover:border-white transform hover:-translate-y-1">
              View Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
