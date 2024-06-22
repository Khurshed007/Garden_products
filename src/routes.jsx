import React from "react";
import { Routes, Route } from "react-router-dom";
import { Categories } from "./views/categories";
import { Main } from "./views/main";
import { Layout } from "./views/layout";
import { NotFound } from "./views/404/not found";
import CartContent from "./components/cart-content/cart-content";
import { Product } from "./views/product/product";
import { AllProductsRoute } from "./views/all-products/route";
import { AllSalesRoute } from "./views/all-sales/route";
import { LikedProductsRoute } from "./views/liked-products/liked-products-route";
export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} /> // НАШ ПЕРВЫЙ Эл в Outlet
        <Route path="categories/*" element={<Categories />} />
        <Route path="all-sales/*" element={<AllSalesRoute />} />
        <Route path="all-products/*" element={<AllProductsRoute />} />
        <Route path="liked-products/*" element={<LikedProductsRoute />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="cart" element={<CartContent />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
