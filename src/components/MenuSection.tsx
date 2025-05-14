
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("featured");
  
  // Menu data
  const drinks = {
    teaCoffee: [
      { name: "Mienum Lemon Tea", description: "Teh lemon yang kerasa bangetz asem lemonnya!", price: "14.000" },
      { name: "Mienum Teh Tawar", description: "Teh yg kerasa tehnya dongz", price: "7.000" },
      { name: "Mienum Teh Manis", description: "Teh yang berasa maniezzz", price: "7.000" },
      { name: "Kopi Kapal Api Special Mix", description: "Kopi hitam yang hot kaya kamu", price: "5.000" },
      { name: "Americano", description: "Kopi toraja yang dibuat espresso + air", price: "17.000" },
      { name: "Kopi Susu ala Mienum", description: "Espresso kopi toraja + susu murni, bikin melek", price: "23.000" },
      { name: "Susu Rhum (non-alkohol)", description: "Susu + sirup rhum, maniezz tapi nggak mabuk", price: "17.000" },
      { name: "Susu Jahe", description: "STMJ tanpa MJ, bisa dingin/panas", price: "10.000" },
    ],
    milkySeries: [
      { name: "Milky Strawberry", description: "Susu rasa strawberry yang creamy & maniezzz", price: "20.000" },
      { name: "Milky Chocolate", description: "Susu coklat yang seger dan maniezzz", price: "20.000" },
      { name: "Milky Vanilla", description: "Susu vanila yang creamy dan maniezzz", price: "20.000" },
      { name: "Milky Taro", description: "Susu rasa ubi ungu yang maniezzz", price: "20.000" },
      { name: "Milky Banana", description: "Susu rasa pisang ala Tokyo yang maniezzz", price: "20.000" },
      { name: "Milky Salted Caramel", description: "Susu karamel yang gurih dan maniezzz", price: "20.000" },
      { name: "Milky Tiramisu", description: "Susu rasa tiramisu kayak kue tiramisu", price: "20.000" },
      { name: "Milky Bubblegum", description: "Susu rasa permen karet yang maniezzz", price: "20.000" },
      { name: "Milky Red Velvet", description: "Susu red velvet yang maniezzz dan menggoda", price: "20.000" },
      { name: "Milky Cappucino", description: "Susu + cappucino yang segerrr dan maniezzz", price: "20.000" },
      { name: "Milky Greentea Latte", description: "Susu greentea latte, tidak terlalu maniezzz", price: "20.000" },
    ],
    mojitoTea: [
      { name: "Orange Mojito", description: "Soda + jeruk + mint, segar & menyejukkan", price: "17.000" },
      { name: "Pandan Mojito", description: "Soda + sirup pandan + daun mint", price: "17.000" },
      { name: "Lychee Mojito", description: "Soda + sirup lychee + daun mint", price: "17.000" },
      { name: "Mango Mojito", description: "Soda + sirup mango + daun mint", price: "17.000" },
      { name: "Mango Tea", description: "Teh + sirup mangga yang segarrr", price: "15.000" },
      { name: "Lychee Tea", description: "Teh + lychee yang segarr", price: "15.000" },
      { name: "Vanilla Tea", description: "Teh + sirup vanilla, manis dan segar", price: "15.000" },
      { name: "Es Susu Lychee", description: "Susu + sirup lychee, segar dan manis", price: "17.000" },
      { name: "Es Susu Mango", description: "Susu + sirup mango yang manis dan segarrr", price: "17.000" },
    ],
    economic: [
      { name: "Mienum Chocolate Economist", description: "Minuman coklat maniezzz ukuran dan harga ekonomiz", price: "10.000" },
      { name: "Mienum Strawberry Economist", description: "Strawberry maniezzz harga dan ukuran ekonomiz", price: "10.000" },
      { name: "Mienum Vanilla Economist", description: "Vanilla maniezzz harga dan ukuran ekonomiz", price: "10.000" },
      { name: "Mienum Taro Economist", description: "Taro maniezzz harga dan ukuran ekonomiz", price: "10.000" },
      { name: "Mienum Tiramisu Economist", description: "Tiramisu maniezzz harga dan ukuran ekonomiz", price: "10.000" },
      { name: "Mienum Red Velvet Economist", description: "Red velvet maniezzz harga dan ukuran ekonomiz", price: "10.000" },
      { name: "Mienum Caramel Economist", description: "Karamel maniezzz harga dan ukuran ekonomiz", price: "10.000" },
      { name: "Mienum Banana Economist", description: "Pisang ala Korea maniezzz harga dan ukuran ekonomiz", price: "10.000" },
      { name: "Mienum Bubble Gum Economist", description: "Permen karet maniezzz harga dan ukuran ekonomiz", price: "10.000" },
      { name: "Mienum Cappucino Economist", description: "Cappucino maniezzz harga dan ukuran ekonomiz", price: "10.000" },
      { name: "Mienum Greentea Latte Economist", description: "Greentea latte tidak terlalu maniezzz, harga ekonomiz", price: "11.000" },
    ],
    premium: [
      { name: "Milky Vanilla", description: "Susu vanilla yang maniez", price: "23.000" },
      { name: "Milky Strawberry", description: "Susu strawberry yang maniez", price: "23.000" },
      { name: "Milky Red Velvet", description: "Susu red velvet yang maniez", price: "23.000" },
      { name: "Milky Salted Caramel", description: "Susu salted caramel yang maniez", price: "23.000" },
      { name: "Milky Green Tea Latte", description: "Susu greentea latte yang maniez", price: "23.000" },
      { name: "Milky Banana", description: "Susu banana yang maniez", price: "23.000" },
      { name: "Milky Taro", description: "Susu taro yang maniez", price: "23.000" },
      { name: "Milky Bubble Gum", description: "Susu bubble gum yang maniez", price: "23.000" },
      { name: "Milky Tiramisu", description: "Susu tiramisu yang maniez", price: "23.000" },
      { name: "Milky Cappucino", description: "Susu cappucino yang maniez", price: "23.000" },
      { name: "Milky Chocolate", description: "Susu coklat yang maniez", price: "23.000" },
    ],
  };

  const food = [
    { name: "Yamien Komplit", description: "Mie yamien + baso, pangsit, dan sayur", price: "13.500" },
    { name: "Nasi Goreng Ala Mie-Num", description: "Nasi goreng bumbu khas + telur + sayur", price: "18.000" },
    { name: "Nasi Katsu BBQ", description: "Nasi + ayam katsu barbeque + sayur", price: "21.000" },
    { name: "Nasi Chicken Popcorn", description: "Nasi + chicken popcorn + kriukan + sayur", price: "21.000" },
    { name: "Nasi Goreng Katsu Spesial", description: "Nasi goreng + telur + ayam katsu + saus-sausan", price: "28.000" },
    { name: "Sandwich Mie", description: "Roti + mie goreng + telur + sayur", price: "16.000" },
    { name: "Sandwich Ala Mie-Num", description: "Roti + ham + telur + keju + sayur", price: "18.000" },
    { name: "Roti Panggang", description: "Roti yang dipanggang dengan penuh cinta", price: "8.000" },
    { name: "Indomie Kuah", description: "Indomie kuah kesukaan rakyat Indonesia", price: "9.500" },
    { name: "Indomie Goreng", description: "Indomie goreng kesukaan rakyat akhir bulan", price: "9.500" },
  ];

  const topPicks = [
    { name: "Mienum Lemon Tea", description: "Teh lemon yang kerasa bangetz asem lemonnya!", price: "14.000" },
    { name: "Yamien Komplit", description: "Mie yamien + baso, pangsit, dan sayur", price: "13.500" },
    { name: "Milky Strawberry", description: "Susu rasa strawberry yang creamy & maniezzz", price: "20.000" },
    { name: "Mienum Caramel Economist", description: "Karamel maniezzz harga dan ukuran ekonomiz", price: "10.000" },
    { name: "Roti Panggang", description: "Roti yang dipanggang dengan penuh cinta", price: "8.000" },
  ];

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cafe-dark mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-cafe-yellow mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mb-8">
            Explore our wide variety of drinks and food prepared with care and a dash of fun!
          </p>

          <Tabs 
            defaultValue="featured" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full max-w-4xl"
          >
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 h-auto">
              <TabsTrigger value="featured" className="py-3">⭐ Top Picks</TabsTrigger>
              <TabsTrigger value="drinks" className="py-3">🥤 Drinks</TabsTrigger>
              <TabsTrigger value="food" className="py-3">🍜 Food</TabsTrigger>
            </TabsList>
            
            <TabsContent value="featured" className="mt-6">
              <div className="space-y-4">
                {topPicks.map((item, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="menu-item">
                        <div>
                          <h3 className="menu-name">{item.name}</h3>
                          <p className="menu-description">{item.description}</p>
                        </div>
                        <div className="menu-price">Rp {item.price}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="drinks" className="mt-6">
              <Tabs defaultValue="tea" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto gap-1">
                  <TabsTrigger value="tea" className="py-2 text-xs md:text-sm">Tea & Coffee</TabsTrigger>
                  <TabsTrigger value="milky" className="py-2 text-xs md:text-sm">Milky Series</TabsTrigger>
                  <TabsTrigger value="mojito" className="py-2 text-xs md:text-sm">Mojito & Tea</TabsTrigger>
                  <TabsTrigger value="economic" className="py-2 text-xs md:text-sm">Economic</TabsTrigger>
                  <TabsTrigger value="premium" className="py-2 text-xs md:text-sm">Premium</TabsTrigger>
                </TabsList>
                
                <TabsContent value="tea" className="mt-6">
                  <div className="space-y-4">
                    {drinks.teaCoffee.map((item, index) => (
                      <div key={index} className="menu-item">
                        <div>
                          <h3 className="menu-name">{item.name}</h3>
                          <p className="menu-description">{item.description}</p>
                        </div>
                        <div className="menu-price">Rp {item.price}</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="milky" className="mt-6">
                  <div className="space-y-4">
                    {drinks.milkySeries.map((item, index) => (
                      <div key={index} className="menu-item">
                        <div>
                          <h3 className="menu-name">{item.name}</h3>
                          <p className="menu-description">{item.description}</p>
                        </div>
                        <div className="menu-price">Rp {item.price}</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="mojito" className="mt-6">
                  <div className="space-y-4">
                    {drinks.mojitoTea.map((item, index) => (
                      <div key={index} className="menu-item">
                        <div>
                          <h3 className="menu-name">{item.name}</h3>
                          <p className="menu-description">{item.description}</p>
                        </div>
                        <div className="menu-price">Rp {item.price}</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="economic" className="mt-6">
                  <div className="space-y-4">
                    {drinks.economic.map((item, index) => (
                      <div key={index} className="menu-item">
                        <div>
                          <h3 className="menu-name">{item.name}</h3>
                          <p className="menu-description">{item.description}</p>
                        </div>
                        <div className="menu-price">Rp {item.price}</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="premium" className="mt-6">
                  <div className="space-y-4">
                    {drinks.premium.map((item, index) => (
                      <div key={index} className="menu-item">
                        <div>
                          <h3 className="menu-name">{item.name}</h3>
                          <p className="menu-description">{item.description}</p>
                        </div>
                        <div className="menu-price">Rp {item.price}</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </TabsContent>
            
            <TabsContent value="food" className="mt-6">
              <div className="space-y-4">
                {food.map((item, index) => (
                  <div key={index} className="menu-item">
                    <div>
                      <h3 className="menu-name">{item.name}</h3>
                      <p className="menu-description">{item.description}</p>
                    </div>
                    <div className="menu-price">Rp {item.price}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
