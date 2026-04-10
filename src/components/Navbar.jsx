import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = ({ openContactPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-2xl shadow-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <motion.img
              src={logo}
              alt="VaradBuilds logo"
              className="w-12 h-12 rounded-3xl shadow-lg shadow-cyan-200/30 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25 }}
            />
            <div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                VaradBuilds
              </h3>
              <p className="text-xs md:text-sm text-slate-500 uppercase tracking-[0.24em] mt-1">
                High-Income Skill Builder
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/products', label: 'Courses' },
              { path: '/blog', label: 'Blog' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-slate-700 hover:text-sky-600 transition duration-300 font-medium px-3 py-2 rounded-full hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={openContactPopup}
              className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden rounded-full font-semibold text-white shadow-lg shadow-cyan-500/20 transition duration-300 bg-gradient-to-r from-cyan-500 to-blue-600 group"
            >
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition duration-300 rounded-full" />
              <span className="relative">Contact Us</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm shadow-slate-200/50 transition duration-300 hover:border-sky-300 hover:text-sky-600"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
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
            <div className="mt-3 overflow-hidden rounded-3xl border border-slate-200 bg-white/95 shadow-xl shadow-slate-200/40">
              <div className="flex flex-col px-4 py-4 space-y-2">
                {[
                  { path: '/', label: 'Home' },
                  { path: '/products', label: 'Courses' },
                  { path: '/blog', label: 'Blog' },
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block rounded-2xl px-4 py-3 text-slate-700 font-medium transition duration-300 hover:bg-slate-100 hover:text-sky-600"
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={openContactPopup}
                  className="mt-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-center font-semibold text-white transition duration-300 hover:brightness-110"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
