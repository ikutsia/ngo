import React from "react";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();

  const newsItems = t("news.newsItems", { returnObjects: true }).map(
    (item, index) => ({
      ...item,
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

  const featuredNews = newsItems.find((item) => item.featured);
  const regularNews = newsItems.filter((item) => !item.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary-light text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 font-serif">
              {t("news.hero.title")}
            </h1>
            <p className="text-xl leading-relaxed opacity-90 max-w-2xl mx-auto">
              {t("news.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className="bg-gray-light py-20">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute top-5 left-5 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {t("news.featured")}
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-5 flex-wrap">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {featuredNews.category}
                  </span>
                  <span className="text-gray-text text-sm">
                    {featuredNews.date}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-secondary leading-tight">
                  {featuredNews.title}
                </h2>
                <p className="text-gray-text leading-relaxed text-lg">
                  {featuredNews.excerpt}
                </p>
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-dark">
                  {t("news.readFullArticle")}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-5 font-serif">
              {t("news.recentNews.title")}
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              {t("news.recentNews.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {regularNews.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-3 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {news.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-gray-text text-sm">{news.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-4 leading-tight">
                    {news.title}
                  </h3>
                  <p className="text-gray-text leading-relaxed mb-6">
                    {news.excerpt}
                  </p>
                  <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-dark">
                    {t("news.readMore")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-5 font-serif">
              {t("news.newsletter.title")}
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-10">
              {t("news.newsletter.description")}
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t("news.newsletter.placeholder")}
                required
                className="flex-1 px-5 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-secondary-light"
              >
                {t("news.newsletter.subscribe")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
