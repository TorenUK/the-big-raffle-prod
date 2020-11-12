import React from "react";

// components
import "./CartItem.css";

// other
import { Button } from "@material-ui/core";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

// redux
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

const CartItem = ({ name, image, price, id, removeBtn }) => {
  const dispatch = useDispatch();

  return (
    <div className="cartItem">
      <div className="cartItem__image">
        <img src={image} />
      </div>
      <div className="cartItem__info">
        <p>{name}</p>
        <p>£{price}</p>
      </div>
      {removeBtn ? (
        <div className="cartItem__interact">
          <Button
            onClick={() => {
              dispatch(
                removeFromCart({
                  id: id,
                })
              );
            }}
            size="small"
            variant="contained"
          >
            <DeleteForeverOutlinedIcon />
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default CartItem;
