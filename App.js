
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Кашемировое пальто",
    category: "Одежда",
    image: "/images/coat.jpg",
    link: "https://instagram.com/yourbrand"
  },
  {
    id: 2,
    name: "Лоферы кожаные",
    category: "Обувь",
    image: "/images/loafers.jpg",
    link: "https://instagram.com/yourbrand"
  },
  {
    id: 3,
    name: "Очки в стиле ретро",
    category: "Аксессуары",
    image: "/images/glasses.jpg",
    link: "https://instagram.com/yourbrand"
  }
];

export default function OldMoneyShop() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <nav className="flex justify-between items-center mb-10 border-b pb-4">
        <h1 className="text-2xl font-serif font-bold">Old Money Stockholm</h1>
        <div className="space-x-6 text-gray-600">
          <a href="#catalog" className="hover:text-black">Каталог</a>
          <a href="#about" className="hover:text-black">О нас</a>
        </div>
      </nav>

      <header className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold">Элегантность, минимализм и вечный стиль</h2>
        <p className="text-gray-500 mt-2">Коллекции в духе old money & Stockholm luxury</p>
      </header>

      <section id="catalog" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="rounded-2xl shadow-md">
            <img src={product.image} alt={product.name} className="rounded-t-2xl w-full h-64 object-cover" />
            <CardContent className="p-4">
              <h2 className="text-xl font-medium mb-1">{product.name}</h2>
              <p className="text-sm text-gray-500 mb-3">{product.category}</p>
              <Button asChild className="w-full">
                <a href={product.link} target="_blank" rel="noopener noreferrer">Смотреть в Instagram</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section id="about" className="mt-20">
        <h3 className="text-3xl font-serif font-bold mb-4">О нас</h3>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Old Money Stockholm — это бренд, вдохновлённый скандинавским минимализмом и вечной эстетикой старых денег. Мы создаём одежду, обувь и аксессуары для тех, кто ценит качество, сдержанность и стиль вне времени. Все наши изделия создаются с акцентом на детали и натуральные материалы.
        </p>
      </section>

      <section className="mt-20">
        <h3 className="text-2xl font-serif font-bold mb-4">Подпишитесь на нас в Instagram</h3>
        <div className="text-center">
          <a href="https://instagram.com/yourbrand" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-lg">
            @yourbrand
          </a>
        </div>
      </section>

      <footer className="mt-20 text-center text-gray-400 text-sm">
        <p>&copy; 2025 Old Money Stockholm. Сделано с помощью <a href="https://gptonline.ai/ru/" className="underline">GPTOnline.ai</a></p>
      </footer>
    </div>
  );
}
