import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import SuccessStories from './pages/SuccessStories';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import ContactPopup from './components/ContactPopup';
import router from './router';


function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContactPopup = () => setIsContactOpen(true);
  const closeContactPopup = () => setIsContactOpen(false);

  return (
    // ⚠️ React Router v7 will change relative splat route behavior.
    // To future-proof, consider migrating to RouterProvider with future flags.
    <Router>
      <Navbar openContactPopup={openContactPopup} />
      <Routes>
        <Route path="/" element={<Home openContactPopup={openContactPopup} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
      <ContactPopup isOpen={isContactOpen} onClose={closeContactPopup} />
    </Router>
  );
}

export default App;
