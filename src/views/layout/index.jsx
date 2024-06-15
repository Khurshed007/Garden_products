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

export const Layout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const category = useSelector((state) => state.shop.category);
  const items = useSelector((state) => state.shop.items);
  const isLoading = useSelector((state) => state.shop.isLoading);
  useEffect(() => {
    dispatch(setPath(getPath(pathname, items, category)));
  }, [pathname, category, items, dispatch]);

  const myPath = useSelector((state) => state.shop.path);
  return (
    <main>
      <Navigation />
      {/* <Outlet/> */}
      {isLoading ? <Loading /> : <Outlet />}
      <Footer />
    </main>
  );
};
