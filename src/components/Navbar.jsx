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
                className="fixed inset-y-0 right-0 z-50 w-full md:w-[80%] max-w-sm bg-gradient-to-b from-[#1e3a8a] via-[#2563eb] to-[#0f172a] shadow-2xl flex flex-col"
              >
                {/* Mobile Menu Header */}
                <div className="p-6 border-b border-white/10 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-3">
                    <img src={logo} alt="Logo" className="w-10 h-10 rounded-2xl object-cover border-2 border-white/20" />
                    <span className="font-bold text-white tracking-tight text-xl">VaradBuilds</span>
                  </div>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Mobile Menu Content */}
                <div className="flex-1 overflow-y-auto pt-12 pb-8 flex flex-col items-center">
                  <div className="w-full flex-1 flex flex-col items-center justify-center gap-12 px-6">
                    {/* Main Links */}
                    {menuItems.map((item, idx) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex flex-col items-center"
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex flex-col items-center group"
                        >
                          <div className={`mb-3 p-4 rounded-3xl transition-all duration-300 ${
                            location.pathname === item.path 
                              ? 'bg-white/20 scale-110' 
                              : 'bg-white/5 group-hover:bg-white/10'
                          }`}>
                            <div className="text-white scale-[2.5]">
                              {item.icon}
                            </div>
                          </div>
                          <span className="text-3xl font-black text-white tracking-[0.2em] uppercase">
                            {item.label}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Secondary Links */}
                  <div className="w-full px-12 mt-12 space-y-6">
                    {[
                      { label: 'Community Forum', icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                      ), action: () => window.open('https://chat.whatsapp.com/your-link', '_blank') },
                      { label: 'Contact Us & Support', icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                      ), action: () => { setIsMenuOpen(false); openContactPopup(); } },
                    ].map((item, idx) => (
                      <motion.button
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        onClick={item.action}
                        className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group w-full"
                      >
                        <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10">
                          {item.icon}
                        </div>
                        <span className="text-sm font-bold uppercase tracking-wider">{item.label}</span>
                      </motion.button>
                    ))}
                  </div>
                  
                  {/* Bottom Decoration */}
                  <div className="mt-12 opacity-20 pointer-events-none">
                     <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                     </svg>
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
