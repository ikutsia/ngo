import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { db } from "../firebase.config";
import { doc, getDoc } from "firebase/firestore";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProject = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // First try to load from Firestore (for admin-added projects)
      if (projectId.startsWith("firestore-")) {
        try {
          const firestoreId = projectId.replace("firestore-", "");
          const docRef = doc(db, "projects", firestoreId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setProject({
              id: projectId,
              ...docSnap.data(),
            });
            return;
          }
        } catch (firestoreError) {
          console.error("Error loading from Firestore:", firestoreError);
          // If Firestore fails (e.g., unauthenticated), continue to static projects
        }
      }

      // If not found in Firestore, try to find in static projects
      const staticProjects = t("projects.projectList", {
        returnObjects: true,
      }).map((project, index) => ({
        id: index + 1,
        ...project,
        category: [
          "digital-literacy",
          "teacher-development",
          "stem-education",
          "rural-education",
          "special-needs",
          "stem-education",
        ][index],
        image: [
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        ][index],
      }));

      const staticProject = staticProjects.find(
        (p) => p.id.toString() === projectId
      );
      if (staticProject) {
        setProject(staticProject);
        return;
      }

      // If project not found
      setError("Project not found");
    } catch (error) {
      console.error("Error loading project:", error);
      setError("Failed to load project");
    } finally {
      setLoading(false);
    }
  }, [projectId, t]);

  useEffect(() => {
    loadProject();
  }, [loadProject]);

  const getCategoryName = (categoryId) => {
    const categories = {
      "digital-literacy": t("projects.categories.digital-literacy"),
      "teacher-development": t("projects.categories.teacher-development"),
      "stem-education": t("projects.categories.stem-education"),
      "rural-education": t("projects.categories.rural-education"),
      "special-needs": t("projects.categories.special-needs"),
    };
    return categories[categoryId] || categoryId;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-light to-white">
        <div className="max-w-6xl mx-auto px-5 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-500">Loading project...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-light to-white">
        <div className="max-w-6xl mx-auto px-5 py-20">
          <div className="text-center">
            <i className="fas fa-exclamation-triangle text-4xl text-red-500 mb-4"></i>
            <h1 className="text-2xl font-bold text-secondary mb-4">
              Project Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              {error || "The project you're looking for doesn't exist."}
            </p>
            <button
              onClick={() => navigate("/projects")}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-light to-white">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-5 py-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/projects")}
              className="text-primary hover:text-primary-dark transition-colors duration-300"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Projects
            </button>
            <div className="text-right">
              <span
                className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                  project.status?.toLowerCase() === "active" ||
                  project.status?.toLowerCase() === "აქტიური"
                    ? "bg-green-100 text-green-800"
                    : project.status?.toLowerCase() === "completed"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {project.status || "Active"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Image */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-primary text-white">
                  {getCategoryName(project.category)}
                </span>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-secondary mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-gray-text leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.duration && (
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <i className="fas fa-calendar text-white"></i>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-500">
                        Duration
                      </h3>
                      <p className="text-lg font-semibold text-secondary">
                        {project.duration}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {project.participants && (
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <i className="fas fa-users text-white"></i>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-500">
                        Participants
                      </h3>
                      <p className="text-lg font-semibold text-secondary">
                        {project.participants}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {project.location && (
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-white"></i>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-500">
                        Location
                      </h3>
                      <p className="text-lg font-semibold text-secondary">
                        {project.location}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <i className="fas fa-tag text-white"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">
                      Category
                    </h3>
                    <p className="text-lg font-semibold text-secondary">
                      {getCategoryName(project.category)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Get Involved
              </h3>
              <p className="text-gray-text mb-6">
                Interested in this project? Contact us to learn more about how
                you can participate or support our initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  <i className="fas fa-envelope mr-2"></i>
                  Contact Us
                </button>
                <button className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  <i className="fas fa-heart mr-2"></i>
                  Support Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
