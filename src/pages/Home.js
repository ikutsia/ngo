import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Digital Literacy Program",
      description:
        "Empowering rural communities with essential digital skills and computer literacy training.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Education Technology",
    },
    {
      id: 2,
      title: "Teacher Development Initiative",
      description:
        "Comprehensive training programs for educators to enhance teaching methodologies and student engagement.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Professional Development",
    },
    {
      id: 3,
      title: "STEM Education for Youth",
      description:
        "Inspiring the next generation of innovators through hands-on science, technology, engineering, and mathematics programs.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "STEM Education",
    },
  ];

  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "500+", label: "Schools Supported" },
    { number: "10,000+", label: "Students Reached" },
    { number: "200+", label: "Teachers Trained" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-10"></div>
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-serif">
              Empowering Education in Georgia
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              We are dedicated to advancing educational excellence, fostering
              innovation, and building a brighter future for Georgia's youth
              through comprehensive programs, research, and community
              engagement.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link
                to="/projects"
                className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-transparent hover:text-white hover:border-2 hover:border-white transform hover:-translate-y-1"
              >
                Explore Our Projects
              </Link>
              <Link
                to="/about"
                className="inline-block px-8 py-4 bg-transparent text-white border-2 border-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-primary transform hover:-translate-y-1"
              >
                Learn More About Us
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
                    Learn More <i className="fas fa-arrow-right"></i>
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
              View All Projects
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
                Our Mission
              </h2>
              <p className="text-xl leading-relaxed opacity-90 mb-12">
                To transform education in Georgia by providing innovative
                learning opportunities, supporting educators, and fostering a
                culture of academic excellence that empowers students to reach
                their full potential.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
                <div className="text-center p-8">
                  <i className="fas fa-lightbulb text-5xl text-primary mb-5"></i>
                  <h4 className="text-xl font-bold text-primary mb-4">
                    Innovation
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Embracing new technologies and methodologies
                  </p>
                </div>
                <div className="text-center p-8">
                  <i className="fas fa-hands-helping text-5xl text-primary mb-5"></i>
                  <h4 className="text-xl font-bold text-primary mb-4">
                    Collaboration
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Working together with communities and partners
                  </p>
                </div>
                <div className="text-center p-8">
                  <i className="fas fa-star text-5xl text-primary mb-5"></i>
                  <h4 className="text-xl font-bold text-primary mb-4">
                    Excellence
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Striving for the highest quality in everything we do
                  </p>
                </div>
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
              Join Us in Building a Better Future
            </h2>
            <p className="text-xl text-gray-text mb-10">
              Whether you're an educator, student, or community member, there
              are many ways to get involved with our mission.
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg transition-all duration-300 hover:bg-primary-dark transform hover:-translate-y-1"
              >
                Get Involved
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
