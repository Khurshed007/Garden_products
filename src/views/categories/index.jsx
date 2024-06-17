import React from "react";
import { Routes, Route } from "react-router-dom";
import { CategoriesLayout } from "./categories-layout";
import { Category } from "../category";
import { Product } from "../product/product";
import { requestCategoryItem } from "../../store/async-action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useShopAction } from "../../hooks/useShopAction";
import { requestAllProductItem } from "../../store/async-action";
import { NotFound } from "../not-found";
export const Categories = ({
  categoriesItem,
  btnText,
  btnDispplay,
  hideBreadCrumbs,
  gap,
}) => {
  const dispatch = useDispatch();
  const { categorys } = useShopAction();
  useEffect(() => {
    if (!categorys.length || !categorys) {
      // Запрос на all products делается только тогда  когда мы переходим на main,all sales all products, categories без внимания
      dispatch(requestCategoryItem());
      dispatch(requestAllProductItem());
    }
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <CategoriesLayout
              categorys={categorys}
              gap={gap}
              hideBreadCrumbs={hideBreadCrumbs}
              categoriesItem={categoriesItem}
              text={"Categories"}
              btnText={btnText}
              btnDispplay={btnDispplay}
            />
          }
        />
        <Route
          path="/:categoryId/*"
          element={<Category allCategories={categorys} />}
        />
        <Route path="/:categoryId/product/:productId" element={<Product />} />
      </Routes>
    </>
  );
};
