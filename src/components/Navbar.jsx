import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = ({ openContactPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleGlobalClick = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.addEventListener('click', handleGlobalClick);
    }
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [isMenuOpen]);

  const menuItems = [
    { path: '/', label: 'Home', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
    ) },
    { path: '/products', label: 'Courses', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
    ) },
    { path: '/blog', label: 'Blog', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6M7 12h4"/></svg>
    ) },
  ];

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
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
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
        <AnimatePresence>
          {isMenuOpen && (
            <div className="md:hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 right-0 z-50 w-[80%] max-w-sm bg-white shadow-2xl flex flex-col"
              >
                {/* Mobile Menu Header */}
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="w-8 h-8 rounded-xl object-cover" />
                    <span className="font-bold text-slate-800 tracking-tight">VaradBuilds</span>
                  </div>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                  >
                    <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Mobile Menu Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Main Menu</p>
                  {menuItems.map((item, idx) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center gap-4 rounded-2xl px-4 py-4 font-semibold transition-all duration-300 ${
                          location.pathname === item.path
                            ? 'bg-sky-50 text-sky-600 shadow-sm shadow-sky-100/50'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-sky-600'
                        }`}
                      >
                        <span className={`${location.pathname === item.path ? 'text-sky-500' : 'text-slate-400'}`}>
                          {item.icon}
                        </span>
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-slate-100 space-y-6">
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      openContactPopup();
                    }}
                    className="w-full rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 py-4 font-bold text-white shadow-lg shadow-sky-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Contact Us Now
                  </button>
                  
                  <div className="flex items-center justify-center gap-6">
                    <a href="https://instagram.com/varadbuilds" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a href="https://youtube.com/@Varadpreneur210" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-red-500 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
