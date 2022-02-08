import { NavLink, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";

import { authSelector } from "../../pages/login/selectors";
import { NAVIGATION } from "./config";
import { Button } from "@mui/material";
import AuthService from "../../services/AuthService";
import { LoginContainer } from "../../pages/login/containers/LoginContainer";

import { AccountCircle, ShoppingCart } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import "./Header.css";
import logo from "../../static/images/logo.svg";

const Header = () => {
  const { isAuth } = useSelector(authSelector);

  return (
    <>
      <div className="header__wrapper">
        <div className="header__wrapper-logo">
          <a href="#">
            <img alt="logo" className="logo" src={logo}></img>
          </a>
        </div>
        <div className="nav__wrapper">
          <ul className="nav__wrapper-menu">
            <li className="nav__wrapper-list">
              <NavLink className="nav__wrapper-link" to="../blog">
                Blog
              </NavLink>
            </li>
            <li className="nav__wrapper-list">
              <NavLink className="nav__wrapper-link" to="../products">
                Products
              </NavLink>
            </li>
            <li className="nav__wrapper-list">
              <NavLink className="nav__wrapper-link" to="../contact">
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header__wrapper-menu">
          {isAuth ? (
            <div className="header__wrapper-buttons">
              <Button
                onClick={() => AuthService.signOut()}
                variant="outlined"
                fontSize="small"
              >
                Logout
              </Button>
              <IconButton>
                <ShoppingCart color="primary" />
              </IconButton>
              <IconButton>
                <AccountCircle color="primary" />
              </IconButton>
            </div>
          ) : (
            <>
              <LoginContainer />
              <Button key="Sign Up" variant="outlined">
                <NavLink className="header__wrapper-signUp" to="../signup">
                  Sign up
                </NavLink>
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
