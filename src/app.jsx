import React from "react";
import { RootRoutes } from "./routes";
import "./index.scss"
import BodyClassManager from "./views/body-class-toggle";
import { useShopAction } from "./hooks/useShopAction";
import { useSelector } from "react-redux";
export const App = () => {
  const {theme} = useShopAction()
  return (

    <>
    <BodyClassManager isthemeDark={theme}/>
      <RootRoutes />
    </>
  );
};
