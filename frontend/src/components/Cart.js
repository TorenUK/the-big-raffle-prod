import React from "react";

// components
import "./Cart.css";
import Banner from "./Banner";
import Footer from "./Footer";
import CartItem from "./CartItem";
import Subtotal from "./Subtotal";

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
            {cart?.map((item) => (
              <CartItem
                name={item.name}
                image={item.image}
                price={item.price}
                id={item.id}
                removeBtn
              />
            ))}
          </div>
        ) : (
          <div className="cart__empty">
            <h1>your cart is empty</h1>
            <Link to="/main">
              {" "}
              <Button variant="outlined">continue shopping</Button>
            </Link>
          </div>
        )}
        {cart?.length ? (
          <div className="cart__subtotal">
            <Subtotal />
          </div>
        ) : null}
        <Footer />
      </div>
    </>
  );
};

export default Cart;
