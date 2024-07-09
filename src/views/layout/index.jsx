import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";
import { Navigation } from "../navigation/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setPath } from "../../store/shop-slice";
import { getPathRoute } from "../../utils/getPath";
import { Loading } from "../loading/loading";
import { ErrorMessage } from "../404/error";
import {
  getAllItems,
  getCategorys,
  getIsError,
  getIsLoading,
} from "../../store/selectors";
export const Layout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const category = useSelector(getCategorys);
  const items = useSelector(getAllItems);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getIsError);

  useEffect(() => {
    dispatch(setPath(getPathRoute(pathname, items, category)));
  }, [pathname, items, dispatch,category]); // items в зависимости потому что асинхронному запросу нужно время иначе мы получим пустой массив;

  return (
    <main>
      <Navigation />
      {/* <Loading/> */}
      {isError ? <ErrorMessage /> : isLoading ? <Loading /> : <Outlet />}
      <Footer />
    </main>
  );
};
