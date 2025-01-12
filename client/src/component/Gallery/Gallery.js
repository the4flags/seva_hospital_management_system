import React from 'react';
import Navbar from '../Navber/Navber';
import GalleryCarousel from '../GalleryCarousel';

const Gallery = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="py-10">
        <h1 className="text-center text-3xl font-bold text-blue-600">Gallery</h1>
        <div className="container mx-auto">
          <GalleryCarousel />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
