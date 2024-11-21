import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Features/counter/cartslice";

const Product = ({ perfume }) => {
  const [showDetails, setShowDetails] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(perfume));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div
        className="relative pb-[100%] cursor-pointer"
        onClick={() => setShowDetails(!showDetails)}
      >
        <img
          src={perfume.image}
          alt={perfume.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 truncate">
          {perfume.name}
        </h2>
        <p className="text-lg font-bold text-gold">{perfume.price}</p>
      </div>
      {showDetails && (
        <div className="p-4 bg-gray-50">
          <p className="text-sm text-gray-600 mb-2">{perfume.description}</p>
          <p className="text-sm text-gray-600 mb-2">Notes: {perfume.notes}</p>
        </div>
      )}
      <div className="p-4 bg-gray-100">
        <button
          onClick={handleAddToCart}
          className="w-full px-4 py-2 bg-gold text-white rounded-md hover:bg-gold-dark transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
