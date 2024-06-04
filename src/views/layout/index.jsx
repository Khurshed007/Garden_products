import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";
import { Navigation } from "../navigation/navigation";

export const Layout = () => {
  return (
    <main>
      <Navigation />
      <Outlet />
      <Footer />
    </main>
  );
};
