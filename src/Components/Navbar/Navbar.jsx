import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";

import { ShoppingCart } from "@material-ui/icons";
import { NavLink, useLocation } from "react-router-dom";

import useStyles from "./NavbarStyle";
import logo from "../../assets/commerce.png";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Fragment>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={NavLink}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt=" E-Commerce Web"
              height="25px"
              className={classes.image}
            />
            E-Commerce Web
          </Typography>

          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={NavLink}
                to="/cart"
                aria-label="Show Cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
