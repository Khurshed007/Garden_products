import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";
import { Navigation } from "../navigation/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setPath } from "../../store/shop-slice";
import { getPath } from "../../utils/getPath";
import { Loading } from "../loading/loading";
import { ErrorMessage } from "../404/error";
import { getAllItems, getCategorys } from "../../store/selectors";
export const Layout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const category = useSelector(getCategorys)
  const items = useSelector(getAllItems)
  const isLoading = useSelector((state) => state.shop.isLoading)
  const  isError = useSelector((state) => state.shop.isError);

  useEffect(() => {
    dispatch(setPath(getPath(pathname, items, category)));
  }, [pathname, category, items, dispatch]);

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
