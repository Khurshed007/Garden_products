import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";
import { Navigation } from "../navigation/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setPath } from "../../store/shop-slice";
import { Loading } from "../loading/loading";
import { requestAllProductItem } from "../../store/async-action";

export const Layout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const category = useSelector((state) => state.shop.category);
  const items = useSelector((state) => state.shop.items);
  const isLoading = useSelector((state) => state.shop.isLoading);
  useEffect(() => {
    // Создание пути и обновление state
    const pathList = pathname.split("/").filter(Boolean);
    const newPathArray = pathList
      .map((item, index, arr) => {
        if (arr[index - 1] === "categories" && category[index]) {
          const originalString = arr[index][0];

          // Преобразуем первую букву в заглавную и заменяем её
          const newString = originalString.replace(
            /^./,
            originalString[0].toLocaleUpperCase()
          );
          return category[+item - 1].title;
        }
        if (arr[index - 1] === "product" && items[index]) {
          return items[+item - 1].title;
        }
        return item
          .split("-")
          .join(" ")
          .replace(/^./, item[0].toLocaleUpperCase()); // Убираем - и делаем первую букву каждого элемента заглавными
      })
      .filter((elements) => elements !== "Product");
    dispatch(setPath(newPathArray));
  }, [pathname, category, items, dispatch]);

  const myPath = useSelector((state) => state.shop.path);
  return (
    <main>
      {/* {isLoading ? (
        <>
          <Navigation /> 
          <Loading />
        </>
      ) : (
        <>
          <Navigation />
          <Outlet />

          <Footer />
        </>
      )} */}
      {/* <Navigation />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Outlet />
          <Footer />
        </>
      )} */}

       <Navigation />
          <Outlet />

          <Footer /> 
    </main>
  );
};
