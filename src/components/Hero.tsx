
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative bg-cafe-yellow py-20 overflow-hidden">
      {/* Diagonal red section */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cafe-red transform -skew-x-12 -translate-x-32 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-cafe-dark mb-4">
              Welcome to <br> <span className="text-cafe-red">Mie-num</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-cafe-dark">
              Delicious drinks and tasty meals that will make your taste buds dance!
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button 
                className="bg-cafe-red hover:bg-red-700 text-white text-lg px-6 py-6" 
                size="lg"
                onClick={() => window.open('https://gofood.co.id/bandung/restaurant/mie-num-spbu-cibolerang-7ac50a8e-2a8d-438e-b965-99886bfc3213', '_blank')}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Order on GoFood
              </Button>
              <Button 
                className="bg-cafe-dark hover:bg-gray-800 text-white text-lg px-6 py-6" 
                size="lg"
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Menu
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-cafe-yellow"></div>
              <div className="absolute -inset-3 rounded-full bg-cafe-red opacity-75"></div>
              <img 
                src="/lovable-uploads/35facb93-1484-4019-9372-11e05d45a61e.png" 
                alt="Mie-num Dimsum" 
                className="w-64 h-64 object-contain relative animate-float z-10"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-12 bg-white transform -skew-y-2 translate-y-6"></div>
    </section>
  );
};
