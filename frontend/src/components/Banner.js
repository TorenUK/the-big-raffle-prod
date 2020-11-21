import React, { useState } from "react";

//components
import "./Banner.css";

// other
import logo from "../images/logo-br.svg";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../features/user/userSlice";

const Banner = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const [menu, setMenu] = useState(false);

  return (
    <div className="banner">
      <div className="banner__left">
        <img src={logo} />
        <h1>the big raffle</h1>
      </div>
      <div className="banner__right">
        <nav className="main__nav">
          <div className="banner__user">
            <p>{user}</p>
            {!user ? (
              <Link to="/">
                <Button>login</Button>
              </Link>
            ) : (
              <Button
                onClick={() => {
                  dispatch(logout());
                  history.push("/main");
                }}
              >
                logout
              </Button>
            )}
          </div>
        </nav>
      </div>
      <div className="burger">
        <MenuIcon
          onClick={() => {
            setMenu(!menu);
          }}
        />
      </div>

      {menu ? (
        <nav className="mobile__nav">
          <CloseIcon
            onClick={() => {
              setMenu(false);
            }}
          />
          <ul>
            <li>
              <p>{user}</p>
            </li>
            {user ? (
              <li>
                <Link
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  logout
                </Link>
              </li>
            ) : (
              <Link to="/">login</Link>
            )}

            <li>
              <Link>info</Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};

export default Banner;
