import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

// const API_URL = "http://localhost:3000";
const API_URL = "https://tattobackend.onrender.com";

export default function PodcastDashboard() {
  const [videos, setVideos] = useState([]);
  const [uploadFiles, setUploadFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updateFile, setUpdateFile] = useState(null);
  const [updateVideoId, setUpdateVideoId] = useState(null);
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const selectedCategory = "podcast"; // fixed category 'podcast'
  const [showUploadModal, setShowUploadModal] = useState(false);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const res = await fetch(`${API_URL}/api/videos?category=podcast`);
      const data = await res.json();
      if (data.success) {
        setVideos(data.data);
      } else {
        toast.error("Failed to load podcast videos");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to load podcast videos");
    }
  };

  const getFullVideoUrl = (fileUrl) => {
    if (!fileUrl) return "";
    if (fileUrl.startsWith("http")) return fileUrl;
    return `${API_URL}/${fileUrl}`;
  };

  const handleFileSelect = (e) => {
    setUploadFiles(Array.from(e.target.files));
  };

  // New Upload with title and description
  const handleUpload = async () => {
    if (uploadFiles.length === 0) {
      toast.error("No podcast videos selected for upload");
      return;
    }
    if (!title.trim()) {
      toast.error("Please provide a title");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    uploadFiles.forEach((file) => formData.append("videos", file));
    formData.append("category", selectedCategory);
    formData.append("title", title.trim());
    formData.append("description", description.trim());

    try {
      const res = await fetch(`${API_URL}/api/videos/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.status === "success") {
        toast.success("Podcast videos uploaded");
        setUploadFiles([]);
        setTitle("");
        setDescription("");
        setShowUploadModal(false);
        fetchVideos();
      } else {
        toast.error("Upload failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Upload failed");
    }
    setLoading(false);
  };

  const handleUpdateFileSelect = (e, id) => {
    setUpdateFile(e.target.files[0]);
    setUpdateVideoId(id);
  };

  const handleUpdate = async () => {
    if (!updateFile || !updateVideoId) {
      toast.error("Select a new video file to update.");
      return;
    }
    const formData = new FormData();
    formData.append("video", updateFile);
    if (updateTitle.trim()) formData.append("title", updateTitle.trim());
    if (updateDescription.trim()) formData.append("description", updateDescription.trim());

    try {
      const res = await fetch(`${API_URL}/api/videos/${updateVideoId}`, {
        method: "PUT",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Podcast video updated");
        fetchVideos();
        setUpdateFile(null);
        setUpdateVideoId(null);
        setUpdateTitle("");
        setUpdateDescription("");
      } else {
        toast.error("Update failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Update failed");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this podcast video?")) return;
    try {
      const res = await fetch(`${API_URL}/api/videos/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Podcast video deleted");
        setVideos(videos.filter((v) => v._id !== id));
      } else {
        toast.error("Delete failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Delete failed");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Podcast Video Dashboard</h1>

      {/* Upload Form */}
      <div className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Video Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-gray-800 p-3 rounded border border-gray-700 text-white"
        />
        <textarea
          placeholder="Video Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full bg-gray-800 p-3 rounded border border-gray-700 text-white resize-none"
          rows={3}
        />
        <input
          type="file"
          multiple
          accept="video/*"
          onChange={handleFileSelect}
          className="block w-full text-white"
        />
        <button
          onClick={handleUpload}
          disabled={loading || uploadFiles.length === 0}
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {loading ? "Uploading..." : `Upload (${uploadFiles.length})`}
        </button>
      </div>

      {/* Videos List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map(({ _id, title, description, fileUrl }) => (
          <div key={_id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden group relative">
            <video
              src={getFullVideoUrl(fileUrl)}
              controls
              className="w-full h-48 object-cover"
              preload="metadata"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{title || "Untitled Podcast"}</h3>
              {description && <p className="text-sm text-gray-400">{description}</p>}
              <p className="text-sm text-gray-400 mt-1">Podcast</p>
            </div>
            <div className="absolute top-2 right-2 flex flex-col gap-2">
              <label className="cursor-pointer bg-green-600 rounded p-1" title="Change podcast video">
                ✏️
                <input
                  type="file"
                  accept="video/*"
                  className="hidden"
                  onChange={(e) => handleUpdateFileSelect(e, _id)}
                />
              </label>
              {/* Additional inputs for updating title and description */}
              {updateVideoId === _id && (
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="New title"
                    value={updateTitle}
                    onChange={(e) => setUpdateTitle(e.target.value)}
                    className="bg-gray-700 p-1 rounded text-white text-sm"
                  />
                  <textarea
                    placeholder="New description"
                    value={updateDescription}
                    onChange={(e) => setUpdateDescription(e.target.value)}
                    rows={2}
                    className="bg-gray-700 p-1 rounded text-white text-sm resize-none"
                  />
                  <button
                    onClick={handleUpdate}
                    className="bg-blue-600 text-white rounded px-2 py-1 text-sm"
                  >
                    Save
                  </button>
                </div>
              )}
              <button
                onClick={() => handleDelete(_id)}
                className="bg-red-600 text-white rounded px-2 py-1 text-sm"
                title="Delete podcast video"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
