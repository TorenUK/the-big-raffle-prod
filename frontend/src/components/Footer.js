import React from "react";

//components
import "./Footer.css";

// other
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import InstagramIcon from "@material-ui/icons/Instagram";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__icons">
        <Link to="/cart">
          <ShoppingCartOutlinedIcon />
        </Link>
        <a href="https://www.instagram.com/thebigraffle/" target="blank">
          <InstagramIcon />
        </a>
        <Link to="/main">
          <HomeOutlinedIcon />
        </Link>
      </div>
      <div className="footer__links">
        <a className="link">
          <p>link</p>
        </a>
        <a className="link">
          <p>previous winners</p>
        </a>
        <a className="link">
          <p>link</p>
        </a>
      </div>
      <p className="footer__bottom">2020 THE BIG RAFFLE ALL RIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;
