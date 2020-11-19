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

const Order = () => {
  const user = useSelector(selectUser);

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
