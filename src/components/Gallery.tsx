
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { GalleryHorizontal, Image } from "lucide-react";

export const Gallery = () => {
  const [activeTab, setActiveTab] = useState("menu");
  
  const menuPhotos = [
    { src: "/lovable-uploads/35facb93-1484-4019-9372-11e05d45a61e.png", alt: "Menu Item 1" },
    { src: "/lovable-uploads/de7bc02b-c515-43af-9d33-0a1a4f580b4c.png", alt: "Menu Item 2" },
    { src: "/lovable-uploads/35facb93-1484-4019-9372-11e05d45a61e.png", alt: "Menu Item 3" },
  ];
  
  const productPhotos = [
    { src: "/lovable-uploads/de7bc02b-c515-43af-9d33-0a1a4f580b4c.png", alt: "Product 1" },
    { src: "/lovable-uploads/35facb93-1484-4019-9372-11e05d45a61e.png", alt: "Product 2" },
    { src: "/lovable-uploads/de7bc02b-c515-43af-9d33-0a1a4f580b4c.png", alt: "Product 3" },
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cafe-dark mb-4">Our Gallery</h2>
          <div className="w-24 h-1 bg-cafe-yellow mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mb-8">
            Explore our delicious menu items and products through our gallery.
          </p>
          
          <Tabs 
            defaultValue="menu" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full max-w-4xl"
          >
            <TabsList className="grid w-full grid-cols-2 h-auto">
              <TabsTrigger value="menu" className="py-3">
                <GalleryHorizontal className="mr-2 h-4 w-4" />
                Menu Gallery
              </TabsTrigger>
              <TabsTrigger value="products" className="py-3">
                <Image className="mr-2 h-4 w-4" />
                Product Photos
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="menu" className="mt-6">
              <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent>
                  {menuPhotos.map((photo, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-2">
                            <AspectRatio ratio={1/1}>
                              <img 
                                src={photo.src}
                                alt={photo.alt}
                                className="rounded-md object-cover w-full h-full"
                              />
                            </AspectRatio>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
            
            <TabsContent value="products" className="mt-6">
              <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent>
                  {productPhotos.map((photo, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-2">
                            <AspectRatio ratio={1/1}>
                              <img 
                                src={photo.src} 
                                alt={photo.alt} 
                                className="rounded-md object-cover w-full h-full"
                              />
                            </AspectRatio>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
