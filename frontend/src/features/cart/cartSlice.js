import { createSlice } from "@reduxjs/toolkit";

// state

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
    removeFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    emptyCart: (state) => {
      return (state = []);
    },
  },
});

// actions
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

// selector
export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
