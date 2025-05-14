
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const FeaturedItems = () => {
  const featuredItems = [
    {
      name: "Mienum Lemon Tea",
      price: "14.000",
      description: "Teh lemon yang kerasa bangetz asem lemonnya!",
      highlight: true,
    },
    {
      name: "Yamien Komplit",
      price: "13.500",
      description: "Mie yamien + baso, pangsit, dan sayur",
      highlight: true,
    },
    {
      name: "Milky Strawberry",
      price: "20.000",
      description: "Susu rasa strawberry yang creamy & maniezzz",
      highlight: true,
    },
    {
      name: "Mienum Caramel Economist",
      price: "10.000",
      description: "Karamel maniezzz harga dan ukuran ekonomiz",
      highlight: true,
    },
    {
      name: "Roti Panggang",
      price: "8.000",
      description: "Roti yang dipanggang dengan penuh cinta",
      highlight: true,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cafe-dark mb-4">
            <span className="text-cafe-red">Top</span> Picks
          </h2>
          <div className="w-24 h-1 bg-cafe-yellow mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl">
            Our customers' favorite items that you absolutely must try!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <Card key={index} className={`overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl ${item.highlight ? 'border-cafe-red' : ''}`}>
              <div className="bg-gradient-to-r from-cafe-red to-cafe-yellow h-2"></div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-cafe-dark mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  <span className="bg-cafe-yellow px-3 py-1 rounded-full text-cafe-dark font-bold">
                    Rp {item.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#menu"
            className="bg-cafe-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Full Menu
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
