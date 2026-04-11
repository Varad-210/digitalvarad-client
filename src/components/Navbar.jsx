import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ openContactPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      name: 'Home',
      path: '/',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      name: 'Courses',
      path: '/products',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      name: 'Blog',
      path: '/blog',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      name: 'Contact Us',
      action: 'contact',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const handleMenuItemClick = (item) => {
    if (item.action === 'contact') {
      openContactPopup();
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center mb-1">
            <div className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 p-2 rounded-lg mr-3 shadow-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
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
              className="relative w-10 h-10 text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <span className="sr-only">Open menu</span>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed inset-x-0 top-16 z-50 md:hidden"
            >
              <div className="mx-4 mt-2 rounded-2xl overflow-hidden shadow-2xl">
                {/* Gradient Background with Pattern */}
                <div className="relative bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] via-[#4338ca] to-[#0f172a] p-6">
                  {/* Subtle Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
                  </div>

                  {/* Menu Items */}
                  <div className="relative space-y-3">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        {item.path ? (
                          <Link
                            to={item.path}
                            onClick={() => handleMenuItemClick(item)}
                            className="group flex items-center space-x-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 active:scale-95"
                          >
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 text-white shadow-lg group-hover:shadow-emerald-500/50 transition-shadow duration-300">
                              {item.icon}
                            </div>
                            <span className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">
                              {item.name}
                            </span>
                            <svg
                              className="ml-auto w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ) : (
                          <button
                            onClick={() => handleMenuItemClick(item)}
                            className="group w-full flex items-center space-x-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 active:scale-95"
                          >
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 text-white shadow-lg group-hover:shadow-emerald-500/50 transition-shadow duration-300">
                              {item.icon}
                            </div>
                            <span className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">
                              {item.name}
                            </span>
                            <svg
                              className="ml-auto w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Decoration */}
                  <div className="mt-6 pt-4 border-t border-white/20">
                    <p className="text-center text-white/60 text-sm">
                      Build Your Digital Future 🚀
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
