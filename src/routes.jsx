import React from "react";
import { Routes, Route } from "react-router-dom";
import { Categories } from "./views/categories";
import { Main } from "./views/main";
import { Layout } from "./views/layout";
import { AllProductsRoute } from "./views/all-products/route";
import { AllSalesRoute } from "./views/all-sales/route";
import { NotFound } from "./views/not-found";
import { Product } from "./views/product/product";
export const RootRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="categories/*" element={<Categories />} />
        <Route path="all-sales/*" element={<AllSalesRoute />} />
        <Route path="all-products/*" element={<AllProductsRoute />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  );
};
