// src/components/home/HeroSection.jsx
import React, { useState, useEffect } from "react";

function HeroSection() {
  const [visibleImages, setVisibleImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const tattooData = [
    { image: "/images/homehero1.jpg", title: "Spider Tattoo", artist: "Back Piece", style: "Blackwork" },
    { image: "/images/homehero2.jpg", title: "Dragon Sleeve", artist: "Arm Design", style: "Traditional" },
    { image: "/images/homehero3.png", title: "Portrait", artist: "Realism", style: "Portrait" },
    { image: "/images/homehero4.jpg", title: "Sword Design", artist: "Leg Piece", style: "Geometric" },
    { image: "/images/homehero5.jpg", title: "Skull & Bones", artist: "Chest Piece", style: "Traditional" },
    { image: "/images/homehero6.jpg", title: "Minimal Line", artist: "Forearm", style: "Minimalist" },
    { image: "/images/homehero7.jpg", title: "Abstract Art", artist: "Back Design", style: "Abstract" },
  ];

  useEffect(() => {
    tattooData.forEach((_, i) => {
      setTimeout(() => setVisibleImages(prev => [...prev, i]), i * 250);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % tattooData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white overflow-hidden">

      {/* --- Text Section --- */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-16 sm:pt-20 md:pt-24 lg:pt-28">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight space-y-2">
          <span className="block">Crafting Meaningful Tattoos</span>
          <span className="block italic text-gray-200">with Passion and Precision.</span>
        </h1>
      </div>

      {/* --- Image Carousel Section --- */}
      <div className="relative flex items-center justify-center w-full -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-16">
        <div className="relative w-full h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[520px]">
          {tattooData.map((tattoo, index) => {
            const position = (index - currentIndex + tattooData.length) % tattooData.length;
            const isVisible = visibleImages.includes(index);

            return (
              <div
                key={index}
                className={`absolute top-1/2 left-1/2 transition-all duration-1000 ease-out
                  ${isVisible ? "opacity-100" : "opacity-0"}`}
                style={{
                  transform: `
                    translate(-50%, -50%)
                    translateX(${(position - 3) * 160}px)
                    translateY(${Math.abs(position - 3) * 20}px)
                    scale(${position === 3 ? 1.15 : 0.8})
                    rotateY(${(position - 3) * 12}deg)
                  `,
                  zIndex: position === 3 ? 20 : 5 - Math.abs(position - 3),
                  filter: position === 3 ? "brightness(1)" : "brightness(0.6)",
                }}
              >
                <div className="w-36 h-52 sm:w-44 sm:h-60 md:w-52 md:h-72 lg:w-56 lg:h-80 bg-white rounded-lg overflow-hidden shadow-xl">
                  <img src={tattoo.image} alt={tattoo.title} className="w-full h-full object-cover" />
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-2 sm:p-3">
                    <h3 className="text-white text-xs sm:text-sm font-bold uppercase">{tattoo.title}</h3>
                    <p className="text-gray-300 text-[10px] sm:text-xs">{tattoo.artist}</p>
                    <p className="text-gray-400 text-[10px] sm:text-xs">{tattoo.style}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
