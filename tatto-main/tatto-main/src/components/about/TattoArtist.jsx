import React from "react";
import { motion } from "framer-motion";

const TattoArtist = () => {
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const boxVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(255, 140, 0, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      className="relative text-white min-h-screen py-20 px-6 md:px-20 overflow-hidden"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#111",
      }}
    >
      {/* 🎬 Animated Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* ✨ Animated Background Glow */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500 rounded-full blur-3xl opacity-10"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Animated Title */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-12 uppercase tracking-wider"
          variants={fadeInUp}
        >
          {/* Character animation */}
          {"ELITE TATTOO STUDIOS".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block"
              whileHover={{
                textShadow: "0 0 15px rgba(255, 140, 0, 0.8)",
                scale: 1.15,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Layout */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column - History */}
          <motion.div
            variants={slideInLeft}
            className="space-y-4"
          >
            {/* History Title */}
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-6 relative inline-block"
              variants={fadeInUp}
            >
              HISTORY
              {/* Animated underline */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.h2>

            {/* History Paragraphs with stagger */}
            {[
              "With over a decade of experience, Elite Tattoo Studios has become a cornerstone in the tattoo community. What began as a modest studio with a deep passion for the art of tattooing has grown into a well-respected space known for its commitment to creativity, professionalism, and client satisfaction.",
              "Our team of skilled artists brings nearly 50 years of combined expertise, with each artist specializing in various styles—from traditional and fine line to intricate hyper-realism and neo-traditional designs. This diversity ensures we can cater to every client's vision, no matter how unique.",
              "We pride ourselves on high standards of safety and hygiene, using only brand-new needles and thoroughly sanitizing stations after each session. Open daily from 12–8 pm, we welcome both appointments and walk-ins, aiming to make every client feel valued and at ease in our studio.",
              "At Elite Tattoo Studios, we're committed to turning our clients' ideas into lasting, meaningful works of art, fostering a welcoming environment that celebrates individual expression and the art of tattooing.",
            ].map((paragraph, idx) => (
              <motion.p
                key={idx}
                className="leading-relaxed text-gray-300 text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Right Column - Vision & Mission */}
          <motion.div
            className="space-y-10"
            variants={slideInRight}
          >
            {/* Vision Box */}
            <motion.div
              className="border-2 border-orange-500 p-8 relative group"
              variants={boxVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 border-2 border-orange-500 opacity-0 group-hover:opacity-100"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(255, 140, 0, 0)",
                    "0 0 20px rgba(255, 140, 0, 0.5)",
                    "0 0 0px rgba(255, 140, 0, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              ></motion.div>

              {/* Vision Content */}
              <motion.h3
                className="text-xl md:text-2xl font-bold mb-4 relative z-10 uppercase tracking-wider"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                VISION
              </motion.h3>
              <motion.p
                className="text-gray-300 leading-relaxed relative z-10 text-sm md:text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Our vision is to provide exceptional tattoo experiences, blending artistry with professionalism.
                We're dedicated to creating a safe, welcoming space where clients' unique styles are brought to life.
              </motion.p>

              {/* Background accent */}
              <motion.div
                className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></motion.div>
            </motion.div>

            {/* Mission Box */}
            <motion.div
              className="border-2 border-orange-500 p-8 relative group"
              variants={boxVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 border-2 border-orange-500 opacity-0 group-hover:opacity-100"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(255, 140, 0, 0)",
                    "0 0 20px rgba(255, 140, 0, 0.5)",
                    "0 0 0px rgba(255, 140, 0, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              ></motion.div>

              {/* Mission Content */}
              <motion.h3
                className="text-xl md:text-2xl font-bold mb-4 relative z-10 uppercase tracking-wider"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                MISSION
              </motion.h3>
              <motion.p
                className="text-gray-300 leading-relaxed relative z-10 text-sm md:text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Our mission is to deliver high-quality, personalized tattoo services.
                With a focus on safety, creativity, and client satisfaction, we aim to make each
                experience memorable to individual expression.
              </motion.p>

              {/* Background accent */}
              <motion.div
                className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TattoArtist;
