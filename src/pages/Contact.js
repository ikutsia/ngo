import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
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
    alert(t("contact.successMessage"));
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = t("contact.contactInfo", { returnObjects: true });
  const faqQuestions = t("contact.faq.questions", { returnObjects: true });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 font-serif">
              {t("contact.hero.title")}
            </h1>
            <p className="text-xl leading-relaxed opacity-90 max-w-2xl mx-auto">
              {t("contact.hero.subtitle")}
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
                  {t("contact.getInTouch.title")}
                </h2>
                <p className="text-lg text-gray-text leading-relaxed">
                  {t("contact.getInTouch.description")}
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-15 h-15 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                      {contactInfo.address.title}
                    </h3>
                    <p className="text-gray-text leading-relaxed">
                      {contactInfo.address.street}
                      <br />
                      {contactInfo.address.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-15 h-15 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                      {contactInfo.phone.title}
                    </h3>
                    <p className="text-gray-text leading-relaxed">
                      {contactInfo.phone.number}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-15 h-15 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                      {contactInfo.email.title}
                    </h3>
                    <p className="text-gray-text leading-relaxed">
                      {contactInfo.email.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-15 h-15 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                      {contactInfo.officeHours.title}
                    </h3>
                    <p className="text-gray-text leading-relaxed">
                      {contactInfo.officeHours.weekdays}
                      <br />
                      {contactInfo.officeHours.saturday}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-3xl font-bold text-secondary mb-8 font-serif">
                  {t("contact.form.title")}
                </h2>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-secondary font-semibold mb-2 text-sm"
                  >
                    {t("contact.form.fullName")}
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
                    {t("contact.form.emailAddress")}
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
                    {t("contact.form.subject")}
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
                    {t("contact.form.message")}
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
                  {t("contact.form.sendMessage")}
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
                {t("contact.map.title")}
              </h3>
              <p className="text-lg text-gray-text">
                {t("contact.map.description")}
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
              {t("contact.faq.title")}
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              {t("contact.faq.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {faqQuestions.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <h3 className="text-lg font-semibold text-secondary mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-text leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
