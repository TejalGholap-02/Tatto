import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// const API_URL = "http://localhost:3000";
const API_URL = "https://tattobackend.onrender.com";

const ImageSection = () => {
  const [allImages, setAllImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadFiles, setUploadFiles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState("traditional"); // ✅ Selected upload style
  const [showUploadModal, setShowUploadModal] = useState(false); // ✅ Show upload modal

  // Define tattoo style tabs
  const tabs = [
    { id: "all", label: "All Designs", icon: "⭐" },
    { id: "traditional", label: "Traditional", icon: "⚓" },
    { id: "blackwork", label: "Blackwork", icon: "◆" },
    { id: "realism", label: "Realism", icon: "👁️" },
    { id: "minimalist", label: "Minimalist", icon: "─" },
  ];

  const uploadStyles = [
    { id: "traditional", label: "Traditional", icon: "⚓" },
    { id: "blackwork", label: "Blackwork", icon: "◆" },
    { id: "realism", label: "Realism", icon: "👁️" },
    { id: "minimalist", label: "Minimalist", icon: "─" },
  ];

  const [activeTab, setActiveTab] = useState("all");

  // Fetch images from backend on mount
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await fetch(`${API_URL}/api/images`);
      const data = await res.json();
      if (data.success && data.data.length > 0) {
        setAllImages(data.data);
        setFilteredImages(data.data);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  // Filter images by tab/style
  const filterImagesByTab = (tabId) => {
    setActiveTab(tabId);

    if (tabId === "all") {
      setFilteredImages(allImages);
    } else {
      const filtered = allImages.filter((img) => {
        const style = img.documentType?.toLowerCase() || "";
        return style.includes(tabId.toLowerCase());
      });
      setFilteredImages(filtered);
    }
  };

  const handleFileChange = (e) => {
    setUploadFiles(Array.from(e.target.files));
  };

  // Convert relative path to full URL
  const getFullImageUrl = (fileUrl) => {
    if (!fileUrl) return "";
    if (fileUrl.startsWith("http")) return fileUrl;
    return `${API_URL}/${fileUrl}`;
  };

  // Upload images with selected style
  const handleUpload = async () => {
    if (uploadFiles.length === 0) {
      alert("Please select image(s) to upload.");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < uploadFiles.length; i++) {
      formData.append("documents", uploadFiles[i]);
    }
    // ✅ Send selected style to backend
    formData.append("documentType", selectedStyle);

    try {
      const res = await fetch(`${API_URL}/api/images/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.status === "success") {
        alert("Images uploaded successfully!");
        fetchImages();
        setUploadFiles([]);
        setShowUploadModal(false);
      } else {
        alert("Upload failed");
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed");
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  const tabVariants = {
    inactive: { opacity: 0.6, scale: 0.95 },
    active: {
      opacity: 1,
      scale: 1,
      boxShadow: "0 0 20px rgba(255, 140, 0, 0.5)",
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <div className="bg-[#1f1f1f] min-h-screen px-4 sm:px-6 py-12 max-w-9xl mx-auto">
      {/* Title */}
      <motion.h2
        className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center uppercase tracking-wider"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {"ELITE TATTOO STUDIOS".split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="inline-block"
            whileHover={{
              textShadow: "0 0 15px rgba(255, 140, 0, 0.8)",
              scale: 1.15,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-gray-400 text-center mb-12 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Browse our gallery by tattoo style
      </motion.p>

      {/* Upload Button */}
      {/* <motion.div
        className="flex justify-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
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
      </motion.div> */}

      {/* Tab Navigation */}
      <motion.div
        className="flex justify-center gap-4 mb-12 flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => filterImagesByTab(tab.id)}
            className={`px-6 py-3 rounded-full font-semibold uppercase tracking-wider transition-all text-sm md:text-base ${
              activeTab === tab.id
                ? "bg-orange-500 text-white shadow-lg"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            variants={tabVariants}
            animate={activeTab === tab.id ? "active" : "inactive"}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 400 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Image Count */}
      <motion.p
        className="text-center text-gray-400 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {filteredImages.length} design{filteredImages.length !== 1 ? "s" : ""} found
      </motion.p>

      {/* Images Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={activeTab}
      >
        {filteredImages.length > 0 ? (
          filteredImages.map(({ _id, fileUrl, fileName }) => (
            <motion.div
              key={_id}
              onClick={() => setSelectedImage(getFullImageUrl(fileUrl))}
              className="cursor-pointer overflow-hidden rounded-xl shadow-lg group relative"
              variants={itemVariants}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 10px 30px rgba(255, 140, 0, 0.4)",
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={getFullImageUrl(fileUrl)}
                alt={fileName || `Tattoo`}
                className="w-full h-auto object-cover aspect-square group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <motion.span
                  className="text-white text-lg font-bold"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  👁️ View
                </motion.span>
              </motion.div>
            </motion.div>
          ))
        ) : (
          <motion.div
            className="col-span-full text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-400 text-lg">No images found in this category</p>
          </motion.div>
        )}
      </motion.div>

      {/* Upload Modal */}
      {/* {showUploadModal && (
        <motion.div
          onClick={() => setShowUploadModal(false)}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 p-8 rounded-lg max-w-2xl w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Upload Images</h3>

            {/* Select Tattoo Style */}
            {/* <div className="mb-6">
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
                        ? "bg-orange-500 text-white shadow-lg"
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
            </div> */}

            {/* File Input */}
            {/* <div className="mb-6">
              <label className="text-gray-300 font-semibold mb-3 block">
                Select Images
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border-2 border-gray-700 focus:border-orange-500"
              />
              {uploadFiles.length > 0 && (
                <p className="text-green-400 mt-2">
                  {uploadFiles.length} file(s) selected
                </p>
              )}
            </div> */}

            {/* Preview */}
            {/* {uploadFiles.length > 0 && (
              <div className="mb-6">
                <label className="text-gray-300 font-semibold mb-3 block">
                  Preview
                </label>
                <div className="grid grid-cols-4 gap-3 max-h-40 overflow-y-auto">
                  {Array.from(uploadFiles).map((file, idx) => (
                    <img
                      key={idx}
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${idx}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            )} */}

            {/* Buttons */}
            {/* <div className="flex gap-4">
              <motion.button
                onClick={handleUpload}
                disabled={uploadFiles.length === 0}
                className="flex-1 px-6 py-3 bg-green-600 text-white font-bold uppercase rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Upload ({uploadFiles.length})
              </motion.button>
              <motion.button
                onClick={() => {
                  setShowUploadModal(false);
                  setUploadFiles([]);
                }}
                className="flex-1 px-6 py-3 bg-gray-700 text-white font-bold uppercase rounded-lg hover:bg-gray-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
            </div> */}
          {/* </motion.div> */}
        {/* </motion.div> */}
      {/* )}  */}

      {/* Image Lightbox */}
      {selectedImage && (
        <motion.div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="relative max-w-5xl w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <img
              src={selectedImage}
              alt="Selected Tattoo"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg mx-auto"
            />

            {/* Close Button */}
            <motion.button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg hover:bg-orange-600"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(255, 140, 0, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              ✕ Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ImageSection;
