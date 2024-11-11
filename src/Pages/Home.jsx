"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      url:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Carouselmain-6NZs8PU6VerkfIZiZGQQ7k95EMn0TB.jpeg",
      alt: "INAR Perfume Collection",
    },
    {
      url:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Phantasia-G9AU3nHsMxoHvE4OulwVcyVHap105U.jpeg",
      alt: "Phantasia Perfume",
    },
    {
      url:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ganymede-FU8gGZ1vCzUo7JVCZDVm6FtJg0WZ9T.jpeg",
      alt: "Ozone Perfume",
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
      <div className="relative mb-16 h-[500px] overflow-hidden rounded-xl">
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
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            to="/Perfumesforhim"
            className="block bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2">Perfumes for Him</h2>
            <p>Explore masculine fragrances that leave a lasting impression.</p>
          </Link>
          <Link
            to="/Perfumesforher"
            className="block bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2">Perfumes for Her</h2>
            <p>Discover enchanting scents that captivate and inspire.</p>
          </Link>
          <Link
            to="/BudgetSeries"
            className="block bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2">Budget Series</h2>
            <p>Quality fragrances at affordable prices.</p>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Phantasia-G9AU3nHsMxoHvE4OulwVcyVHap105U.jpeg"
              alt="Phantasia"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">Phantasia</h3>
            <p className="text-gray-600 mb-4">Inspired by imagination.</p>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300">
              View Details
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yoyo-i7VTmG6oGscBGWAZFRHdLYd9VNkQ52.jpeg"
              alt="YOYO"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">YOYO</h3>
            <p className="text-gray-600 mb-4">Inspired by YSL Y.</p>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300">
              View Details
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ganymede-FU8gGZ1vCzUo7JVCZDVm6FtJg0WZ9T.jpeg"
              alt="Ozone"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">Ozone</h3>
            <p className="text-gray-600 mb-4">Fresh and invigorating scent.</p>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300">
              View Details
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
