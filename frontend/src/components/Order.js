import React, { useEffect, useState } from "react";

// components
import "./Order.css";
import Banner from "./Banner";
import Footer from "./Footer";

// other
import { Button } from "@material-ui/core";
import axios from "./axios";

// redux
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import { selectOrder } from "../features/order/orderSlice";

const Order = () => {
  const user = useSelector(selectUser);
  const order = useSelector(selectOrder);
  const dispatch = useDispatch();

  return (
    <div className="order">
      <Banner />
      {order ? (
        <div className="order__container">
          <div className="order__top">
            {order.items.length > 1 ? (
              <h1>your entries are in!</h1>
            ) : (
              <h1>your entry is in!</h1>
            )}
            <h3>{user}</h3>
            <h3>{order.items.length} ticket(s)</h3>
          </div>
          <div className="order__id">
            <h3>order number: {order.order}</h3>
          </div>
          <div className="order__address">
            <h3>{order.name}</h3>
            <h3>{order.address.line1}</h3>
            <h3>{order.address.postcode}</h3>
          </div>
        </div>
      ) : (
        <div>hello no order</div>
      )}

      <Footer />
    </div>
  );
};

export default Order;
