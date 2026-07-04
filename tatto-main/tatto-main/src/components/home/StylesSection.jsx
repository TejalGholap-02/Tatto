import React, { useState } from "react";
import { motion } from "framer-motion";

function StylesSection() {
  const [isHovering, setIsHovering] = useState(false);

  const styles = [
    {
      id: 1,
      title: 'Traditional',
      description: 'Bold lines, vibrant colors, and classic designs',
      icon: '⚓',
      image: '/images/stylesection1.jpg'
    },
    {
      id: 2,
      title: 'Blackwork',
      description: 'Pure black ink with geometric patterns',
      icon: '◆',
      image: '/images/stylesection2.jpg'
    },
    {
      id: 3,
      title: 'Realism',
      description: 'Lifelike portraits and detailed imagery',
      icon: '👁️',
      image: '/images/stylesection3.jpg'
    },
    {
      id: 4,
      title: 'Minimalist',
      description: 'Simple, clean lines with maximum impact',
      icon: '─',
      image: '/images/stylesection4.jpg'
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scrollingVariants = {
    animate: {
      x: [0, -2000],
      transition: {
        duration: isHovering ? 0 : 20,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    },
  };

  const cardVariants = {
    hover: {
      scale: 1.08,
      y: -10,
      boxShadow: "0 20px 40px rgba(255, 140, 0, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background accent */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-5"
        animate={{
          y: [0, 50, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title with Animation */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider"
            variants={titleVariants}
          >
            {/* Character animation for title */}
            {"Our Styles".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block text-orange-800 text-shadow: 0 0 15px rgba(228, 72, 20, 0.8)"
                whileHover={{
                  textShadow: "0 0 15px rgba(255, 140, 0, 0.8)",
                  scale: 1.15,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            From bold traditional to intricate blackwork, we specialize in diverse tattoo styles
          </motion.p>

          {/* Animated underline */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        {/* Scrolling Cards Container */}
        <motion.div
          className="flex gap-8 overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Animated scrolling wrapper */}
          <motion.div
            className="flex gap-8"
            variants={scrollingVariants}
            animate="animate"
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
            {/* Display styles twice for infinite scroll effect */}
            {[...styles, ...styles].map((style, index) => (
              <motion.div
                key={`${style.id}-${index}`}
                className="group relative bg-black text-white overflow-hidden cursor-pointer flex-shrink-0 w-80 h-96 rounded-lg shadow-lg"
                variants={cardVariants}
                whileHover="hover"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {/* Background Image with smooth transition */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: isHovering && index < styles.length ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={style.image}
                    alt={style.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  {/* Icon with animation */}
                  <motion.div
                    className="text-5xl mb-4"
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: isHovering ? 0 : 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {style.icon}
                  </motion.div>

                  <div>
                    {/* Title with animation */}
                    <motion.h3
                      className="text-2xl font-bold uppercase tracking-wide mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {style.title}
                    </motion.h3>

                    {/* Description with animation */}
                    <motion.p
                      className="text-gray-300 text-sm leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {style.description}
                    </motion.p>
                  </div>

                  {/* Explore button with animation */}
                  <motion.div
                    className="mt-6 inline-flex items-center text-sm uppercase tracking-wider font-semibold text-orange-500"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: isHovering ? 0 : 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Explore
                    <motion.span
                      className="ml-2"
                      animate={{
                        x: [0, 8, 0],
                      }}
                      transition={{
                        duration: isHovering ? 0 : 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>

                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 border-2 border-orange-500 rounded-lg opacity-0"
                  animate={{
                    opacity: isHovering && index < styles.length ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.div
          className="text-center mt-12 text-gray-500 text-sm"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          Hover to pause • Scroll left →
        </motion.div> */}
      </div>
    </section>
  );
}

export default StylesSection;
