import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./CartItemStyle";

const CartItem = ({ items, onUpdateCartQuantity, onRemoveFromCart }) => {
  const classes = useStyles();

  // console.log(items);
  return (
    <>
      <Card>
        <CardMedia
          image={items.image.url}
          alt={items.name}
          className={classes.media}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h4">{items.name}</Typography>
          <Typography variant="h5">
            {items.line_total.formatted_with_symbol}
          </Typography>
        </CardContent>
        <CardActions className={classes.cartActions}>
          <div className={classes.buttons}>
            <Button
              type="button"
              size="small"
              onClick={() => onUpdateCartQuantity(items.id, items.quantity - 1)}
            >
              -
            </Button>
            <Typography>{items.quantity}</Typography>
            <Button
              type="button"
              size="small"
              onClick={() => onUpdateCartQuantity(items.id, items.quantity + 1)}
            >
              +
            </Button>
          </div>
          <Button
            variant="contained"
            type="button"
            color="secondary"
            onClick={() => onRemoveFromCart(items.id)}
          >
            Remove item
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CartItem;
