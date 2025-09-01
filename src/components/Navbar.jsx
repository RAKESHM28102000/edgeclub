import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // Close menu on route change
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Students', path: '/students' },
    { name: 'Entrepreneur', path: '/entrepreneur' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Payment', path: '/payment', isButton: true }, 
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-blue-900 dark:bg-gray-900 text-white fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide text-yellow-400">EDGE Club</h1>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden focus:outline-none text-white"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:flex sm:items-center w-full sm:w-auto absolute sm:static top-16 left-0 bg-blue-900 dark:bg-gray-900 sm:bg-transparent sm:dark:bg-transparent transition-all duration-300`}
        >
          <div className="grid sm:flex sm:gap-4 w-full sm:w-auto text-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`w-full sm:w-auto px-4 py-2 sm:py-1 sm:px-3 font-medium rounded-md transition-all duration-200 ${
                  item.isButton
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-105 transform'
                    : isActive(item.path)
                    ? 'bg-yellow-400 text-black'
                    : 'hover:bg-yellow-300 hover:text-black'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
