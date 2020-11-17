import React, { useState } from "react";

//components
import "./Banner.css";

// other
import logo from "../images/logo-br.svg";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import { Button } from "@material-ui/core";

const Banner = () => {
  const [user, setUser] = useState("td_fraser@hotmail.co.uk");

  return (
    <div className="banner">
      <div className="banner__left">
        <img src={logo} />
        <h1>THE BIG RAFFLE</h1>
      </div>
      <div className="banner__right">
        <div className="banner__right__user">
          <PersonOutlineOutlinedIcon />
          <p>{user}</p>
        </div>
        <div className="banner__right__logout">
          <Button variant="outlined">logout</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
