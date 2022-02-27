import React, { Fragment } from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";

import useStyles from "./CartStyle";
import CartItem from "./CartItem/CartItem";
import { NavLink } from "react-router-dom";

const Cart = ({
  cart,
  handleUpdateCartQuantity,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();

  // console.log(cart);

  const EmptyCart = () => {
    return (
      <Typography variant="subtitle1" gutterBottom>
        You have no items in your shopping cart,
        <NavLink to="/" className={classes.link}>
          start adding some!
        </NavLink>
      </Typography>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((cart) => (
            <Grid item xs={12} sm={4} key={cart.id}>
              <CartItem
                items={cart}
                onUpdateCartQuantity={handleUpdateCartQuantity}
                onRemoveFromCart={handleRemoveFromCart}
              />
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography variant="h4">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleEmptyCart}
            >
              Empty Cart
            </Button>
            <Button
              className={classes.checkoutButton}
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Checkout
            </Button>
          </div>
        </div>
      </>
    );
  };

  if (!cart.line_items) return "loading....";
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant="h3" className={classes.title}>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
