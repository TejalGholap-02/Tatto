import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const services = [
  {
    title: "Traditional Tattoos",
    description:
      "Classic, bold designs with strong outlines and vibrant colors. These timeless motifs often feature nautical and symbolic elements.",
    img: "/images/traditional_img.jpg",
  },
  {
    title: "Blackwork Tattoos",
    description:
      "Using only solid black, blackwork tattoos create striking geometric patterns and tribal designs, perfect for minimalist aesthetics.",
    img: "/images/blackwork_img.jpg",
  },
  {
    title: "Watercolor Tattoos",
    description:
      "Flowing colors with no black outlines, mimicking watercolor paintings for a soft, artistic, and vibrant look.",
    img: "/images/watercolor_img.jpg",
  },
  {
    title: "Realism Tattoos",
    description:
      "Highly detailed and lifelike designs replicating photos or portraits with remarkable depth and shading.",
    img: "/images/realism_img.jpg",
  },
  {
    title: "Portrait Tattoos",
    description:
      "Immortalize loved ones or pets with realistic facial features and expressions, often serving as heartfelt tributes.",
    img: "/images/portrait_img.jpg",
  },
  {
    title: "Minimalist Tattoos",
    description:
      "Small, simple designs using clean lines to make a subtle yet impactful statement.",
    img: "/images/minimalistic_img.jpg",
  },
  {
    title: "Surrealism Tattoos",
    description:
      "Creative, dreamlike art blending reality and fantasy with clever illusions and designs.",
    img: "/images/surrealism_img.jpg",
  },
  {
    title: "Neo-Traditional Tattoos",
    description:
      "Modern take on traditional styles featuring bold lines with realistic shading and vibrant colors.",
    img: "/images/neotraditional_img.jpg",
  },
  {
    title: "Japanese Tattoos",
    description:
      "Classical Japanese themes featuring detailed, flowing designs like dragons, koi fish, and cherry blossoms.",
    img: "/images/japanese_img.jpg",
  },
];

const ServiceSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }));
  }, [controls]);

  return (
    <section className="bg-gradient-to-b from-black via-gray-950 to-black py-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-12 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
          Our Tattoo Styles
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map(({ title, description, img }, idx) => (
            <motion.div
              key={title}
              custom={idx}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={controls}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255,100,20,0.4)",
              }}
              className="relative rounded-2xl overflow-hidden backdrop-blur-md bg-gray-900/60 border border-gray-800 hover:border-orange-500 transition-all duration-500 group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 opacity-80"></div>
              </div>

              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-orange-400 uppercase mb-2 tracking-wide">
                  {title}
                </h3>
                <div className="h-[2px] w-14 bg-orange-500 mb-3" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Subtle glowing line at hover bottom */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-600 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
