import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { authSelector } from "../../pages/login/selectors";
import { CartSelector } from "../../pages/cart/selectors";

import { Button, Badge, IconButton, TextField } from "@mui/material";
import AuthService from "../../services/AuthService";
import { LoginContainer } from "../../pages/login/containers/LoginContainer";
import { AccountCircle, ShoppingCart } from "@mui/icons-material";

import "./Header.css";
import logo from "../../static/images/logo.svg";

const Header = () => {
  const { quantity } = useSelector(CartSelector);
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
              <NavLink to="../cart">
                <Badge badgeContent={quantity} color="primary">
                  <IconButton to="../cart">
                    <ShoppingCart color="primary" />
                  </IconButton>
                </Badge>
              </NavLink>
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
