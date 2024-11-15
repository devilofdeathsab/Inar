import React from "react";
import Product from "./Products/product";
import { ADG, Ganymede, Yoyo } from "../assets/images";

const BudgetSeries = () => {
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
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perfumes.map((perfume) => (
            <Product key={perfume.id} perfume={perfume} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetSeries;
