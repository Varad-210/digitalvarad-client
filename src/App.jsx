import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';

import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import ContactPopup from './components/ContactPopup';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';



function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContactPopup = () => setIsContactOpen(true);
  const closeContactPopup = () => setIsContactOpen(false);

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);


  return (
    // ⚠️ React Router v7 will change relative splat route behavior.
    // To future-proof, consider migrating to RouterProvider with future flags.
    <Router>
      <Navbar openContactPopup={openContactPopup} />
      <Routes>
        <Route path="/" element={<Home openContactPopup={openContactPopup} />} />
        <Route path="/products" element={<Products />} />

        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
      <Footer />
      <ContactPopup isOpen={isContactOpen} onClose={closeContactPopup} />
    </Router>
  );
}

export default App;
