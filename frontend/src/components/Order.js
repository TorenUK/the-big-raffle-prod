import React from "react";

// components
import "./Order.css";
import Banner from "./Banner";
import Footer from "./Footer";

// other
import { Button } from "@material-ui/core";

// redux
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import { selectCart } from "../features/cart/cartSlice";

const Order = () => {
  const user = useSelector(selectUser);
  const cart = useSelector(selectCart);

  return (
    <div className="order">
      <Banner />
      <div className="order__container">
        <h1>thanks for your order!</h1>
        <h3>{user}</h3>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
