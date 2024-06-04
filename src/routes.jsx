import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./views/main";
import { Layout } from "./views/layout";


export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
};
