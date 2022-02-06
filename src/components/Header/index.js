import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";

import { authSelector } from "../../pages/login/selectors";
import { NAVIGATION } from "./config";
import { Button } from "@mui/material";
import AuthService from "../../services/AuthService";

import { AccountCircle, ShoppingCart } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "./Header.css";

const Header = () => {
  const { isAuth } = useSelector(authSelector);
  const navigationItems = useMemo(() => {
    const targetNavigationItems = isAuth ? "PRIVATE" : "PUBLIC";

    return NAVIGATION[targetNavigationItems];
  }, [isAuth]);

  return (
    <>
      <div className="header__wrapper">
        <div className="header__wrapper-logo">
          <h1>Logo</h1>
        </div>
        <div className="nav__wrapper">
          <ul className="nav__wrapper-menu">
            <li className="nav__wrapper-list">
              <a href="#" className="nav__wrapper-link">
                Blog
              </a>
            </li>
            <li className="nav__wrapper-list">
              <a href="#" className="nav__wrapper-link">
                Products
              </a>
            </li>
            <li className="nav__wrapper-list">
              <a href="#" className="nav__wrapper-link">
                Contact us
              </a>
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
            navigationItems.map(({ title, path }) => (
              <div className="header__wrapper-buttons">
                <Button key={title} variant="outlined">
                  <NavLink to={path}>{title}</NavLink>
                </Button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
