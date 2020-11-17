import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../features/cart/cartSlice";
import { userSlice } from "../features/user/userSlice";

export default configureStore({
  reducer: {
    cart: cartSlice.reducer,
    user: userSlice.reducer,
  },
});
