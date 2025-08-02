import React, { useState } from "react";

const Trainings = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Trainings" },
    { id: "teachers", name: "Teacher Development" },
    { id: "technology", name: "Technology Integration" },
    { id: "leadership", name: "Educational Leadership" },
    { id: "special-needs", name: "Special Education" },
  ];

  const trainings = [
    {
      id: 1,
      title: "Modern Teaching Methodologies",
      category: "teachers",
      description:
        "Learn innovative teaching strategies and classroom management techniques for the 21st century.",
      duration: "3 Days",
      level: "Intermediate",
      location: "Tbilisi",
      startDate: "March 15, 2024",
      price: "Free",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      title: "Digital Tools for Education",
      category: "technology",
      description:
        "Master digital tools and platforms to enhance student engagement and learning outcomes.",
      duration: "2 Days",
      level: "Beginner",
      location: "Online",
      startDate: "March 20, 2024",
      price: "Free",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      title: "School Leadership & Management",
      category: "leadership",
      description:
        "Develop leadership skills for educational administrators and school principals.",
      duration: "5 Days",
      level: "Advanced",
      location: "Tbilisi",
      startDate: "April 5, 2024",
      price: "Free",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      title: "Inclusive Education Practices",
      category: "special-needs",
      description:
        "Learn strategies for creating inclusive classrooms that support all students.",
      duration: "2 Days",
      level: "Intermediate",
      location: "Batumi",
      startDate: "April 10, 2024",
      price: "Free",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      title: "STEM Education Fundamentals",
      category: "teachers",
      description:
        "Introduction to Science, Technology, Engineering, and Mathematics teaching methods.",
      duration: "3 Days",
      level: "Beginner",
      location: "Kutaisi",
      startDate: "April 15, 2024",
      price: "Free",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      title: "Online Learning Platforms",
      category: "technology",
      description:
        "Master popular online learning platforms and create engaging virtual classrooms.",
      duration: "1 Day",
      level: "Beginner",
      location: "Online",
      startDate: "April 20, 2024",
      price: "Free",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const filteredTrainings =
    activeCategory === "all"
      ? trainings
      : trainings.filter((training) => training.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary-light text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 font-serif">
              Professional Development Trainings
            </h1>
            <p className="text-xl leading-relaxed opacity-90 max-w-2xl mx-auto">
              Enhance your teaching skills and advance your career with our
              comprehensive training programs
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

      {/* Trainings Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredTrainings.map((training) => (
              <div
                key={training.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-3 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={training.image}
                    alt={training.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {training.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-4">
                    {training.title}
                  </h3>
                  <p className="text-gray-text leading-relaxed mb-6">
                    {training.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-text text-sm">
                      <i className="fas fa-clock text-primary w-4"></i>
                      <span>{training.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-text text-sm">
                      <i className="fas fa-map-marker-alt text-primary w-4"></i>
                      <span>{training.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-text text-sm">
                      <i className="fas fa-calendar text-primary w-4"></i>
                      <span>{training.startDate}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-text text-sm">
                      <i className="fas fa-tag text-primary w-4"></i>
                      <span>{training.price}</span>
                    </div>
                  </div>
                  <button className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-dark">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="bg-gray-light py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-5 font-serif">
              Why Choose Our Trainings?
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Discover the benefits of participating in our professional
              development programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="bg-white p-10 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-certificate text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">
                Certification
              </h3>
              <p className="text-gray-text leading-relaxed">
                Receive recognized certificates upon completion of our training
                programs
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">
                Expert Instructors
              </h3>
              <p className="text-gray-text leading-relaxed">
                Learn from experienced educators and industry professionals
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-hands-helping text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">
                Hands-on Practice
              </h3>
              <p className="text-gray-text leading-relaxed">
                Apply what you learn through practical exercises and real-world
                scenarios
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-network-wired text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">
                Networking
              </h3>
              <p className="text-gray-text leading-relaxed">
                Connect with fellow educators and build professional
                relationships
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-5 font-serif">
              Upcoming Training Events
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Mark your calendar for these exciting professional development
              opportunities
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-10">
            {trainings.slice(0, 4).map((training, index) => (
              <div
                key={training.id}
                className="flex gap-8 bg-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-5 rounded-xl text-center min-w-[100px] flex-shrink-0">
                  <div className="text-sm font-semibold mb-1">
                    {training.startDate.split(" ")[0]}
                  </div>
                  <div className="text-2xl font-bold">
                    {training.startDate.split(" ")[1]}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {training.title}
                  </h3>
                  <p className="text-gray-text leading-relaxed mb-4">
                    {training.description}
                  </p>
                  <div className="flex gap-5 flex-wrap">
                    <span className="flex items-center gap-2 text-gray-text text-sm">
                      <i className="fas fa-map-marker-alt text-primary"></i>
                      {training.location}
                    </span>
                    <span className="flex items-center gap-2 text-gray-text text-sm">
                      <i className="fas fa-clock text-primary"></i>
                      {training.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-5 font-serif">
              Ready to Advance Your Teaching Career?
            </h2>
            <p className="text-xl leading-relaxed opacity-90 max-w-2xl mx-auto mb-12">
              Join hundreds of educators who have transformed their teaching
              through our professional development programs.
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <button className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-transparent hover:text-white hover:border-2 hover:border-white transform hover:-translate-y-1">
                Browse All Trainings
              </button>
              <button className="inline-block px-8 py-4 bg-transparent text-white border-2 border-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-primary transform hover:-translate-y-1">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainings;
