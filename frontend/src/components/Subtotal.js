import React from "react";

// components
import "./Subtotal.css";

// other
import CurrencyFormat from "react-currency-format";

// redux
import { useSelector } from "react-redux";
import { selectCart } from "../features/cart/cartSlice";

const Subtotal = () => {
  const cart = useSelector(selectCart);

  // calculate basket total
  const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => parseInt(item.price) + amount, 0);

  return (
    <div className="subtotal">
      <div className="subtotal__total">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <h3>
                subtotal: {cart?.length} ticket(s) <strong>{value}</strong>
              </h3>
            </>
          )}
          decimalScale={2}
          value={getCartTotal(cart)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"£"}
        />
      </div>
    </div>
  );
};

export default Subtotal;
