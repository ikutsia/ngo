import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { db } from "../../firebase.config";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

const ProjectManager = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "digital-literacy",
    status: "Active",
    duration: "",
    participants: "",
    location: "",
    image: "",
  });
  const [imagePreview, setImagePreview] = useState("");
  const [uploading, setUploading] = useState(false);

  const categories = [
    { id: "digital-literacy", name: t("projects.categories.digital-literacy") },
    {
      id: "teacher-development",
      name: t("projects.categories.teacher-development"),
    },
    { id: "stem-education", name: t("projects.categories.stem-education") },
    { id: "rural-education", name: t("projects.categories.rural-education") },
    { id: "special-needs", name: t("projects.categories.special-needs") },
  ];

  const statusOptions = [
    { value: "Active", label: "Active" },
    { value: "Completed", label: "Completed" },
    { value: "Planning", label: "Planning" },
    { value: "On Hold", label: "On Hold" },
  ];

  // Load projects from Firestore
  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectsList);
    } catch (error) {
      console.error("Error loading projects:", error);
      setMessage({
        type: "error",
        text: "Failed to load projects. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        setMessage({ type: "error", text: "Please select an image file." });
        return;
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setMessage({
          type: "error",
          text: "Image size must be less than 5MB.",
        });
        return;
      }

      // For free Firebase plan, we'll just create a preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);

      // Show message about using URL instead
      setMessage({
        type: "info",
        text: "File upload requires Firebase Storage (paid plan). Please use image URL instead.",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setUploading(true);
      console.log("Submitting project data:", formData);

      let imageURL = formData.image; // Keep existing image URL if no new image

      // Upload new image if selected
      // if (imageFile) { // Removed imageFile upload logic
      //   console.log("Uploading image...");
      //   imageURL = await uploadImage(imageFile);
      //   console.log("Image uploaded:", imageURL);
      // }

      const projectData = {
        ...formData,
        image: imageURL,
      };

      if (editingProject) {
        // Update existing project
        console.log("Updating project:", editingProject.id);
        await updateDoc(doc(db, "projects", editingProject.id), projectData);
        setMessage({ type: "success", text: "Project updated successfully!" });
        setEditingProject(null);
      } else {
        // Add new project
        console.log("Adding new project to Firestore...");
        const docRef = await addDoc(collection(db, "projects"), projectData);
        console.log("Project added with ID:", docRef.id);
        setMessage({ type: "success", text: "Project added successfully!" });
      }

      // Reset form and states
      setFormData({
        title: "",
        description: "",
        category: "digital-literacy",
        status: "Active",
        duration: "",
        participants: "",
        location: "",
        image: "",
      });
      // setImageFile(null); // Removed imageFile reset
      setImagePreview("");
      setShowForm(false);
      loadProjects();

      // Clear message after 3 seconds
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    } catch (error) {
      console.error("Error saving project:", error);
      console.error("Error details:", {
        code: error.code,
        message: error.message,
        stack: error.stack,
      });

      let errorMessage = "Failed to save project. Please try again.";

      // Provide more specific error messages
      if (error.code === "permission-denied") {
        errorMessage =
          "Permission denied. Please check Firestore security rules.";
      } else if (error.code === "unavailable") {
        errorMessage =
          "Firestore is unavailable. Please check your internet connection.";
      } else if (error.code === "not-found") {
        errorMessage =
          "Firestore database not found. Please check your Firebase configuration.";
      } else if (error.message.includes("upload")) {
        errorMessage = "Failed to upload image. Please try again.";
      }

      setMessage({
        type: "error",
        text: errorMessage,
      });
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title || "",
      description: project.description || "",
      category: project.category || "digital-literacy",
      status: project.status || "Active",
      duration: project.duration || "",
      participants: project.participants || "",
      location: project.location || "",
      image: project.image || "",
    });
    setImagePreview(project.image || "");
    // setImageFile(null); // Removed imageFile reset
    setShowForm(true);
  };

  const handleDelete = async (projectId) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteDoc(doc(db, "projects", projectId));
        setMessage({ type: "success", text: "Project deleted successfully!" });
        loadProjects();
        setTimeout(() => setMessage({ type: "", text: "" }), 3000);
      } catch (error) {
        console.error("Error deleting project:", error);
        setMessage({
          type: "error",
          text: "Failed to delete project. Please try again.",
        });
      }
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingProject(null);
    setFormData({
      title: "",
      description: "",
      category: "digital-literacy",
      status: "Active",
      duration: "",
      participants: "",
      location: "",
      image: "",
    });
    // setImageFile(null); // Removed imageFile reset
    setImagePreview("");
    setMessage({ type: "", text: "" });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-secondary">
          Project Management
        </h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors duration-300"
        >
          <i className="fas fa-plus mr-2"></i>
          Add New Project
        </button>
      </div>

      {/* Message Display */}
      {message.text && (
        <div
          className={`p-4 rounded-lg ${
            message.type === "success"
              ? "bg-green-50 border border-green-200 text-green-700"
              : message.type === "error"
              ? "bg-red-50 border border-red-200 text-red-700"
              : "bg-blue-50 border border-blue-200 text-blue-700"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Project Form */}
      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-secondary mb-4">
            {editingProject ? "Edit Project" : "Add New Project"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status *
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {statusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration
                </label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder="e.g., 6 months"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Participants
                </label>
                <input
                  type="text"
                  name="participants"
                  value={formData.participants}
                  onChange={handleInputChange}
                  placeholder="e.g., 500 students"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g., Tbilisi, Georgia"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Image
              </label>
              <div className="space-y-3">
                {/* Image URL Input */}
                <div>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Enter image URL (e.g., from Unsplash, Imgur, or your
                    website)
                  </p>
                </div>

                {/* Image Preview */}
                {(imagePreview || formData.image) && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Preview:
                    </p>
                    <div className="relative inline-block">
                      <img
                        src={imagePreview || formData.image}
                        alt="Project preview"
                        className="w-32 h-32 object-cover rounded-lg border border-gray-300"
                      />
                    </div>
                  </div>
                )}

                {/* File Upload (Disabled for free plan) */}
                <div className="mt-3">
                  <p className="text-sm text-gray-500 mb-2">
                    File Upload (requires paid plan):
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-gray-100 cursor-not-allowed"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    File upload requires Firebase Storage (Blaze plan). Use
                    image URL instead.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Describe the project..."
              />
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={uploading}
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                  uploading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary hover:bg-primary-dark text-white"
                }`}
              >
                {uploading ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Saving...
                  </>
                ) : editingProject ? (
                  "Update Project"
                ) : (
                  "Add Project"
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Projects List */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-secondary">
            Current Projects ({projects.length})
          </h3>
        </div>

        {loading ? (
          <div className="p-6 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="mt-2 text-gray-500">Loading projects...</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            <i className="fas fa-folder-open text-4xl mb-4 text-gray-300"></i>
            <p className="text-lg font-medium">No projects found</p>
            <p className="text-sm">
              Add your first project using the button above!
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Project
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {project.title}
                        </div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {project.description}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {categories.find((c) => c.id === project.category)
                          ?.name || project.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          project.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : project.status === "Completed"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {project.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleEdit(project)}
                        className="text-primary hover:text-primary-dark mr-3"
                        title="Edit project"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="text-red-600 hover:text-red-900"
                        title="Delete project"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectManager;
