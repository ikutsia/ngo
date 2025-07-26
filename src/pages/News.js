import React from 'react';
import './News.css';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Digital Literacy Program Launches in Rural Georgia",
      category: "Program Launch",
      date: "March 15, 2024",
      excerpt: "We are excited to announce the launch of our comprehensive digital literacy program reaching 25 rural schools across Georgia.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Partnership with European Education Foundation Announced",
      category: "Partnership",
      date: "March 10, 2024",
      excerpt: "We are proud to announce a new partnership with the European Education Foundation to enhance our teacher training programs.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      featured: false
    },
    {
      id: 3,
      title: "Annual Education Conference 2024: Registration Now Open",
      category: "Event",
      date: "March 5, 2024",
      excerpt: "Join us for our annual education conference featuring keynote speakers, workshops, and networking opportunities.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      featured: false
    },
    {
      id: 4,
      title: "Student Achievement Awards Ceremony Highlights",
      category: "Achievement",
      date: "February 28, 2024",
      excerpt: "Celebrating the outstanding achievements of students who participated in our STEM education programs.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      featured: false
    },
    {
      id: 5,
      title: "New Research Grant Awarded for Inclusive Education Study",
      category: "Research",
      date: "February 20, 2024",
      excerpt: "We have been awarded a significant research grant to study inclusive education practices in Georgian schools.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      featured: false
    },
    {
      id: 6,
      title: "Technology Donation Program Reaches 100 Schools",
      category: "Milestone",
      date: "February 15, 2024",
      excerpt: "Our technology donation program has successfully provided computers and digital resources to 100 schools across Georgia.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      featured: false
    }
  ];

  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <div className="news">
      {/* Hero Section */}
      <section className="news-hero">
        <div className="container">
          <div className="news-hero-content">
            <h1>Latest News & Updates</h1>
            <p>Stay informed about our latest programs, achievements, and educational initiatives across Georgia</p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className="featured-news">
          <div className="container">
            <div className="featured-news-content">
              <div className="featured-image">
                <img src={featuredNews.image} alt={featuredNews.title} />
                <div className="featured-badge">Featured</div>
              </div>
              <div className="featured-text">
                <div className="news-meta">
                  <span className="news-category">{featuredNews.category}</span>
                  <span className="news-date">{featuredNews.date}</span>
                </div>
                <h2>{featuredNews.title}</h2>
                <p>{featuredNews.excerpt}</p>
                <button className="read-more-btn">Read Full Article</button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="news-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>Recent News</h2>
            <p>Latest updates from our organization and educational community</p>
          </div>
          <div className="news-grid">
            {regularNews.map((news) => (
              <div key={news.id} className="news-card">
                <div className="news-image">
                  <img src={news.image} alt={news.title} />
                  <div className="news-category-badge">{news.category}</div>
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-date">{news.date}</span>
                  </div>
                  <h3>{news.title}</h3>
                  <p>{news.excerpt}</p>
                  <button className="read-more-btn">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter to receive the latest news and updates about our educational programs and initiatives.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="subscribe-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News; 