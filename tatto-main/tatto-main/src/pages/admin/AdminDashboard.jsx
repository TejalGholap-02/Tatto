import React, { useState } from "react";
import ImageDashboard from "./Dashboard"; // Your image upload dashboard component
import VideoDashboard from "./VideoDashboard"; // Your video upload dashboard component

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("images");

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Panel Dashboard</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-gray-700">
        <button
          onClick={() => setActiveTab("images")}
          className={`py-2 px-6 rounded-t-lg font-semibold focus:outline-none ${
            activeTab === "images"
              ? "bg-orange-600 text-white shadow-lg"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Upload Images
        </button>

        <button
          onClick={() => setActiveTab("videos")}
          className={`py-2 px-6 rounded-t-lg font-semibold focus:outline-none ${
            activeTab === "videos"
              ? "bg-orange-600 text-white shadow-lg"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Upload Videos
        </button>
      </div>

      {/* Render the appropriate dashboard */}
      <div>
        {activeTab === "images" && <ImageDashboard />}
        {activeTab === "videos" && <VideoDashboard />}
      </div>
    </div>
  );
};

export default AdminDashboard;
