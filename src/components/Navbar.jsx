import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = ({ openContactPopup }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 shadow-lg" style={{ background: 'linear-gradient(135deg, #2D2E84 0%, #383AB4 60%, #2D2E84 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo + Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <div className="bg-white/10 p-1.5 rounded-xl border border-white/20">
                <motion.img
                  src={logo}
                  alt="VaradBuilds logo"
                  className="w-9 h-9 rounded-2xl shadow-lg object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.25 }}
                />
              </div>
              <motion.span
                whileHover={{ scale: 1.03 }}
                className="text-xl font-bold text-white tracking-wide"
              >
                Bizgurukul
              </motion.span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
            >
              Courses
            </Link>
            <Link
              to="/blog"
              className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
            >
              Blog
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={openContactPopup}
              className="px-6 py-2 rounded-xl font-semibold text-white transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #20B597, #34A7E0)' }}
            >
              Contact Us
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/20"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/products"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                Courses
              </Link>
              <Link
                to="/blog"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                Blog
              </Link>
              <button
                onClick={() => { setIsOpen(false); openContactPopup && openContactPopup(); }}
                className="w-full text-left block px-3 py-2 rounded-lg font-semibold text-white transition-colors"
                style={{ background: 'linear-gradient(135deg, #20B597, #34A7E0)' }}
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
