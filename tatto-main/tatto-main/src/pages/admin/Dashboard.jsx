import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

// const API_URL = "http://localhost:3000";
const API_URL = "https://tattobackend.onrender.com";


export default function Dashboard() {
  const [images, setImages] = useState([]);
  const [uploadFiles, setUploadFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updateFile, setUpdateFile] = useState(null);
  const [updateImageId, setUpdateImageId] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState("traditional"); // ✅ Selected upload style
  const [showUploadModal, setShowUploadModal] = useState(false); // ✅ Modal state

  const uploadStyles = [
    { id: "traditional", label: "Traditional", icon: "⚓" },
    { id: "blackwork", label: "Blackwork", icon: "◆" },
    { id: "realism", label: "Realism", icon: "👁️" },
    { id: "minimalist", label: "Minimalist", icon: "─" },
  ];

  // Fetch images on mount
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await fetch(`${API_URL}/api/images`);
      const data = await res.json();
      if (data.success) {
        console.log("Images fetched from DB:", data.data);
        setImages(data.data);
      } else {
        toast.error("Failed to load images");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      toast.error("Failed to load images");
    }
  };

  // Convert relative path to full URL
  const getFullImageUrl = (fileUrl) => {
    if (!fileUrl) return "";
    if (fileUrl.startsWith("http")) return fileUrl;
    return `${API_URL}/${fileUrl}`;
  };

  const handleFileSelect = (e) => {
    setUploadFiles(Array.from(e.target.files));
  };

  // ✅ Updated upload with selected style
  const handleUpload = async () => {
    if (!uploadFiles.length) {
      toast.error("No files selected for upload");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    uploadFiles.forEach((file) => formData.append("documents", file));
    formData.append("documentType", selectedStyle); // ✅ Send selected style

    try {
      const res = await fetch(`${API_URL}/api/images/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.status === "success") {
        toast.success(`Images uploaded as ${selectedStyle}`);
        setUploadFiles([]);
        setShowUploadModal(false); // ✅ Close modal
        fetchImages(); // Refresh image list from DB
      } else {
        toast.error("Upload failed");
      }
    } catch (err) {
      console.error("Upload error:", err);
      toast.error("Upload failed");
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this image?"))
      return;
    try {
      const res = await fetch(`${API_URL}/api/images/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Image deleted");
        setImages(images.filter((img) => img._id !== id));
      } else {
        toast.error("Delete failed");
      }
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("Delete failed");
    }
  };

  const handleUpdateFileSelect = (e, id) => {
    setUpdateFile(e.target.files[0]);
    setUpdateImageId(id);
  };

  const handleUpdate = async () => {
    if (!updateFile || !updateImageId) return;
    const formData = new FormData();
    formData.append("document", updateFile);
    try {
      const res = await fetch(`${API_URL}/api/images/${updateImageId}`, {
        method: "PUT",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Image updated");
        fetchImages(); // Refresh from DB
        setUpdateFile(null);
        setUpdateImageId(null);
      } else {
        toast.error("Update failed");
      }
    } catch (err) {
      console.error("Update error:", err);
      toast.error("Update failed");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-white">Tattoo Admin Dashboard</h1>

      {/* Upload Button */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.button
          onClick={() => setShowUploadModal(true)}
          className="px-8 py-3 bg-green-600 text-white font-bold uppercase tracking-wider rounded-lg hover:bg-green-700 transition-all"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          ⬆️ Upload Images
        </motion.button>
      </motion.div>

      {/* Images Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
        {images.map(({ _id, fileName, fileUrl, documentType }) => (
          <div
            key={_id}
            className="relative border border-gray-700 rounded overflow-hidden shadow-lg bg-gray-800 group"
          >
            <img
              src={getFullImageUrl(fileUrl)}
              alt={fileName || "Tattoo Image"}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Style Badge */}
            <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold uppercase">
              {documentType || "N/A"}
            </div>

            {/* Edit label with hidden input */}
            <label className="absolute top-2 right-2 bg-green-500 text-white rounded p-2 cursor-pointer hover:bg-green-600 transition">
              ✏️
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleUpdateFileSelect(e, _id)}
              />
            </label>

            {/* Save button, only visible for selected image */}
            {updateImageId === _id && updateFile && (
              <motion.button
                onClick={handleUpdate}
                className="absolute top-12 right-2 bg-blue-600 text-white rounded p-2 hover:bg-blue-700 transition"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                💾 Save
              </motion.button>
            )}

            {/* Delete button */}
            <motion.button
              onClick={() => handleDelete(_id)}
              className="absolute bottom-2 right-2 bg-red-500 text-white rounded p-2 hover:bg-red-600 transition"
              title="Delete Image"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              🗑️
            </motion.button>
          </div>
        ))}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <motion.div
          onClick={() => setShowUploadModal(false)}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 p-8 rounded-lg max-w-2xl w-full border border-gray-700"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Upload Images</h3>

            {/* Select Tattoo Style */}
            <div className="mb-6">
              <label className="text-gray-300 font-semibold mb-3 block">
                Select Tattoo Style
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {uploadStyles.map((style) => (
                  <motion.button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`p-3 rounded-lg font-semibold uppercase tracking-wider transition-all text-sm ${
                      selectedStyle === style.id
                        ? "bg-green-600 text-white shadow-lg"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="block text-lg mb-1">{style.icon}</span>
                    {style.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* File Input */}
            <div className="mb-6">
              <label className="text-gray-300 font-semibold mb-3 block">
                Select Images
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileSelect}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border-2 border-gray-700 focus:border-green-500 outline-none"
              />
              {uploadFiles.length > 0 && (
                <p className="text-green-400 mt-2 font-semibold">
                  ✅ {uploadFiles.length} file(s) selected
                </p>
              )}
            </div>

            {/* Preview */}
            {uploadFiles.length > 0 && (
              <div className="mb-6">
                <label className="text-gray-300 font-semibold mb-3 block">
                  Preview
                </label>
                <div className="grid grid-cols-4 gap-3 max-h-40 overflow-y-auto">
                  {Array.from(uploadFiles).map((file, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Preview ${idx}`}
                        className="w-full h-24 object-cover rounded-lg border border-gray-600"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-4">
              <motion.button
                onClick={handleUpload}
                disabled={uploadFiles.length === 0 || loading}
                className="flex-1 px-6 py-3 bg-green-600 text-white font-bold uppercase rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? "⏳ Uploading..." : `✅ Upload (${uploadFiles.length})`}
              </motion.button>
              <motion.button
                onClick={() => {
                  setShowUploadModal(false);
                  setUploadFiles([]);
                }}
                className="flex-1 px-6 py-3 bg-gray-700 text-white font-bold uppercase rounded-lg hover:bg-gray-600 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ✕ Cancel
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
