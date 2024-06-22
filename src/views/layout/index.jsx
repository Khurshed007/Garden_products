import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";
import { Navigation } from "../navigation/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setPath } from "../../store/shop-slice";
import { getPath } from "../../utils/getPath";
import { Loading } from "../loading/loading";
import { useShopAction } from "../../hooks/useShopAction";
import { ErrorMessage } from "../404/error";
export const Layout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const  {category,items,isLoading,isError} = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(setPath(getPath(pathname, items, category)));
  }, [pathname, category, items, dispatch]);

  const myPath = useSelector((state) => state.shop.path);
  return (
    <main>
      <Navigation />
      {/* <Outlet/> */}
      {/* <Loading/> */}
      {isError ? <ErrorMessage /> : (isLoading ? <Loading /> : <Outlet />)} 
      <Footer />
    </main>
  );
};
