import React, { useState } from "react";
import Product from "./Products/product";
import {
  ADG,
  Azure,
  BR540,
  Gum,
  Maidan,
  PDM,
  Phantasia,
  Rosy,
  sav,
  Vanilla,
  Yoyo,
  Ganymede,
} from "../assets/images";

const Perfumesforhim = () => {
  const [sortBy, setSortBy] = useState("name");

  const perfumes = [
    {
      id: 1,
      image: Yoyo,
      name: "Yoyo",
      description: "Inspired by YSL Y",
      price: "Rs 1100",
      notes: "Fresh, Woody, Fougere",
    },
    {
      id: 2,
      image: Phantasia,
      name: "Phantasia",
      description: "Inspired by LV Imagination",
      price: "Rs 1800",
      notes: "Citrus, Amber, Woody",
    },
    {
      id: 3,
      image: ADG,
      name: "ADG",
      description: "Inspired by ADG",
      price: "Rs 1100",
      notes: "Marine, Citrus, Woody",
    },
    {
      id: 4,
      image: BR540,
      name: "540",
      description: "Inspired by BR540",
      price: "Rs 1200",
      notes: "Amber, Woody, Floral",
    },
    {
      id: 5,
      image: PDM,
      name: "92.97",
      description: "Inspired by PDM Greenley.",
      price: "Rs 2000",
      notes: "Fresh, Green, Woody",
    },
    {
      id: 6,
      image: Gum,
      name: "Gum",
      description: "Inspired by Rasasi Hawas",
      price: "Rs 1800",
      notes: "Fruity, Aquatic, Musky",
    },
    {
      id: 7,
      image: Azure,
      name: "Azure Sapphire",
      description: "Inspired by Blue Sapphire",
      price: "Rs 1150",
      notes: "Citrus, Aquatic, Woody",
    },
    {
      id: 8,
      image: Maidan,
      name: "Maidan",
      description: "Inspired by TSOD Maidan",
      price: "Rs 2500",
      notes: "Leather, Woody, Spicy",
    },
    {
      id: 9,
      image: Vanilla,
      name: "Vanilla Musk",
      description: "Inspired by PDM Althair",
      price: "Rs 1150",
      notes: "Vanilla, Musk, Woody",
    },
    {
      id: 10,
      image: Rosy,
      name: "Rosy Oud",
      description: "Inspired by LV Ombre Nomade",
      price: "Rs 1500",
      notes: "Rose, Oud, Amber",
    },
    {
      id: 11,
      image: sav,
      name: "Oscar elixir",
      description: "Inspired by Dior Sauvage Elixir",
      price: "Rs 1150",
      notes: "Spicy, Woody, Aromatic",
    },
    {
      id: 12,
      name: "Ganymede",
      image: Ganymede,
      description: "Inspired by MAB Ganymede.",
      price: "Rs 2100",
      notes: "Mineral, Suede, Woody",
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

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Perfumes for Him
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
  );
};

export default Perfumesforhim;
