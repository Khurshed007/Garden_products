import React, { useState, useEffect, useCallback, useMemo } from "react";

// Redux store
import { requestAllProductItem } from "../../store/async-action";
import { useDispatch } from "react-redux";

import { CardItem } from "../../components/card-item/card-item";
import { useShopAction } from "../../hooks/useShopAction";

export const AllSales = () => {
  const dispatch = useDispatch();
  const { items } = useShopAction();
  useEffect(() => {
    if (!items.length || !items) {
      dispatch(requestAllProductItem());
    }
  }, [dispatch]);



  const discontItemsList = useMemo(() => {
    // filter исходный массив не меняет поэтому смело без клонирования
    return items.filter(({ discont_price }) => discont_price !== null);
  }, []); // без зависимостей мемоизация всего 1 раз

  let [filteredPosts, setFilteredPosts] = useState([...discontItemsList]); // spread дабы избежать изменения исх. массива
  return (
    <section>
      <CardItem
        isAllSales={true}
        dataItems={filteredPosts}
        text={"Discounted Items"}
        filterData={discontItemsList}
        setFilteredPosts={setFilteredPosts}
      />
    </section>
  );
};
