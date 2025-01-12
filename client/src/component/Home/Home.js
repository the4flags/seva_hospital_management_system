import React from 'react';
import Navbar from '../Navber/Navber';
import Footer from '../Footer';
import Mission from '../Mission';
import OurDoctors from '../OurDoctors';
import HomeQuote from '../HomeQuote';


const Home = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <section className="bg-cover bg-center h-64 flex items-center justify-center text-white" style={{ backgroundImage: `url('hospital.jpg')` }}>
        <h1 className="text-4xl font-bold">Welcome to Lifescape Hospital</h1>
      </section>
      <section className="py-10 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Vision and Mission Statements</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          The mission of Lifescape Hospital is to provide compassionate, accessible, high-quality, cost-effective healthcare to the community.
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Lifescape Hospital will be an innovative, leading regional health system dedicated to advancing health and transforming lives.
        </p>
      </section>
      <section className="py-10 bg-gray-200">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">Our Doctors</h2>
        <OurDoctors />
      </section>
      <section className="py-10 bg-white">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">News and Achievements</h2>
        <HomeQuote />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
