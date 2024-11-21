import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Features/counter/cartslice";

const Product = ({ perfume }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(perfume));
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="aspect-square w-full relative mb-4">
          <img
            src={perfume.image}
            alt={perfume.name}
            className="absolute inset-0 w-full h-full object-cover rounded-md"
          />
        </div>
        <h2 className="text-xl font-semibold mb-2 line-clamp-2">
          {perfume.name}
        </h2>
        <p className="text-sm text-gray-600 mb-2 line-clamp-3">
          {perfume.description}
        </p>
        <p className="text-lg font-bold text-yellow-600">{perfume.price}</p>
      </div>
      <div className="p-4 bg-gray-50">
        <button
          onClick={handleAddToCart}
          className="w-full px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
