import React from "react";

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary-light text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 font-serif">
              About Georgian Education Initiative
            </h1>
            <p className="text-xl leading-relaxed opacity-90 max-w-2xl mx-auto">
              Empowering the future of Georgia through innovative education and
              community engagement since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-light py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white p-12 rounded-2xl shadow-xl text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-8">
                <i className="fas fa-bullseye text-3xl text-white"></i>
              </div>
              <h2 className="text-3xl font-bold text-secondary mb-6 font-serif">
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed text-gray-text">
                To transform education in Georgia by providing innovative
                learning opportunities, supporting educators, and fostering a
                culture of academic excellence that empowers students to reach
                their full potential and become active contributors to society.
              </p>
            </div>
            <div className="bg-white p-12 rounded-2xl shadow-xl text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-8">
                <i className="fas fa-eye text-3xl text-white"></i>
              </div>
              <h2 className="text-3xl font-bold text-secondary mb-6 font-serif">
                Our Vision
              </h2>
              <p className="text-lg leading-relaxed text-gray-text">
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
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-secondary mb-5 font-serif">
              Our Journey
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Fifteen years of dedication to educational excellence and
              community impact
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary-dark transform -translate-x-1/2"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative mb-16 ${
                  index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"
                }`}
              >
                <div
                  className={`bg-white p-8 rounded-xl shadow-lg relative ${
                    index % 2 === 0 ? "mr-8" : "ml-8"
                  }`}
                >
                  {/* Arrow */}
                  <div
                    className={`absolute top-8 w-0 h-0 ${
                      index % 2 === 0
                        ? "right-[-15px] border-l-[15px] border-l-white border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent"
                        : "left-[-15px] border-r-[15px] border-r-white border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent"
                    }`}
                  ></div>

                  <div className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-text leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-light py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-secondary mb-5 font-serif">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="w-18 h-18 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${value.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-text leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-secondary mb-5 font-serif">
              Our Impact
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Numbers that tell the story of our commitment to education
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            <div className="text-center p-10 bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl font-bold text-primary mb-3">15+</div>
              <div className="text-lg font-medium text-secondary">
                Years of Service
              </div>
            </div>
            <div className="text-center p-10 bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl font-bold text-primary mb-3">500+</div>
              <div className="text-lg font-medium text-secondary">
                Schools Supported
              </div>
            </div>
            <div className="text-center p-10 bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl font-bold text-primary mb-3">
                10,000+
              </div>
              <div className="text-lg font-medium text-secondary">
                Students Reached
              </div>
            </div>
            <div className="text-center p-10 bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl font-bold text-primary mb-3">200+</div>
              <div className="text-lg font-medium text-secondary">
                Teachers Trained
              </div>
            </div>
            <div className="text-center p-10 bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl font-bold text-primary mb-3">25+</div>
              <div className="text-lg font-medium text-secondary">
                Communities Served
              </div>
            </div>
            <div className="text-center p-10 bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl font-bold text-primary mb-3">50+</div>
              <div className="text-lg font-medium text-secondary">
                Partnerships
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="bg-gradient-to-br from-secondary to-secondary-light text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-5 font-serif">
              Meet Our Team
            </h2>
            <p className="text-xl leading-relaxed opacity-90 max-w-2xl mx-auto mb-10">
              Our dedicated team of educators, researchers, and community
              leaders work together to create meaningful change in Georgia's
              educational landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-3">25+</div>
                <div className="text-lg opacity-90">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-3">15+</div>
                <div className="text-lg opacity-90">
                  Years Average Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-3">100%</div>
                <div className="text-lg opacity-90">Georgian Nationals</div>
              </div>
            </div>
            <a
              href="/team"
              className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg transition-all duration-300 hover:bg-primary-dark transform hover:-translate-y-1"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
