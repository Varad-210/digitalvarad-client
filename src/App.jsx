import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPopup from './components/ContactPopup';
import CookieConsent from './components/CookieConsent';
import useTracking from './hooks/useTracking';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Journal = lazy(() => import('./pages/Journal'));
const DigitalProducts = lazy(() => import('./pages/DigitalProducts'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));

const Tracker = () => {
  useTracking();
  return null;
};

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
      <Tracker />
      <Navbar openContactPopup={openContactPopup} />
      <main>
        <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home openContactPopup={openContactPopup} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/digital-products" element={<DigitalProducts />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ContactPopup isOpen={isContactOpen} onClose={closeContactPopup} />
      <CookieConsent />
    </Router>
  );
}

export default App;
