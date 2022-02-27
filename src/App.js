import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
import "./App.css";
import { Cart, Navbar, Products } from "./Components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    // const data = await response.json();
    // console.log(data);
    setProducts(data);
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  const handleUpdateCartQuantity = async (productId, quantity) => {
    const update = await commerce.cart.update(productId, { quantity });
    setCart(update.cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const remove = await commerce.cart.remove(productId);
    setCart(remove.cart);
  };

  const handleEmptyCart = async () => {
    const empty = await commerce.cart.empty();
    setCart(empty.cart);
  };
  // useEffect === componentDidMount in class function

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  // console.log(products);
  // console.log(cart);
  return (
    <BrowserRouter>
      <Navbar totalItems={cart.total_items} />
      <Routes>
        <Route
          path="/"
          element={
            <Products products={products} onAddToCart={handleAddToCart} />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              handleEmptyCart={handleEmptyCart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleUpdateCartQuantity={handleUpdateCartQuantity}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
