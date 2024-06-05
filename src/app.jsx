import React, {useState } from "react";
import { RootRoutes } from "./routes";
import BodyClassManager from "./views/body-class-toggle";
import { useSelector } from "react-redux";

export const App = () => {
  const theme = useSelector(state =>  state.shop.theme)


  return (
    <>
      <BodyClassManager isthemeDark={theme}  />
      <RootRoutes />
    </>
  );
};
