import React from "react";

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 font-serif">
              Educational Insights & Perspectives
            </h1>
            <p className="text-xl leading-relaxed opacity-90 max-w-2xl mx-auto">
              Explore thought-provoking articles, expert insights, and
              educational perspectives from our team and partners
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-3 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-4 mb-4 flex-wrap text-sm">
                    <span className="text-primary font-semibold">
                      By {post.author}
                    </span>
                    <span className="text-gray-text">{post.date}</span>
                    <span className="text-gray-text">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-4 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-text leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-dark">
                    Read Full Article
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-gray-light py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary font-serif">
                Featured Article
              </h2>
              <h3 className="text-2xl font-bold text-secondary leading-tight">
                The Future of Education in Georgia: Embracing Digital
                Transformation
              </h3>
              <p className="text-gray-text leading-relaxed text-lg">
                In this comprehensive article, Dr. Nino Kalandadze explores how
                digital transformation is reshaping education in Georgia. From
                the integration of technology in classrooms to the development
                of digital literacy skills, this piece examines the challenges
                and opportunities facing our educational system.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-primary mb-2">
                    2,500+
                  </span>
                  <span className="text-gray-text text-sm font-medium">
                    Views
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-primary mb-2">
                    150+
                  </span>
                  <span className="text-gray-text text-sm font-medium">
                    Comments
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-primary mb-2">
                    5 min
                  </span>
                  <span className="text-gray-text text-sm font-medium">
                    Read Time
                  </span>
                </div>
              </div>
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-dark transform hover:-translate-y-1">
                Read Full Article
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Featured Article"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-5 font-serif">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Find articles on topics that interest you most
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="bg-white p-10 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-laptop text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">
                Education Technology
              </h3>
              <p className="text-gray-text leading-relaxed">
                Latest trends and innovations in educational technology
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
                Strategies for creating inclusive learning environments
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
                Science, Technology, Engineering, and Mathematics education
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-chalkboard-teacher text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">
                Professional Development
              </h3>
              <p className="text-gray-text leading-relaxed">
                Teacher training and professional growth strategies
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
