import React from "react";

//components
import "./Footer.css";

// other
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import InstagramIcon from "@material-ui/icons/Instagram";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { Link } from "react-router-dom";

// redux
import { useSelector } from "react-redux";
import { selectCart } from "../features/cart/cartSlice";

const Footer = () => {
  const cart = useSelector(selectCart);

  return (
    <div className="footer">
      <div className="footer__icons">
        <div className="footer__icons__link">
          {" "}
          <Link to="/cart">
            <ShoppingCartOutlinedIcon />
          </Link>
          {cart?.length ? <p>{cart?.length}</p> : null}
        </div>
        <div className="footer__icons__link">
          {" "}
          <Link to="/main">
            <HomeOutlinedIcon />
          </Link>
        </div>
        <div className="footer__icons__link">
          {" "}
          <a href="https://www.instagram.com/thebigraffle/" target="blank">
            <InstagramIcon />
          </a>
        </div>
      </div>
      <p className="footer__bottom">2020 THE BIG RAFFLE ALL RIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;
