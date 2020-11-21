import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../features/cart/cartSlice";
import { orderSlice } from "../features/order/orderSlice";
import { userSlice } from "../features/user/userSlice";

export default configureStore({
  reducer: {
    cart: cartSlice.reducer,
    user: userSlice.reducer,
    order: orderSlice.reducer,
  },
});
