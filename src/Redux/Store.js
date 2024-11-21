// src/Redux/Store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/counter/counterSlice";
import cartReducer from "../Features/counter/cartslice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});
