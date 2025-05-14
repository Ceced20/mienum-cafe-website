
import React from 'react';
import { MapPin, Phone, Mail, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-cafe-yellow">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cafe-dark mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-cafe-red mb-6"></div>
          <p className="text-lg text-cafe-dark max-w-3xl">
            Have questions? Want to make special orders? Get in touch with us!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-cafe-dark mb-6">Location & Info</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-cafe-red mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-cafe-dark">Address</h4>
                  <p className="text-gray-600">SPBU Cibolerang, Bandung, Indonesia</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-cafe-red mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-cafe-dark">Phone</h4>
                  <p className="text-gray-600">+62 812 3456 7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-cafe-red mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-cafe-dark">Email</h4>
                  <p className="text-gray-600">info@mienum.com</p>
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="text-lg font-semibold text-cafe-dark mb-2">Opening Hours</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-gray-600">Monday - Friday</div>
                  <div className="text-gray-800 font-medium">08:00 - 22:00</div>
                  <div className="text-gray-600">Saturday - Sunday</div>
                  <div className="text-gray-800 font-medium">09:00 - 23:00</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-cafe-red p-8 rounded-lg shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-6">Order Online</h3>
            <p className="mb-8">
              Craving our delicious menu? Order now through GoFood for fast delivery right to your doorstep!
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-inner mb-8">
              <img 
                src="/lovable-uploads/35facb93-1484-4019-9372-11e05d45a61e.png" 
                alt="Mie-num Logo" 
                className="h-24 w-24 mx-auto mb-4" 
              />
              <p className="text-cafe-dark text-center font-medium">Mie-num SPBU Cibolerang</p>
            </div>
            
            <Button 
              className="w-full py-6 bg-white text-cafe-red hover:bg-gray-100"
              onClick={() => window.open('https://gofood.co.id/bandung/restaurant/mie-num-spbu-cibolerang-7ac50a8e-2a8d-438e-b965-99886bfc3213', '_blank')}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Order on GoFood
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
