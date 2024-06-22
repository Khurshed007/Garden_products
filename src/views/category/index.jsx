import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CardItem } from "../../components/card-item/card-item";
import { requestCurrentCategoryProducts } from "../../store/async-action";
import { useShopAction } from "../../hooks/useShopAction";
import { Navigate } from "react-router-dom";
import { NotFound } from "../404/not found";

export const Category = () => {
  const { categoryId } = useParams();

  const dispatch = useDispatch();
  const { categoryProducts, categorys } = useShopAction();
  useEffect(() => {
    if (!categoryProducts.length || !categoryProducts) {
      // Запрос только тогда, когда его не было ранее
      dispatch(requestCurrentCategoryProducts(+categoryId));
    }
  }, [dispatch, categoryId]);
  const isCategoryDiscovered = categorys.some(({ id }) => +id === +categoryId);

  //   console.log(isCategoryDiscovered, "I am DIsoc")

  console.log(useParams(), "uSE PARAMS");


  const [filteredPosts, setFilteredPosts] = useState([categoryProducts]);

  return { isCategoryDiscovered } ? (
    <section>
      <CardItem
        dataItems={filteredPosts}
        filterData={categoryProducts}
        setFilteredPosts={setFilteredPosts}
      />
    </section>
  ) : (
    <h1>Hallo</h1>
  );
};
