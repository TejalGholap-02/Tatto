import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import download from "../../assets/download.jpg";

const About = () => {

    const navigate = useNavigate(); // ✅ ADD THIS

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const socialHoverVariants = {
    hover: {
      scale: 1.3,
      rotate: 10,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <section className="relative overflow-hidden min-h-screen text-white flex flex-col justify-center items-center">
      {/* 🎬 Animated Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${download})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* 🔲 Dark Overlay with Gradient Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      ></motion.div>

      {/* ✨ Animated Particles/Glow Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, orange 0%, transparent 50%)",
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* 🌟 Main Content */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 max-w-6xl mx-auto px-6 md:px-10 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* 🧭 Left Section - Slides in from left */}
        <motion.div
          className="flex-1 text-left"
          variants={slideInLeft}
        >
          {/* Animated Heading with Glow */}
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 uppercase tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Character-by-character animation */}
            {"About".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, rotate: -10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block"
                whileHover={{
                  textShadow: "0 0 20px rgba(255, 140, 0, 0.8)",
                  scale: 1.1,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="text-lg md:text-xl max-w-lg leading-relaxed text-gray-200"
            variants={itemVariants}
          >
            With over a decade in business, our studio offers both booked and
            walk-in services daily from 12–8 PM. Our artists bring nearly 50 years
            of combined experience, creativity, and passion for tattoo artistry.
          </motion.p>

          {/* Animated Underline */}
          <motion.div
            className="w-20 h-1 bg-orange-500 mt-6 rounded-full shadow-lg"
            initial={{ width: 0, boxShadow: "0 0 0px rgba(255, 140, 0, 0)" }}
            whileInView={{ 
              width: 80,
              boxShadow: "0 0 20px rgba(255, 140, 0, 0.8)"
            }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        {/* 💬 Right Section - Slides in from right */}
        <motion.div
          className="flex flex-col text-right space-y-3 text-lg tracking-wider font-light md:w-1/3"
          variants={slideInRight}
        >
          {/* 🌐 Social Icons with Enhanced Animations */}
          <motion.div
            className="flex justify-end space-x-8 mt-6 text-3xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Facebook */}
            <motion.a
              href="#"
              className="relative group"
              variants={socialHoverVariants}
              whileHover="hover"
            >
              <motion.i
                className="fab fa-facebook-f text-white transition-all duration-300"
                whileHover={{
                  textShadow: "0 0 20px rgba(255, 140, 0, 0.8)",
                  color: "#FF8C00",
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  delay: 0,
                  repeat: Infinity,
                }}
              ></motion.i>
              <motion.div
                className="absolute inset-0 rounded-full bg-orange-500/20 blur-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  delay: 0,
                  repeat: Infinity,
                }}
              ></motion.div>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="#"
              className="relative group"
              variants={socialHoverVariants}
              whileHover="hover"
            >
              <motion.i
                className="fab fa-instagram text-white transition-all duration-300"
                whileHover={{
                  textShadow: "0 0 20px rgba(255, 140, 0, 0.8)",
                  color: "#FF8C00",
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  delay: 0.2,
                  repeat: Infinity,
                }}
              ></motion.i>
              <motion.div
                className="absolute inset-0 rounded-full bg-orange-500/20 blur-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  delay: 0.2,
                  repeat: Infinity,
                }}
              ></motion.div>
            </motion.a>

            {/* Twitter */}
            <motion.a
              href="#"
              className="relative group"
              variants={socialHoverVariants}
              whileHover="hover"
            >
              <motion.i
                className="fab fa-x-twitter text-white transition-all duration-300"
                whileHover={{
                  textShadow: "0 0 20px rgba(255, 140, 0, 0.8)",
                  color: "#FF8C00",
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  delay: 0.4,
                  repeat: Infinity,
                }}
              ></motion.i>
              <motion.div
                className="absolute inset-0 rounded-full bg-orange-500/20 blur-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  delay: 0.4,
                  repeat: Infinity,
                }}
              ></motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
