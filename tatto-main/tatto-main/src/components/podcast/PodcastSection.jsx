import React, { useState, useEffect } from "react";

// const API_URL = "http://localhost:3000";
const API_URL = "https://tattobackend.onrender.com";


const PodcastSection = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetchPodcasts();
  }, []);

  const fetchPodcasts = async () => {
    try {
      const res = await fetch(`${API_URL}/api/videos?category=podcast`);
      const data = await res.json();
      if (data.success) {
        setPodcasts(data.data);
      } else {
        setPodcasts([]);
      }
    } catch (err) {
      console.error("Failed to fetch podcast videos:", err);
      setPodcasts([]);
    }
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-5 max-w-7xl">
        <h2 className="text-5xl font-extrabold text-center mb-12 uppercase tracking-wider">
          Podcast & Videos
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {podcasts.length > 0 ? (
            podcasts.map(({ _id, title, description, fileUrl }) => (
              <div key={_id} className="bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden shadow-inner">
                  <video
                    controls
                    className="w-full h-full object-cover"
                    src={`${API_URL}/${fileUrl}`}
                  >
                    Sorry, your browser does not support embedded videos.
                  </video>
                </div>
                <h3 className="text-2xl font-semibold mb-2">{title || "Untitled Podcast"}</h3>
                <p className="text-gray-300 mb-3">{description || ""}</p>
                {/* If you store date, parse and display here */}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full">No podcasts available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
