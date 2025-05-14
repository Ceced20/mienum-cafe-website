
import React, { useState } from 'react';
import { Menu, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/35facb93-1484-4019-9372-11e05d45a61e.png" 
              alt="Mie-num Logo" 
              className="h-12 w-12 mr-2"
            />
            <span className="font-bold text-2xl text-cafe-dark">Mie-num</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-cafe-dark hover:text-cafe-red font-medium">Home</Link>
            <a href="#about" className="text-cafe-dark hover:text-cafe-red font-medium">About</a>
            <a href="#menu" className="text-cafe-dark hover:text-cafe-red font-medium">Menu</a>
            <Link to="/gallery" className="text-cafe-dark hover:text-cafe-red font-medium">Gallery</Link>
            <a href="#contact" className="text-cafe-dark hover:text-cafe-red font-medium">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              className="bg-cafe-red hover:bg-red-700 text-white flex items-center space-x-2"
              onClick={() => window.open('https://gofood.co.id/bandung/restaurant/mie-num-spbu-cibolerang-7ac50a8e-2a8d-438e-b965-99886bfc3213', '_blank')}
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Order Now</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <Menu className="h-6 w-6 text-cafe-dark" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-cafe-dark hover:text-cafe-red font-medium px-2 py-1">Home</Link>
              <a href="#about" className="text-cafe-dark hover:text-cafe-red font-medium px-2 py-1">About</a>
              <a href="#menu" className="text-cafe-dark hover:text-cafe-red font-medium px-2 py-1">Menu</a>
              <Link to="/gallery" className="text-cafe-dark hover:text-cafe-red font-medium px-2 py-1">Gallery</Link>
              <a href="#contact" className="text-cafe-dark hover:text-cafe-red font-medium px-2 py-1">Contact</a>
              <Button 
                className="bg-cafe-red hover:bg-red-700 text-white flex items-center justify-center space-x-2"
                onClick={() => window.open('https://gofood.co.id/bandung/restaurant/mie-num-spbu-cibolerang-7ac50a8e-2a8d-438e-b965-99886bfc3213', '_blank')}
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Order Now</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
