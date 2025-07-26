import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Contact Us</h1>
            <p>Get in touch with us to learn more about our programs or to get involved</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>We'd love to hear from you. Whether you have questions about our programs, want to get involved, or just want to learn more, we're here to help.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Address</h3>
                    <p>123 Education Street<br />Tbilisi, Georgia 0101</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <p>+995 32 123 4567</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>info@georgianeducation.ge</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Office Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send Us a Message</h2>
                
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-container">
            <div className="map-placeholder">
              <i className="fas fa-map"></i>
              <h3>Interactive Map</h3>
              <p>Our office location in Tbilisi, Georgia</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our organization and programs</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How can I get involved with your programs?</h3>
              <p>There are many ways to get involved! You can volunteer, donate, partner with us, or participate in our training programs. Contact us to learn more about specific opportunities.</p>
            </div>

            <div className="faq-item">
              <h3>Do you offer training programs for teachers?</h3>
              <p>Yes, we offer comprehensive professional development programs for educators. Our training covers modern teaching methodologies, technology integration, and student engagement strategies.</p>
            </div>

            <div className="faq-item">
              <h3>How can I donate to support your work?</h3>
              <p>You can donate through our website, by bank transfer, or by contacting us directly. All donations go directly to supporting our educational programs across Georgia.</p>
            </div>

            <div className="faq-item">
              <h3>Do you work with schools outside of Tbilisi?</h3>
              <p>Absolutely! We work with schools throughout Georgia, with a particular focus on rural and underserved communities. Our programs reach students and teachers across the country.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 