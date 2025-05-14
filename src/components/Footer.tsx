
import React from 'react';
import { Instagram, Facebook, Mail, ShoppingCart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-cafe-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/35facb93-1484-4019-9372-11e05d45a61e.png" 
                alt="Mie-num Logo" 
                className="h-12 w-12 mr-3 bg-white rounded-full p-1" 
              />
              <span className="font-bold text-2xl">Mie-num</span>
            </div>
            <p className="text-gray-400 mb-4">
              Delicious drinks and tasty meals that will make your taste buds dance!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-cafe-yellow transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-cafe-yellow transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:info@mienum.com" className="text-white hover:text-cafe-yellow transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-cafe-yellow transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-cafe-yellow transition-colors">About</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-cafe-yellow transition-colors">Menu</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cafe-yellow transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Order Online</h3>
            <p className="text-gray-400 mb-4">
              Get our delicious menu delivered directly to your doorstep.
            </p>
            <a 
              href="https://gofood.co.id/bandung/restaurant/mie-num-spbu-cibolerang-7ac50a8e-2a8d-438e-b965-99886bfc3213"
              target="_blank"
              rel="noreferrer"
              className="bg-cafe-red hover:bg-red-700 text-white py-2 px-4 rounded-md inline-flex items-center transition-colors"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              GoFood
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Mie-num. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
