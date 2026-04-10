import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = ({ openContactPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center mb-1">
            <img
              src={logo}
              alt="VaradBuilds logo"
              className="w-10 h-10 rounded-2xl shadow-lg mr-3 object-cover"
            />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">VaradBuilds</h3>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
              Courses
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
              Blog
            </Link>
            <button
              onClick={openContactPopup}
              className="relative px-6 py-2 rounded-lg font-semibold overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 transition-all duration-300 group-hover:scale-110"></div>
              <span className="relative text-white">Contact Us</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link to="/products" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Courses
              </Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Blog
              </Link>
              <button
                onClick={openContactPopup}
                className="w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition duration-300"
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
