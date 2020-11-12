import React from "react";

//components
import "./Item.css";

// other
import { Button } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

// redux
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const Item = ({ name, image, price, stock, notify }) => {
  const dispatch = useDispatch();

  return (
    <div className="item">
      <div className="item__title">
        <h3>{name}</h3>
      </div>
      <div className="item__image">
        <img src={image} alt="item" />
      </div>
      <div className="item__text">
        <h2>£{price}</h2>
        <p>
          <span>{stock}</span> tickets available
        </p>
      </div>
      <div className="item__interact">
        <Button
          onClick={() => {
            notify(name);
            dispatch(
              addToCart({
                name: name,
                image: image,
                price: price,
                id: uuidv4(),
              })
            );
          }}
          variant="contained"
        >
          ADD TO CART
        </Button>
      </div>
    </div>
  );
};

export default Item;
