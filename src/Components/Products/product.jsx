import React from "react";

const Product = ({ perfume }) => {
  return (
    <div className="bg-cream text-black p-6 rounded-lg shadow-md">
      <img
        src={perfume.image}
        alt={perfume.name}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h2 className="text-xl font-serif font-semibold mb-2 text-gold-dark">
        {perfume.name}
      </h2>
      <p className="text-black mb-4">{perfume.description}</p>
      <p className="text-lg font-bold mb-4 text-gold-dark">{perfume.price}</p>
      <button className="bg-gold-light text-black px-4 py-2 rounded-full hover:bg-gold-dark transition duration-300">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
