import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img1.jpg";
// import img5 from "../../assets/img4.jpeg";
// import img6 from "../../assets/img4.jpeg";
// import img7 from "../../assets/img4.jpeg";
// import img8 from "../../assets/img4.jpeg";

// import img9 from "../../assets/tattoo-9.jpg";

const VisionMission = () => {
  const images = [img1, img2, img3, img4];

      const navigate = useNavigate(); // ✅ ADD THIS


  // Smooth cinematic animation (3s)
  const imageAnimation = {
    hidden: { opacity: 0, scale: 1.4, y: 100, filter: "blur(10px)" },
    show: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: index * 0.2,
        duration: 3, // 3-second cinematic entry
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Glowing background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,0,150,0.2),transparent_70%)] blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,150,255,0.2),transparent_70%)] blur-3xl"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center mb-14"
      >
        <h2 className="text-6xl font-extrabold uppercase tracking-wider bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          HD Design Showcase
        </h2>
        <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          Dive into our high-definition gallery of tattoo and piercing art — every design tells a story with light, depth, and motion.
        </p>
      </motion.div>

      {/* Gallery */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((src, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={imageAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.05)] group"
          >
            <motion.img
              src={src}
              alt={`Tattoo ${index + 1}`}
              className="w-full h-72 object-cover rounded-3xl transition-transform duration-[3000ms] group-hover:scale-110"
            />

            {/* HD Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end justify-center">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white text-xl font-semibold mb-6 drop-shadow-lg"
              >
                ✦ View Art ✦
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 flex justify-center mt-16"
      >
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 25px rgba(255,0,150,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="px-10 py-3 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-lg"

                    onClick={() => navigate("/gallery")} // ✅ ADD THIS LINE

        >
          Explore More →
        </motion.button>
      </motion.div>
    </section>
  );
};

export default VisionMission;