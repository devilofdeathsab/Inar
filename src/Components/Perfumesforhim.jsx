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
    },
    {
      id: 2,
      image: Phantasia,
      name: "Phantasia",
      description: "Inspired by LV Imagination",
      price: "Rs 1800",
    },
    {
      id: 3,
      image: ADG,
      name: "ADG",
      description: "Inspired by ADG",
      price: "Rs 1100",
    },
    {
      id: 4,
      image: BR540,
      name: "540",
      description: "Inspired by BR540",
      price: "Rs 1200",
    },
    {
      id: 5,
      image: PDM,
      name: "92.97",
      description: "Inspired by PDM Greenley.",
      price: "Rs 2000",
    },
    {
      id: 6,
      image: Gum,
      name: "Gum",
      description: "Inspired by Rasasi Hawas",
      price: "Rs 1800",
    },
    {
      id: 7,
      image: Azure,
      name: "Azure Sapphire",
      description: "Inspired by Blue Sapphire",
      price: "Rs 1150",
    },
    {
      id: 8,
      image: Maidan,
      name: "Maidan",
      description: "Inspired by TSOD Maidan",
      price: "Rs 2500",
    },
    {
      id: 9,
      image: Vanilla,
      name: "Vanilla Musk",
      description: "Inspired by PDM Althair",
      price: "Rs 1150",
    },
    {
      id: 10,
      image: Rosy,
      name: "Rosy Oud",
      description: "Inspired by LV Ombre Nomade",
      price: "Rs 1500",
    },
    {
      id: 11,
      image: sav,
      name: "Oscar elixir",
      description: "Inspired by Dior Sauvage Elixir",
      price: "Rs 1150",
    },
    {
      id: 12,
      name: "Ganymede",
      image: Ganymede,
      description: "Inspired by MAB Ganymede.",
      price: "Rs 2100",
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-yellow-600">
        Perfumes for Him
      </h1>
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-500">
          {sortedPerfumes.length} products
        </p>
        <select
          className="px-4 py-2 border rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Sort by Name</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
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
