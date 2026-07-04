import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Gallery from '../pages/Gallery';
import ContactUs from '../pages/ContactUs';
import AuthForm from '../pages/auth/AuthForm';
import ScrollToTop from '../pages/ScrollTop';
import ServicePage from '../pages/ServicePage'
import PodcastPage from '../pages/PodcastPage'
import AdminDashboard from '../pages/admin/AdminDashboard';

function AppRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop/>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/podcast" element={<PodcastPage/>} />
          <Route path="/services" element={<ServicePage/>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<AuthForm/>} />
          <Route path="admin/dashboard" element={<AdminDashboard/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default AppRoutes;
