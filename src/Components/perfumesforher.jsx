"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Product from "./Products/product";
import { ChiggyWiggy, Florina } from "../assets/images";

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
      image: Florina,
      description: "A delicate blend of floral notes.",
      price: "Rs 1800",
    },
    {
      id: 2,
      name: "Chiggy Wiggy",
      image: ChiggyWiggy,
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
    <div className="bg-black text-cream">
      {/* Hero Carousel */}
      <div className="relative mb-16 h-[400px] overflow-hidden">
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
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
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

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif font-bold mb-6 text-gold-light">
          Perfumes for Her
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perfumes.map((perfume) => (
            <Product key={perfume.id} perfume={perfume} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perfumesforher;
