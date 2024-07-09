import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardItem } from "../../components/card-item/card-item";
import { requestCurrentCategoryProducts } from "../../store/async-action";
import {getCurrenCategoryProducts } from "../../store/selectors";

export const Category = () => {
  const { categoryId } = useParams();

  const dispatch = useDispatch();
  const categoryProducts = useSelector(getCurrenCategoryProducts);
  useEffect(() => {
    if (!categoryProducts.length || !categoryProducts) {
      // Запрос только тогда, когда его не было ранее
      dispatch(requestCurrentCategoryProducts(+categoryId));
    }
  }, [dispatch, categoryId,categoryProducts]);

  const [filteredPosts, setFilteredPosts] = useState([categoryProducts]);

  return (
    <section>
      <CardItem
        dataItems={filteredPosts}
        filterData={categoryProducts}
        setFilteredPosts={setFilteredPosts}
      />
    </section>
  );
};
