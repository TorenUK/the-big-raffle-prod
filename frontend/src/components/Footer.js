import React from "react";

//components
import "./Footer.css";

// other
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlinedIcon from "@material-ui/icons/MailOutlined";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__icons">
        <ShoppingCartOutlinedIcon />
        <InstagramIcon />
        <MailOutlinedIcon />
      </div>
      <div className="footer__links">
        <a className="link">
          <p>link</p>
        </a>
        <a className="link">
          <p>link</p>
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
