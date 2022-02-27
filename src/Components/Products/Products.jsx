import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./productsStyles";

import Product from "./Product/Product";

// const products = [
//   {
//     id: 1,
//     name: "shoes",
//     description: "Running shoes",
//     price: "$5",
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/81YcpcTYNuL._AC_UL604_SR604,400_.jpg",
//   },
//   {
//     id: 2,
//     name: "laser",
//     description: "Running Laser",
//     price: "$10",
//     image: "https://m.media-amazon.com/images/I/71OwFXQY3HL._AC_SL1500_.jpg",
//   },
//   {
//     id: 3,
//     name: "LapTop",
//     description: "Hp Laptop",
//     price: "$200",
//     image: "https://m.media-amazon.com/images/I/31KUAop6x6L._AC_.jpg",
//   },
//   {
//     id: 4,
//     name: "Mac-book",
//     description: "Apple Mac-book",
//     price: "$300",
//     image: "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SL1500_.jpg",
//   },
// ];

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => {
          return (
            
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
