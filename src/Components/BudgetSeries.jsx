import React from "react";

const BudgetSeries = () => {
  const perfumes = [
    {
      id: 1,
      name: "Yoyo",
      description: "A light and crisp scent for everyday use.",
      price: "Rs 1100",
    },
    {
      id: 2,
      name: "Ganymede",
      description: "Warm and inviting fragrance for any occasion.",
      price: "Rs 1100",
    },
    {
      id: 3,
      name: "ADG",
      description: "Soft and comforting scent for relaxation.",
      price: "Rs 1100",
    },
    // Add more perfumes as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Budget Series</h1>
      <p className="text-lg mb-8">
        Quality fragrances at affordable prices. Perfect for daily wear or as a
        thoughtful gift.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {perfumes.map((perfume) => (
          <div key={perfume.id} className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="yoyo.jpeg"
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

export default BudgetSeries;
