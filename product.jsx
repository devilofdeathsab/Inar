import React from "react";

const Product = ({ perfume }) => {
  return (
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
  );
};

export default Product;
