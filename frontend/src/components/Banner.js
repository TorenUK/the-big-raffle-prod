import React, { useState } from "react";

//components
import "./Banner.css";

// other
import logo from "../images/logo-br.svg";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../features/user/userSlice";

const Banner = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="banner">
      <div className="banner__left">
        <img src={logo} />
        <h1>THE BIG RAFFLE</h1>
      </div>
      <div className="banner__right">
        {user ? (
          <>
            <div className="banner__right__user">
              <PersonOutlineOutlinedIcon />
              <p>{user}</p>
            </div>
            <div className="banner__right__logout">
              <Button
                onClick={() => {
                  if (user) {
                    dispatch(logout());
                    history.push("/");
                  }
                }}
                variant="outlined"
              >
                logout
              </Button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Banner;
