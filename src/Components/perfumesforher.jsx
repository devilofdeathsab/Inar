"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Perfumesforher = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      url:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Femme%20Carousel-lZt5MQcX1onCafNXwBLNytBhEp2VJx.jpeg",
      alt: "INAR Women's Collection",
    },
  ];

  const perfumes = [
    {
      id: 1,
      name: "Florina",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Femme%20Carousel-lZt5MQcX1onCafNXwBLNytBhEp2VJx.jpeg",
      description: "A delicate blend of floral notes.",
      price: "Rs 1800",
    },
    {
      id: 2,
      name: "Chiggy Wiggy",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Femme%20Carousel-lZt5MQcX1onCafNXwBLNytBhEp2VJx.jpeg",
      description: "Inspired by VS Bombshell.",
      price: "Rs 1800",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Carousel */}
      <div className="relative mb-16 h-[400px] overflow-hidden rounded-xl">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <h1 className="text-4xl font-bold mb-6">Perfumes for Her</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {perfumes.map((perfume) => (
          <div key={perfume.id} className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={perfume.image}
              alt={perfume.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{perfume.name}</h2>
            <p className="text-gray-600 mb-4">{perfume.description}</p>
            <p className="text-lg font-bold mb-4">{perfume.price}</p>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Perfumesforher;
