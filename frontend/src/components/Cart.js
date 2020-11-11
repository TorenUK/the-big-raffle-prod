import React from "react";

// components
import "./Cart.css";
import Banner from "./Banner";
import Footer from "./Footer";

// other
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

// redux
import { useSelector } from "react-redux";
import { selectCart } from "../features/cart/cartSlice";

const Cart = () => {
  const cart = useSelector(selectCart);

  return (
    <>
      <div className="cart">
        <Banner />
        {cart?.length ? (
          <div className="cart__items">
            <h1>cart items</h1>
          </div>
        ) : (
          <div className="cart__empty">
            <h1>your cart is empty</h1>
            <Link to="/main">
              {" "}
              <Button variant="contained">continue shopping</Button>
            </Link>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default Cart;
