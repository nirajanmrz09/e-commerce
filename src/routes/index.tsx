import React from "react";
import ProductPage from "../pages/product";
import { Route, Routes } from "react-router-dom";
import CartPage from "../pages/cart";
import Layout from "../layout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>

      {/* ... etc. */}
    </Routes>
  );
};

export default Router;
