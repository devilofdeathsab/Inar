// src/components/BudgetSeries.jsx
import React, { useState } from "react";
import Product from "./Products/product";
import {
  ADG,
  Ganymede,
  Yoyo,
  sav,
  Rosy,
  Vanilla,
  Azure,
} from "../assets/images";

const BudgetSeries = () => {
  const [sortBy, setSortBy] = useState("name");

  const perfumes = [
    {
      id: 1,
      name: "Yoyo",
      image: Yoyo,
      description: "A light and crisp scent for everyday use.",
      price: "Rs 1100",
    },
    {
      id: 2,
      name: "Ganymede",
      image: Ganymede,
      description: "Warm and inviting fragrance for any occasion.",
      price: "Rs 1100",
    },
    {
      id: 3,
      name: "ADG",
      image: ADG,
      description: "Soft and comforting scent for relaxation.",
      price: "Rs 1100",
    },
    {
      id: 4,
      image: sav,
      name: "Oscar elixir",
      description: "Inspired by Dior Sauvage Elixir",
      price: "Rs 1150",
    },
    {
      id: 5,
      image: Rosy,
      name: "Rosy Oud",
      description: "Inspired by LV Ombre Nomade",
      price: "Rs 1500",
    },
    {
      id: 6,
      image: Vanilla,
      name: "Vanilla Musk",
      description: "Inspired by PDM Althair",
      price: "Rs 1150",
    },
    {
      id: 7,
      image: Azure,
      name: "Azure Sapphire",
      description: "Inspired by Blue Sapphire",
      price: "Rs 1150",
    },
  ];

  const sortedPerfumes = [...perfumes].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "price") {
      return (
        parseFloat(a.price.replace("Rs ", "")) -
        parseFloat(b.price.replace("Rs ", ""))
      );
    }
    return 0;
  });

  return (
    <div className="bg-charcoal text-cream">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif font-bold mb-6 text-gold-light">
          Budget Series
        </h1>
        <p className="text-lg mb-8">
          Quality fragrances at affordable prices. Perfect for daily wear or as
          a thoughtful gift.
        </p>
        <div className="mb-4">
          <label htmlFor="sort" className="mr-2">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white text-black px-2 py-1 rounded"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPerfumes.map((perfume) => (
            <Product key={perfume.id} perfume={perfume} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetSeries;
