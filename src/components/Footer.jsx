import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">EDGE Club</h2>
          <p className="text-sm">Department of Management Studies</p>
          <p className="text-sm">University of Madras, Chennai - 600005</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <div className="text-sm flex flex-col gap-1">
            <p className="flex items-center gap-2"><FaEnvelope /> edgeclub@unom.ac.in</p>
            <p className="flex items-center gap-2"><FaPhoneAlt /> +91-44-2539-9422</p>
            <p className="flex items-center gap-2"><FaMapMarkerAlt /> Chepauk, Chennai</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-blue-500" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-500" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs mt-6 text-gray-400">
        © 2025 EDGE Club. All rights reserved.<br />
        Website created by <a href="https://rakeshm.onrender.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Rakesh Creative Solution</a>
      </div>
    </footer>
  );
};

export default Footer;