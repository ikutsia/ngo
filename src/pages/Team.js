import React from "react";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();

  const teamMembers = t("team.members", { returnObjects: true }).map(
    (member, index) => ({
      id: index + 1,
      ...member,
      image: [
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      ][index],
      email: [
        "nino.kalandadze@georgianeducation.ge",
        "giorgi.tsiklauri@georgianeducation.ge",
        "mariam.chkheidze@georgianeducation.ge",
        "levan.beridze@georgianeducation.ge",
        "ana.kapanadze@georgianeducation.ge",
        "david.mchedlishvili@georgianeducation.ge",
      ][index],
      linkedin: "#",
    })
  );

  const advisors = t("team.advisory.advisors", { returnObjects: true });

  const stats = t("team.stats", { returnObjects: true });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary-light text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 font-serif">
              {t("team.hero.title")}
            </h1>
            <p className="text-xl leading-relaxed opacity-90 max-w-2xl mx-auto">
              {t("team.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-secondary mb-5 font-serif">
              {t("team.leadership.title")}
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              {t("team.leadership.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-3 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-5">
                      <a
                        href={`mailto:${member.email}`}
                        className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center transition-all duration-300 hover:bg-secondary hover:text-white transform hover:scale-110"
                      >
                        <i className="fas fa-envelope"></i>
                      </a>
                      <a
                        href={member.linkedin}
                        className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center transition-all duration-300 hover:bg-secondary hover:text-white transform hover:scale-110"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-text leading-relaxed text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="bg-gray-light py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-secondary mb-5 font-serif">
              {t("team.advisory.title")}
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              {t("team.advisory.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-user-tie text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {advisor.name}
                </h3>
                <p className="text-primary font-semibold mb-2">
                  {advisor.position}
                </p>
                <p className="text-gray-text italic text-sm">
                  {advisor.institution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-10 bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl font-bold text-primary mb-3">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-5 font-serif">
              {t("team.joinTeam.title")}
            </h2>
            <p className="text-xl leading-relaxed opacity-90 max-w-2xl mx-auto mb-12">
              {t("team.joinTeam.subtitle")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
              <div className="p-8 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm border border-white border-opacity-20">
                <i className="fas fa-briefcase text-4xl text-white mb-6"></i>
                <h3 className="text-xl font-bold text-white mb-4">
                  {t("team.joinTeam.career.title")}
                </h3>
                <p className="text-white text-opacity-80 leading-relaxed">
                  {t("team.joinTeam.career.description")}
                </p>
              </div>
              <div className="p-8 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm border border-white border-opacity-20">
                <i className="fas fa-hands-helping text-4xl text-white mb-6"></i>
                <h3 className="text-xl font-bold text-white mb-4">
                  {t("team.joinTeam.volunteer.title")}
                </h3>
                <p className="text-white text-opacity-80 leading-relaxed">
                  {t("team.joinTeam.volunteer.description")}
                </p>
              </div>
              <div className="p-8 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm border border-white border-opacity-20">
                <i className="fas fa-graduation-cap text-4xl text-white mb-6"></i>
                <h3 className="text-xl font-bold text-white mb-4">
                  {t("team.joinTeam.internships.title")}
                </h3>
                <p className="text-white text-opacity-80 leading-relaxed">
                  {t("team.joinTeam.internships.description")}
                </p>
              </div>
            </div>
            <button className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-transparent hover:text-white hover:border-2 hover:border-white transform hover:-translate-y-1">
              {t("team.joinTeam.viewOpportunities")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
