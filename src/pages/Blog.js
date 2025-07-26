import React from "react";
import "./Blog.css";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "The Future of Education in Georgia: Embracing Digital Transformation",
      author: "Dr. Nino Kalandadze",
      date: "March 15, 2024",
      category: "Education Technology",
      excerpt:
        "Exploring how digital transformation is reshaping education in Georgia and what it means for students, teachers, and communities.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Building Inclusive Classrooms: Strategies for Success",
      author: "Ana Kapanadze",
      date: "March 10, 2024",
      category: "Inclusive Education",
      excerpt:
        "Practical strategies and best practices for creating inclusive learning environments that support all students.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "STEM Education: Inspiring the Next Generation of Innovators",
      author: "Levan Beridze",
      date: "March 5, 2024",
      category: "STEM Education",
      excerpt:
        "How STEM education programs are preparing Georgian students for future careers in science and technology.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Teacher Professional Development: Investing in Quality Education",
      author: "David Mchedlishvili",
      date: "February 28, 2024",
      category: "Professional Development",
      excerpt:
        "The importance of continuous professional development for teachers and its impact on student learning outcomes.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Community Engagement in Education: Lessons from Rural Georgia",
      author: "Mariam Chkheidze",
      date: "February 20, 2024",
      category: "Community Engagement",
      excerpt:
        "How community involvement is transforming education in rural areas and creating lasting positive change.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "Digital Literacy: Bridging the Technology Gap",
      author: "Giorgi Tsiklauri",
      date: "February 15, 2024",
      category: "Digital Literacy",
      excerpt:
        "Addressing the digital divide and ensuring all students have access to essential technology skills.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="blog">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-content">
            <h1>Educational Insights & Perspectives</h1>
            <p>
              Explore thought-provoking articles, expert insights, and
              educational perspectives from our team and partners
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-category">{post.category}</div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-author">By {post.author}</span>
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <button className="read-more-btn">Read Full Article</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="featured-article">
        <div className="container">
          <div className="featured-content">
            <div className="featured-text">
              <h2>Featured Article</h2>
              <h3>
                The Future of Education in Georgia: Embracing Digital
                Transformation
              </h3>
              <p>
                In this comprehensive article, Dr. Nino Kalandadze explores how
                digital transformation is reshaping education in Georgia. From
                the integration of technology in classrooms to the development
                of digital literacy skills, this piece examines the challenges
                and opportunities facing our educational system.
              </p>
              <div className="article-stats">
                <div className="stat">
                  <span className="stat-number">2,500+</span>
                  <span className="stat-label">Views</span>
                </div>
                <div className="stat">
                  <span className="stat-number">150+</span>
                  <span className="stat-label">Comments</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5 min</span>
                  <span className="stat-label">Read Time</span>
                </div>
              </div>
              <button className="btn btn-primary">Read Full Article</button>
            </div>
            <div className="featured-image">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Featured Article"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="blog-categories">
        <div className="container">
          <div className="section-header">
            <h2>Explore by Category</h2>
            <p>Find articles on topics that interest you most</p>
          </div>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-laptop"></i>
              </div>
              <h3>Education Technology</h3>
              <p>Latest trends and innovations in educational technology</p>
            </div>
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Inclusive Education</h3>
              <p>Strategies for creating inclusive learning environments</p>
            </div>
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-flask"></i>
              </div>
              <h3>STEM Education</h3>
              <p>Science, Technology, Engineering, and Mathematics education</p>
            </div>
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3>Professional Development</h3>
              <p>Teacher training and professional growth strategies</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
