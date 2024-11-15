import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, Reset } from "../Features/counter/counterSlice";
//go to state which slice named counter which has any entity
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
function handleIncrementClick() {
  dispatch(increment());
}
function handleDecrementClick() {
  dispatch(decrement());
}
function handleResetClick() {
  dispatch(Reset());
}
const Cart = () => {
  // This is a placeholder. In a real application, you'd manage the cart state here.
  const cartItems = [
    { id: 1, name: "Yoyo", price: 1100, quantity: 2 },
    { id: 2, name: "Phantasia", price: 1800, quantity: 1 },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-gold">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="bg-white text-black rounded-lg shadow-md p-6 mb-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p className="text-lg font-bold text-gold">
                  Rs {item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold mb-4">
              Total: <span className="text-gold">Rs {total}</span>
            </p>
            <button className="bg-gold text-black px-6 py-3 rounded-lg hover:bg-black hover:text-gold transition duration-300">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
      <div>
        <button onClick={() => dispatch(handleIncrementClick())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(handleDecrementClick())}>-</button>
        <button onClick={() => dispatch(handleResetClick())}>-</button>
      </div>
      ;
    </div>
  );
};

export default Cart;
