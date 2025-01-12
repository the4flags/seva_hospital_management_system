import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">Lifescape Hospital Ltd</h1>
        <nav className="flex space-x-6">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/gallery" className="hover:text-gray-300">Gallery</a>
          <a href="/contact" className="hover:text-gray-300">Contact Us</a>
          <a href="/regPatient" className="hover:text-gray-300">Patient Register</a>
          <div className="relative group">
            <button className="hover:text-gray-300">Login</button>
            <div className="absolute bg-white text-gray-800 shadow-md rounded hidden group-hover:block mt-2">
              <a href="/patient/login" className="block px-4 py-2 hover:bg-gray-200">Patient Login</a>
              <a href="/doctors/login" className="block px-4 py-2 hover:bg-gray-200">Doctor Login</a>
              <a href="/employee/login" className="block px-4 py-2 hover:bg-gray-200">Employee Login</a>
              <a href="/administrator/login" className="block px-4 py-2 hover:bg-gray-200">Admin Login</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
