import React from "react";
import img1  from "../../assets/img1.jpg";
import img2  from "../../assets/img2.jpg";
import img3  from "../../assets/img3.jpg";
import img4  from "../../assets/img4.jpg";

const artists = [
  {
    name: "Bill Hiscock",
    image: img1,
  },
  {
    name: "Tattoo Sample",
    image: img2,
  },
  {
    name: "John Doe",
    image: img3,
  },
  {
    name: "Jane Smith",
    image: img4,
  },
]

const ArtistsSection = () => {
  return (
    <section className="bg-[#0e0e0e] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-10 text-center">
          Tattoo Artists
        </h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                <h3 className="text-lg font-semibold">{artist.name}</h3>
                <button className="text-sm uppercase tracking-widest mt-2 flex items-center gap-2">
                   <span>↗</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Description + Button */}
        {/* <div className="mt-16 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-lg max-w-2xl">
            Our tattoo artists bring diverse skills and years of experience to
            every design. Dedicated to excellence and creativity, they
            collaborate closely with clients to craft unique tattoos that
            reflect personal style.
          </p>
          <button className="border border-gray-400 px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition duration-300">
            Learn More
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ArtistsSection;
