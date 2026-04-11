import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = ({ openContactPopup }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl border-b" 
         style={{ 
           background: 'rgba(255, 255, 255, 0.85)',
           borderColor: 'rgba(99, 102, 241, 0.1)',
           boxShadow: '0 4px 24px rgba(99, 102, 241, 0.08)'
         }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo + Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-indigo-50 to-cyan-50 p-1.5 rounded-xl border border-indigo-100">
                  <motion.img
                    src={logo}
                    alt="VaradBuilds logo"
                    className="w-9 h-9 rounded-lg shadow-sm object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.25 }}
                  />
                </div>
              </div>
              <motion.span
                whileHover={{ scale: 1.02 }}
                className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent tracking-tight"
              >
                Bizgurukul
              </motion.span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-200 font-medium"
            >
              Courses
            </Link>
            <Link
              to="/blog"
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-200 font-medium"
            >
              Blog
            </Link>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={openContactPopup}
              className="ml-4 px-6 py-2.5 rounded-xl font-semibold text-white relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 blur-xl bg-gradient-to-r from-indigo-400 to-cyan-400 opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <span className="relative">Contact Us</span>
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-indigo-600 transition-colors p-2"
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
            className="md:hidden border-t border-indigo-100/50"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all font-medium"
              >
                Home
              </Link>
              <Link
                to="/products"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all font-medium"
              >
                Courses
              </Link>
              <Link
                to="/blog"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all font-medium"
              >
                Blog
              </Link>
              <button
                onClick={() => { setIsOpen(false); openContactPopup && openContactPopup(); }}
                className="w-full text-center mt-2 px-4 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 transition-all"
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
