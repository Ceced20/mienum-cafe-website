
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { FeaturedItems } from '@/components/FeaturedItems';
import { MenuSection } from '@/components/MenuSection';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <FeaturedItems />
      <MenuSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
