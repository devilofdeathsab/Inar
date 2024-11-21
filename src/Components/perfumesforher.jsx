import React, { useState, useEffect } from "react";
import Product from "./Products/product";
import { ChiggyWiggy, Florina } from "../assets/images";

const Perfumesforher = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sortBy, setSortBy] = useState("name");

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
      notes: "Rose, Jasmine, Vanilla",
    },
    {
      id: 2,
      name: "Chiggy Wiggy",
      image: ChiggyWiggy,
      description: "Inspired by VS Bombshell.",
      price: "Rs 1800",
      notes: "Fruity, Floral, Musky",
    },
  ];

  const sortedPerfumes = [...perfumes].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "price_asc") {
      return (
        parseFloat(a.price.replace("Rs ", "")) -
        parseFloat(b.price.replace("Rs ", ""))
      );
    } else if (sortBy === "price_desc") {
      return (
        parseFloat(b.price.replace("Rs ", "")) -
        parseFloat(a.price.replace("Rs ", ""))
      );
    }
    return 0;
  });

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
    <div className="bg-gray-50">
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
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 text-gray-800 p-2 rounded-full hover:bg-white/75 transition-colors"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 text-gray-800 p-2 rounded-full hover:bg-white/75 transition-colors"
        >
          &#10095;
        </button>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Perfumes for Her
        </h1>
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-600">
            {sortedPerfumes.length} products
          </p>
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Sort by Name</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedPerfumes.map((perfume) => (
            <Product key={perfume.id} perfume={perfume} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perfumesforher;
