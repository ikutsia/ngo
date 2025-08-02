import React, { useState } from "react";

const Publications = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Publications" },
    { id: "research", name: "Research Papers" },
    { id: "reports", name: "Annual Reports" },
    { id: "guides", name: "Educational Guides" },
    { id: "case-studies", name: "Case Studies" },
  ];

  const publications = [
    {
      id: 1,
      title: "Digital Literacy Impact in Rural Georgian Schools",
      category: "research",
      authors: "Dr. Nino Kalandadze, Mariam Chkheidze",
      date: "March 2024",
      description:
        "A comprehensive study on the effectiveness of digital literacy programs in rural communities across Georgia.",
      pdfUrl: "#",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      title: "Annual Report 2023: Transforming Education in Georgia",
      category: "reports",
      authors: "Georgian Education Initiative",
      date: "January 2024",
      description:
        "Our comprehensive annual report highlighting achievements, challenges, and future plans for educational development.",
      pdfUrl: "#",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      title: "Teacher Professional Development: Best Practices Guide",
      category: "guides",
      authors: "David Mchedlishvili",
      date: "February 2024",
      description:
        "A practical guide for implementing effective teacher training programs in Georgian schools.",
      pdfUrl: "#",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      title: "STEM Education Success Story: Tbilisi Public School #5",
      category: "case-studies",
      authors: "Levan Beridze",
      date: "December 2023",
      description:
        "A detailed case study of successful STEM program implementation in a Tbilisi public school.",
      pdfUrl: "#",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      title: "Inclusive Education Policies: Recommendations for Georgia",
      category: "research",
      authors: "Ana Kapanadze, Dr. Tamar Kiknadze",
      date: "November 2023",
      description:
        "Research-based recommendations for developing inclusive education policies in Georgia.",
      pdfUrl: "#",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      title: "Technology Integration Handbook for Educators",
      category: "guides",
      authors: "Georgian Education Initiative",
      date: "October 2023",
      description:
        "A comprehensive handbook for teachers on integrating technology into their classrooms effectively.",
      pdfUrl: "#",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const filteredPublications =
    activeCategory === "all"
      ? publications
      : publications.filter((pub) => pub.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 font-serif">
              Publications & Research
            </h1>
            <p className="text-xl leading-relaxed opacity-90 max-w-2xl mx-auto">
              Explore our research papers, reports, and educational resources
              that contribute to the advancement of education in Georgia
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

      {/* Publications Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPublications.map((publication) => (
              <div
                key={publication.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-3 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={publication.image}
                    alt={publication.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold capitalize">
                    {publication.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-secondary mb-3 leading-tight">
                    {publication.title}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-1">
                    By {publication.authors}
                  </p>
                  <p className="text-gray-text text-xs mb-4">
                    {publication.date}
                  </p>
                  <p className="text-gray-text leading-relaxed text-sm mb-6">
                    {publication.description}
                  </p>
                  <a
                    href={publication.pdfUrl}
                    className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-dark text-sm"
                  >
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
      <section className="bg-gray-light py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary font-serif">
                Featured Publication
              </h2>
              <h3 className="text-2xl font-bold text-secondary leading-tight">
                Digital Literacy Impact in Rural Georgian Schools
              </h3>
              <p className="text-gray-text leading-relaxed text-lg">
                Our latest research study examines the transformative impact of
                digital literacy programs in rural communities across Georgia.
                This comprehensive study involved 50 schools and over 2,000
                students, providing valuable insights into the effectiveness of
                technology integration in education.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-primary mb-2">
                    50
                  </span>
                  <span className="text-gray-text text-sm font-medium">
                    Schools Studied
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-primary mb-2">
                    2,000+
                  </span>
                  <span className="text-gray-text text-sm font-medium">
                    Students Involved
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-primary mb-2">
                    85%
                  </span>
                  <span className="text-gray-text text-sm font-medium">
                    Success Rate
                  </span>
                </div>
              </div>
              <a
                href="/publications/digital-literacy-impact"
                className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg transition-all duration-300 hover:bg-primary-dark transform hover:-translate-y-1"
              >
                Read Full Report
              </a>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Featured Publication"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-5 font-serif">
              Our Research Areas
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              We focus on key areas that drive educational innovation and
              improvement
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="bg-white p-10 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-laptop text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">
                Technology Integration
              </h3>
              <p className="text-gray-text leading-relaxed">
                Research on effective technology integration in classrooms and
                digital literacy development.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-chalkboard-teacher text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">
                Teacher Development
              </h3>
              <p className="text-gray-text leading-relaxed">
                Studies on professional development programs and their impact on
                teaching quality.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">
                Inclusive Education
              </h3>
              <p className="text-gray-text leading-relaxed">
                Research on creating inclusive learning environments for all
                students.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-flask text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">
                STEM Education
              </h3>
              <p className="text-gray-text leading-relaxed">
                Studies on Science, Technology, Engineering, and Mathematics
                education effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;
