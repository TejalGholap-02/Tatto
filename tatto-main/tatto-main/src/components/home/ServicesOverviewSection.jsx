// src/components/home/ServicesOverviewSection.jsx
import React, { useState, useEffect } from "react";

function ServicesOverviewSection() {
  const [visibleCards, setVisibleCards] = useState([]);

  // Animate cards appearing one by one
  useEffect(() => {
    [0, 1, 2, 3, 4, 5].forEach((index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 150); // 150ms delay between each card
    });
  }, []);

  const services = [
    {
      title: "Custom Tattoo Design",
      description: "Unique designs tailored to your vision using premium ink, ensuring a modern and personalized piece of art."
    },
    {
      title: "Professional Experience",
      description: "Licensed artists with 10+ years of experience across multiple tattoo styles and techniques."
    },
    {
      title: "Aftercare & Support",
      description: "Comprehensive aftercare instructions and free touch-ups to ensure perfect healing and longevity."
    },
    {
      title: "Sterile Environment",
      description: "Hospital-grade sterilization with single-use equipment maintaining highest safety standards."
    },
    {
      title: "Multiple Styles",
      description: "Specializing in blackwork, traditional, realism, minimalist, and geometric tattoo styles."
    },
    {
      title: "Free Consultation",
      description: "Complimentary design consultation to discuss your ideas, placement, and pricing options."
    }
  ];

  return (
    <section
      className="relative min-h-screen text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/servicebg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        
        {/* Title with typing animation */}
        <div className="mb-16 animate-slideDown">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-2 text-shadow-lg animate-typing overflow-hidden whitespace-nowrap border-r-4 border-orange-500 pr-2">
            Scope of Work
          </h2>
          <span className="text-orange-500 text-sm font-semibold tracking-widest animate-fadeIn delay-1000">02</span>
          <div className="mt-4 h-1 w-20 bg-orange-500 animate-expandWidth"></div>
        </div>

        {/* Services Grid with advanced animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl">
          
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group transform transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0 translate-x-0' 
                  : 'opacity-0 translate-y-10 -translate-x-10'
              } hover:scale-105`}
            >
              <div className="relative p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-500 overflow-hidden">
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="flex items-start relative z-10">
                  {/* Animated bullet point */}
                  <span className="text-orange-500 mr-3 text-xl group-hover:scale-125 group-hover:rotate-90 transition-all duration-300">
                    •
                  </span>
                  
                  <div className="flex-1">
                    {/* Title with letter-by-letter fade */}
                    <h3 className="font-bold text-lg mb-2 group-hover:text-orange-500 transition-colors duration-300">
                      {service.title.split('').map((char, i) => (
                        <span 
                          key={i}
                          className="inline-block animate-fadeInLetter"
                          style={{ animationDelay: `${visibleCards.includes(index) ? i * 0.03 : 0}s` }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                    </h3>
                    
                    {/* Description with fade-in */}
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300 animate-fadeIn delay-300">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Bottom border animation */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default ServicesOverviewSection;
