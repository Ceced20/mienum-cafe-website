
import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block mb-4">
            <img 
              src="/lovable-uploads/35facb93-1484-4019-9372-11e05d45a61e.png" 
              alt="Mie-num Logo" 
              className="h-16 w-16" 
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-cafe-dark mb-4">About Mie-num</h2>
          <div className="w-24 h-1 bg-cafe-red mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl">
            Welcome to Mie-num, where food meets fun! We are a vibrant café that serves 
            delicious drinks and meals with a playful twist. Our menu features everything from 
            traditional noodles to creative milky drinks that will satisfy your cravings. 
            Whether you're stopping by for a quick meal or catching up with friends, 
            Mie-num offers a warm and welcoming atmosphere with flavors that will keep you coming back for more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-cafe-red rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-cafe-dark mb-2">Wide Variety</h3>
            <p className="text-gray-600">From teas to milky drinks, noodles to sandwiches - we have something for every taste bud!</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-cafe-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-cafe-dark mb-2">Quick Service</h3>
            <p className="text-gray-600">No long waits! Our team is dedicated to preparing your order promptly and efficiently.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-cafe-dark rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-cafe-dark mb-2">Friendly Atmosphere</h3>
            <p className="text-gray-600">Experience our playful menu descriptions and warm service that makes every visit special.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
