// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4">
      <div className="text-center space-y-6 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-extrabold text-pink-500 drop-shadow-lg">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold">Oops! Page Not Found</h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          The page you are looking for doesn’t exist or has been moved. Let’s get you back home!
        </p>
        <Link
          to="/"
          className="inline-block bg-pink-600 hover:bg-pink-700 transition px-6 py-3 rounded-full text-lg font-semibold shadow-md"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
