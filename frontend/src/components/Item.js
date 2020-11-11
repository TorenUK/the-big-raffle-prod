import React from "react";

//components
import "./Item.css";

// other
import { Button } from "@material-ui/core";

const Item = ({ name, image, price, stock, notify }) => {
  return (
    <div className="item">
      <div className="item__title">{name}</div>
      <div className="item__image">
        <img src={image} alt="item" />
      </div>
      <div className="item__text">
        <h2>£{price}</h2>
      </div>
      <div className="item__interact">
        <Button
          onClick={() => {
            notify(name);
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
