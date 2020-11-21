import { createSlice } from "@reduxjs/toolkit";

// state

export const orderSlice = createSlice({
  name: "order",
  initialState: "",

  reducers: {
    newOrder: (state, action) => {
      return (state = action.payload);
    },
  },
});

// actions
export const { newOrder } = orderSlice.actions;

// selector
export const selectOrder = (state) => state.order;

export default orderSlice.reducer;
