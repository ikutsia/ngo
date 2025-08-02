import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 font-serif">
              Contact Us
            </h1>
            <p className="text-xl leading-relaxed opacity-90 max-w-2xl mx-auto">
              Get in touch with us to learn more about our programs or to get
              involved
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl font-bold text-secondary mb-5 font-serif">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-text leading-relaxed">
                  We'd love to hear from you. Whether you have questions about
                  our programs, want to get involved, or just want to learn
                  more, we're here to help.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-15 h-15 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                      Address
                    </h3>
                    <p className="text-gray-text leading-relaxed">
                      123 Education Street
                      <br />
                      Tbilisi, Georgia 0101
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-15 h-15 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-text leading-relaxed">
                      +995 32 123 4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-15 h-15 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                      Email
                    </h3>
                    <p className="text-gray-text leading-relaxed">
                      info@georgianeducation.ge
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-15 h-15 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                      Office Hours
                    </h3>
                    <p className="text-gray-text leading-relaxed">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-3xl font-bold text-secondary mb-8 font-serif">
                  Send Us a Message
                </h2>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-secondary font-semibold mb-2 text-sm"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-secondary font-semibold mb-2 text-sm"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-secondary font-semibold mb-2 text-sm"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-secondary font-semibold mb-2 text-sm"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-primary resize-vertical min-h-32"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 transform"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-light py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-20 rounded-2xl shadow-xl text-center">
              <i className="fas fa-map text-6xl text-primary mb-6"></i>
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Interactive Map
              </h3>
              <p className="text-lg text-gray-text">
                Our office location in Tbilisi, Georgia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-5 font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Find answers to common questions about our organization and
              programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-lg font-semibold text-secondary mb-4">
                How can I get involved with your programs?
              </h3>
              <p className="text-gray-text leading-relaxed">
                There are many ways to get involved! You can volunteer, donate,
                partner with us, or participate in our training programs.
                Contact us to learn more about specific opportunities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-lg font-semibold text-secondary mb-4">
                Do you offer training programs for teachers?
              </h3>
              <p className="text-gray-text leading-relaxed">
                Yes, we offer comprehensive professional development programs
                for educators. Our training covers modern teaching
                methodologies, technology integration, and student engagement
                strategies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-lg font-semibold text-secondary mb-4">
                How can I donate to support your work?
              </h3>
              <p className="text-gray-text leading-relaxed">
                You can donate through our website, by bank transfer, or by
                contacting us directly. All donations go directly to supporting
                our educational programs across Georgia.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-lg font-semibold text-secondary mb-4">
                Do you work with schools outside of Tbilisi?
              </h3>
              <p className="text-gray-text leading-relaxed">
                Absolutely! We work with schools throughout Georgia, with a
                particular focus on rural and underserved communities. Our
                programs reach students and teachers across the country.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
