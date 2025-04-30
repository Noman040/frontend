import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Header = () => {
  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-2">
        {/* Logo */}
        <div className="flex items-center ml-2">
          <img
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            className="h-10 w-10"
          />
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4 max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg border text-white bg-black border-gray-300 focus:outline-none focus:border-white-500 text-sm"
          />
        </div>

        {/* Login and Signup Buttons */}
        <div className="flex items-center space-x-2 mr-2">
          <Link to="/login" className="text-white hover:text-white-600 hover:bg-gray-500 px-4 py-2 rounded-lg transition duration-300">
            Log in
          </Link>
          <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;