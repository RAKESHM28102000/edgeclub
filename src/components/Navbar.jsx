import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close menu on route change
    setIsOpen(false);
  }, [location]);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-blue-900 dark:bg-gray-900 text-white fixed top-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">EDGE Club</h1>

        {/* Hamburger Button for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Nav Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-blue-900 dark:bg-gray-900 sm:bg-transparent sm:dark:bg-transparent sm:static sm:flex sm:items-center sm:space-x-6 transition-all duration-300`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center px-4 sm:px-0 py-4 sm:py-0 gap-4 w-full">
            <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
            <Link to="/events" className="hover:text-yellow-400 transition">Events</Link>
            <Link to="/students" className="hover:text-yellow-400 transition">Students</Link>
            <Link to="/entrepreneur" className="hover:text-yellow-400 transition">Entrepreneur</Link>
            <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-auto sm:ml-0 bg-white text-black px-3 py-1 rounded text-sm hover:bg-gray-200 transition"
            >
              {darkMode ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
