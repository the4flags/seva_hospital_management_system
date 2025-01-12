import React from 'react';
import Navbar from '../Navber/Navber';
import Footer from '../Footer';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="py-10">
        <h1 className="text-center text-3xl font-bold text-blue-600">
          Contact Us
        </h1>
        <div className="container mx-auto">
          {/* Add content or forms here */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
