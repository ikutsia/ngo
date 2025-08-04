import React from "react";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();

  const blogPosts = t("blog.blogPosts", { returnObjects: true }).map(
    (post, index) => ({
      ...post,
      image: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      ][index],
    })
  );

  const categoryCards = t("blog.categoryCards", { returnObjects: true });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 font-serif">
              {t("blog.hero.title")}
            </h1>
            <p className="text-xl leading-relaxed opacity-90 max-w-2xl mx-auto">
              {t("blog.hero.subtitle")}
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
                      {t("blog.by")} {post.author}
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
                    {t("blog.readFullArticle")}
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
                {t("blog.featuredArticle.title")}
              </h2>
              <h3 className="text-2xl font-bold text-secondary leading-tight">
                {t("blog.featuredArticle.articleTitle")}
              </h3>
              <p className="text-gray-text leading-relaxed text-lg">
                {t("blog.featuredArticle.description")}
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-primary mb-2">
                    2,500+
                  </span>
                  <span className="text-gray-text text-sm font-medium">
                    {t("blog.featuredArticle.stats.views")}
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-primary mb-2">
                    150+
                  </span>
                  <span className="text-gray-text text-sm font-medium">
                    {t("blog.featuredArticle.stats.comments")}
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-primary mb-2">
                    5 {t("blog.minRead")}
                  </span>
                  <span className="text-gray-text text-sm font-medium">
                    {t("blog.featuredArticle.stats.readTime")}
                  </span>
                </div>
              </div>
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-dark transform hover:-translate-y-1">
                {t("blog.readFullArticle")}
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
              {t("blog.categories.title")}
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              {t("blog.categories.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {categoryCards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-laptop text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-text leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
