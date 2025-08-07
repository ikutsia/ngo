import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-light to-white">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-secondary">
                Admin Dashboard
              </h1>
              <p className="text-gray-text">
                Welcome back, {currentUser?.displayName || currentUser?.email}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-text">
                Logged in as: {currentUser?.email}
              </span>
              <button
                onClick={handleLogout}
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Stats Cards */}
            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <i className="fas fa-users text-white text-sm"></i>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-text truncate">
                        Total Users
                      </dt>
                      <dd className="text-lg font-medium text-secondary">
                        1,234
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-text truncate">
                        Active Projects
                      </dt>
                      <dd className="text-lg font-medium text-secondary">42</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-chart-line text-white text-sm"></i>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-text truncate">
                        Monthly Growth
                      </dt>
                      <dd className="text-lg font-medium text-secondary">
                        +12.5%
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-secondary mb-6">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-left">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <i className="fas fa-plus text-white"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary">
                      Add Project
                    </h3>
                    <p className="text-sm text-gray-text">
                      Create a new project
                    </p>
                  </div>
                </div>
              </button>

              <button className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-left">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <i className="fas fa-user-plus text-white"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary">
                      Add User
                    </h3>
                    <p className="text-sm text-gray-text">Invite new admin</p>
                  </div>
                </div>
              </button>

              <button className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-left">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <i className="fas fa-cog text-white"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary">
                      Settings
                    </h3>
                    <p className="text-sm text-gray-text">Manage preferences</p>
                  </div>
                </div>
              </button>

              <button className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-left">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <i className="fas fa-chart-bar text-white"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary">
                      Analytics
                    </h3>
                    <p className="text-sm text-gray-text">View reports</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-secondary mb-6">
              Recent Activity
            </h2>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-secondary">
                  Latest Updates
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="ml-3">
                      <p className="text-sm text-secondary">
                        New project "Education Initiative" was created
                      </p>
                      <p className="text-xs text-gray-text">2 hours ago</p>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="ml-3">
                      <p className="text-sm text-secondary">
                        User profile updated
                      </p>
                      <p className="text-xs text-gray-text">4 hours ago</p>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="ml-3">
                      <p className="text-sm text-secondary">
                        Training session scheduled
                      </p>
                      <p className="text-xs text-gray-text">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
