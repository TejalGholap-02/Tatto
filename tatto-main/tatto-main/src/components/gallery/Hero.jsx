import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {

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

  const titleVariants = {
    hidden: { opacity: 0, y: 50, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.3,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 10, 0],
      opacity: [0.5, 1, 0.5],
    },
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center text-white flex flex-col justify-center items-start px-10 overflow-hidden"
      style={{
        backgroundImage: "url('/image/tattoimg.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* 🎬 Animated Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/image/gallaryback.jpg')",
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* 🔲 Animated Overlay with Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      ></motion.div>

      {/* ✨ Animated Glow Elements */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl opacity-10"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Title */}
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold uppercase mb-6 tracking-wider overflow-hidden"
          variants={titleVariants}
        >
          {/* Character-by-character animation */}
          {"GALLERY".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 100, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                delay: 0.1 + i * 0.1,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              className="inline-block"
              whileHover={{
                scale: 1.2,
                textShadow: "0 0 25px rgba(255, 140, 0, 0.8)",
                color: "#FF8C00",
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Animated Description */}
        <motion.p
          className="text-lg leading-relaxed text-gray-300 max-w-xl"
          variants={textVariants}
        >
          Explore our Gallery to discover stunning tattoos created by our talented artists.
          From intricate designs to unique placements, our portfolio showcases the
          creativity we bring to life.
        </motion.p>

        {/* Animated Underline */}
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-orange-500 to-transparent mt-8 rounded-full shadow-lg"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ delay: 1, duration: 0.8 }}
        ></motion.div>

        {/* CTA Button with Animation */}
        {/* <motion.button
          className="mt-10 px-8 py-4 bg-orange-500 text-white font-bold uppercase tracking-wider rounded-lg hover:bg-orange-600 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(255, 140, 0, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Gallery
        </motion.button> */}
        {/* <motion.button
          className="mt-10 px-8 py-4 bg-orange-500 text-white font-bold uppercase tracking-wider rounded-lg hover:bg-orange-600 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(255, 140, 0, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("imagesection")} // ✅ ADD THIS LINE
        >
          Explore Gallery
        </motion.button> */}

      </motion.div>

      {/* Social Icons with Animation */}
      <motion.div
        className="absolute bottom-10 right-10 flex gap-6 z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Facebook */}
        <motion.a
          href="#"
          className="relative group"
          variants={socialIconVariants}
          whileHover="hover"
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-orange-500/20 blur-lg -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          ></motion.div>
          <motion.i
            className="fa-brands fa-facebook-f text-2xl hover:text-orange-500 transition-colors"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          ></motion.i>
        </motion.a>

        {/* Instagram */}
        <motion.a
          href="#"
          className="relative group"
          variants={socialIconVariants}
          transition={{ delay: 0.1 }}
          whileHover="hover"
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-orange-500/20 blur-lg -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.3,
            }}
          ></motion.div>
          <motion.i
            className="fa-brands fa-instagram text-2xl hover:text-orange-500 transition-colors"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.3,
            }}
          ></motion.i>
        </motion.a>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-20 left-10 flex flex-col items-center gap-2 z-20"
        animate="animate"
        variants={scrollIndicatorVariants}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <span className="text-sm text-gray-400 uppercase tracking-wider">Scroll</span>
        <motion.i
          className="fa-solid fa-chevron-down text-orange-500"
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        ></motion.i>
      </motion.div>

      {/* Floating Particles Effect */}
      {[1, 2, 3, 4, 5].map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-2 h-2 bg-orange-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -200, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + particle,
            repeat: Infinity,
            delay: particle * 0.5,
          }}
        ></motion.div>
      ))}
    </section>
  );
};

export default HeroSection;
