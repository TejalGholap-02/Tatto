// // src/components/common/Navbar.jsx
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { FiUser } from "react-icons/fi";

// function Navbar() {
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Check if we're on home page
//   const isHomePage = location.pathname === '/';

//   // Handle scroll to change navbar background
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const isActive = (path) => location.pathname === path;

//   // Transparent on home page initially, solid black when scrolled or on other pages
//   const navClasses = isHomePage && !isScrolled
//     ? 'bg-black bg-opacity-80 backdrop-blur-sm'  // ✅ Black with transparency
//     : 'bg-black shadow-lg';

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-4">

//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <span className="text-2xl font-bold text-white tracking-wider">
//               INK STUDIO
//             </span>
//           </Link>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex space-x-8">
//             <li>
//               <Link
//                 to="/"
//                 className={`text-white hover:text-gray-300 transition-colors text-sm uppercase tracking-wide ${isActive('/') ? 'border-b-2 border-white pb-1' : ''
//                   }`}
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 className={`text-white hover:text-gray-300 transition-colors text-sm uppercase tracking-wide ${isActive('/about') ? 'border-b-2 border-white pb-1' : ''
//                   }`}
//               >
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/gallery"
//                 className={`text-white hover:text-gray-300 transition-colors text-sm uppercase tracking-wide ${isActive('/gallery') ? 'border-b-2 border-white pb-1' : ''
//                   }`}
//               >
//                 Gallery
//               </Link>
//             </li>
//                         <li>
//               <Link
//                 to="/services"
//                 className={`text-white hover:text-gray-300 transition-colors text-sm uppercase tracking-wide ${isActive('/services') ? 'border-b-2 border-white pb-1' : ''
//                   }`}
//               >
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className={`text-white hover:text-gray-300 transition-colors text-sm uppercase tracking-wide ${isActive('/contact') ? 'border-b-2 border-white pb-1' : ''
//                   }`}
//               >
//                 Contact
//               </Link>
//             </li>

//           </ul>

//           {/* Book Appointment Button */}
//           {/* <Link
//             to="/contact"
//             className="hidden md:block bg-white text-black px-6 py-2 text-sm uppercase tracking-wide font-semibold hover:bg-gray-200 transition-colors"
//           >
//             Book Now
//           </Link> */}
//           <Link
//             to="/login"
//             className="flex items-center gap-2 bg-black-500 hover:bg-orange-600 text-white font-medium px-7 py-2 rounded-[16px] border border-orange-600 shadow-sm text-lg transition-all duration-200"
//             style={{ boxSizing: "border-box" }}
//           >
//             <FiUser size={22} />
//             <span>Admin Login</span>
//           </Link>

//           {/* Mobile Hamburger */}
//           <button
//             className="md:hidden text-white"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {isOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-black border-t border-gray-800">
//             <ul className="py-4 space-y-4">
//               <li>
//                 <Link
//                   to="/"
//                   className={`block text-white hover:text-gray-300 text-sm uppercase tracking-wide ${isActive('/') ? 'font-bold' : ''
//                     }`}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/about"
//                   className={`block text-white hover:text-gray-300 text-sm uppercase tracking-wide ${isActive('/about') ? 'font-bold' : ''
//                     }`}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/gallery"
//                   className={`block text-white hover:text-gray-300 text-sm uppercase tracking-wide ${isActive('/gallery') ? 'font-bold' : ''
//                     }`}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Gallery
//                 </Link>
//                 <Link
//                   to="/services"
//                   className={`block text-white hover:text-gray-300 text-sm uppercase tracking-wide ${isActive('/services') ? 'font-bold' : ''
//                     }`}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/contact"
//                   className={`block text-white hover:text-gray-300 text-sm uppercase tracking-wide ${isActive('/contact') ? 'font-bold' : ''
//                     }`}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Contact
//                 </Link>
//               </li>
//               <li>
//                 {/* <Link
//                   to="/contact"
//                   className="block bg-white text-black px-6 py-2 text-sm uppercase tracking-wide font-semibold text-center"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Book Now
//                 </Link> */}
//               </li>

//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiUser } from "react-icons/fi";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if we're on the home page
  const isHomePage = location.pathname === "/";

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  // Transparent on home page initially, solid black when scrolled or on other pages
  const navClasses = isHomePage && !isScrolled
    ? "bg-black bg-opacity-80 backdrop-blur-sm"
    : "bg-black shadow-lg";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white tracking-wider">INK STUDIO</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/gallery", label: "Gallery" },
              { to: "/podcast", label: "Podcast" },
              { to: "/services", label: "Services" },

              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`text-white hover:text-gray-300 transition-colors text-sm uppercase tracking-wide ${isActive(to) ? "border-b-2 border-white pb-1" : ""
                    }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Admin Login Button - Visible on desktop only */}
          <Link
            to="/login"
            className="hidden md:flex items-center gap-2 bg-black text-white font-medium px-6 py-2 rounded-lg border border-orange-600 shadow-sm text-lg hover:bg-orange-600 transition duration-200"
          >
            <FiUser size={22} />
            <span>Admin Login</span>
          </Link>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <ul className="py-4 space-y-4 px-4">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/gallery", label: "Gallery" },
                { to: "/services", label: "Services" },
                { to: "/podcast", label: "Podcast" },
                { to: "/contact", label: "Contact" },
                { to: "/login", label: "Admin Login", mobileOnly: true },
              ].map(({ to, label, mobileOnly }) => {
                if (mobileOnly && !isOpen) return null;
                return (
                  <li key={to}>
                    <Link
                      to={to}
                      className={`block text-white hover:text-gray-300 text-sm uppercase tracking-wide ${isActive(to) ? "font-bold" : ""
                        }`}
                      onClick={() => setIsOpen(false)} // Close menu on click
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
