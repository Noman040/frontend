import React from 'react';
import logo from '../public/projectlogo.jpg'; // Import your image
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
      {/* Left side - Logo */}
      <div className="flex items-center mb-4 md:mb-0">
          <img 
            src={logo} 
            alt="VideoTube Logo" 
            className="rounded-xl h-14 mr-2" // Adjust height as needed
          />
          <span className="text-xl font-semibold">VideoTube</span>
        </div>

        {/* Right side - Copyright */}
        <div className="text-gray-400 text-sm md:text-base">
          ©2025 VideoTube. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;