// src/pages/ContactUs.jsx
import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page bg-black text-white">
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/contact-hero.jpg')",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center animate-fadeIn">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Ready to start your tattoo journey? Let's make it happen.
          </p>
          <div className="mt-6 h-1 w-20 bg-orange-500 mx-auto"></div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Location Card */}
            <div className="group bg-black p-8 rounded-lg border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">Visit Us</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  123 Street Name<br />
                  City, State 12345<br />
                  India
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group bg-black p-8 rounded-lg border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">Call Us</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  +91 1234567890<br />
                  +91 0987654321<br />
                  Mon-Sat: 10AM - 8PM
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="group bg-black p-8 rounded-lg border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">Email Us</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  info@inkstudio.com<br />
                  booking@inkstudio.com<br />
                  24/7 Response
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form + Map Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <div className="bg-gray-900 p-8 md:p-12 rounded-lg border border-gray-800">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you within 24 hours</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-300 text-white"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-300 text-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-300 text-white"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-300 text-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">New Tattoo Booking</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="pricing">Pricing Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-300 text-white resize-none"
                    placeholder="Tell us about your tattoo idea..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Send Message
                </button>

              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              
              {/* Google Map */}
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1589835192307!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="Studio Location"
                ></iframe>
              </div>

              {/* Working Hours */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-6">
                  Working Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="font-semibold">10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                    <span className="text-gray-400">Saturday</span>
                    <span className="font-semibold">11:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Sunday</span>
                    <span className="font-semibold text-orange-500">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-6">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default ContactUs;
