import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../Features/counter/cartslice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace("Rs ", "")) * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-4 border-b last:border-b-0"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-300"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-300"
                    onClick={() => dispatch(incrementQuantity(item.id))}
                  >
                    +
                  </button>
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 bg-gray-50 flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">
              Total: <span className="text-gold">Rs {total.toFixed(2)}</span>
            </div>
            <button className="px-6 py-3 bg-gold text-white rounded-md hover:bg-gold-dark transition-colors duration-300">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
