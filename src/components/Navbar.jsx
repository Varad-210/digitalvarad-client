import { useState } from 'react';
import { Link } from 'react-router-dom';

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
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
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
    <>
      <nav style={{ background: 'rgba(42, 42, 114, 0.8)', backdropFilter: 'blur(10px)' }} className="shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div style={{ background: 'var(--accent-gradient)' }} className="p-2 rounded-lg mr-3 shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold gradient-text">VaradBuilds</h3>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-accent-teal transition duration-300 font-medium">
                Home
              </Link>
              <Link to="/products" className="text-white hover:text-accent-teal transition duration-300 font-medium">
                Courses
              </Link>
              <Link to="/blog" className="text-white hover:text-accent-teal transition duration-300 font-medium">
                Blog
              </Link>
              <button
                onClick={openContactPopup}
                className="btn-primary"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-10 h-10 text-white hover:text-accent-teal focus:outline-none"
              >
                <span className="sr-only">Open menu</span>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
                  <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                  <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Closes when clicking anywhere */}
      {isMenuOpen && (
        <>
          {/* Full screen backdrop - clicking anywhere closes menu */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Menu */}
          <div className="fixed inset-x-0 top-16 z-50 md:hidden">
            <div className="mx-4 mt-2 rounded-2xl overflow-hidden shadow-2xl" style={{ background: 'var(--primary-gradient)' }}>
              <div className="p-6">
                {/* Menu Items */}
                <div className="space-y-3">
                  {menuItems.map((item) => (
                    <div key={item.name}>
                      {item.path ? (
                        <Link
                          to={item.path}
                          onClick={() => handleMenuItemClick(item)}
                          className="flex items-center space-x-4 p-4 rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300"
                        >
                          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg text-white" style={{ background: 'var(--accent-gradient)' }}>
                            {item.icon}
                          </div>
                          <span className="text-lg font-semibold text-white">
                            {item.name}
                          </span>
                          <svg
                            className="ml-auto w-5 h-5 text-white/60"
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
                          className="w-full flex items-center space-x-4 p-4 rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300"
                        >
                          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg text-white" style={{ background: 'var(--accent-gradient)' }}>
                            {item.icon}
                          </div>
                          <span className="text-lg font-semibold text-white">
                            {item.name}
                          </span>
                          <svg
                            className="ml-auto w-5 h-5 text-white/60"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom Text */}
                <div className="mt-6 pt-4 border-t border-white/20">
                  <p className="text-center text-white/60 text-sm">
                    Build Your Digital Future 🚀
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
