
import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';

const GalleryPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  );
};

export default GalleryPage;
