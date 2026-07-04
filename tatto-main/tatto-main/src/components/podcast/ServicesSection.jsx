import React from "react";

const services = [
  {
    title: "Custom Tattoos",
    description: "Work with our artists to design a tattoo that's unique to you.",
    icon: "🎨",
  },
  {
    title: "Piercing",
    description: "Safe, hygienic piercing with a variety of jewelry options.",
    icon: "🧷",
  },
  {
    title: "Tattoo Cover-Up",
    description: "Transform old tattoos into stunning new art.",
    icon: "🔁",
  },
  {
    title: "Consultations",
    description: "Free sessions to brainstorm your next piece or piercing.",
    icon: "💬",
  },
];

const ServicesSection = () => (
  <section className="py-20 bg-gray-900 text-white ">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-center uppercase tracking-wider mt-20"></h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, idx) => (
          <div key={service.title} className="bg-gray-800 rounded-xl p-8 shadow-lg hover:bg-orange-500/20 transition">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
