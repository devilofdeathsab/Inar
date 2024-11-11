import React from "react";

const Perfumesforhim = () => {
  const perfumes = [
    { id: 1, name: "Gentleman's Choice", description: "A sophisticated blend of woody and spicy notes.", price: "$75" },
    { id: 2, name: "Ocean Breeze", description: "Fresh and invigorating scent for everyday wear.", price: "$60" },
    { id: 3, name: "Midnight Mystery", description: "An alluring fragrance for special occasions.", price: "$85" },
    // Add more perfumes as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Perfumes for Him</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {perfumes.map((perfume) => (
          <div key={perfume.id} className="bg-white p-6 rounded-lg shadow-md">
            <img src="/placeholder.svg?height=200&width=200" alt={perfume.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-2">{perfume.name}</h2>
            <p className="text-gray-600 mb-4">{perfume.description}</p>
            <p className="text-lg font-bold mb-4">{perfume.price}</p>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Perfumesforhim;