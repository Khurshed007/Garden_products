import React, { useState, useContext, useEffect } from "react";
import useData from "../../hooks/useData";
import { requestAllProductItem } from "../../store/async-action";


import { CardItem } from "../../components/card-item/card-item";

export const AllProducts = () => {
  const DATA_ALL_PRODUCTS = useData(
    requestAllProductItem,
    (state) => state.shop.items
  );
  let [filteredPosts, setFilteredPosts] = useState([DATA_ALL_PRODUCTS]);

  return (
    <section>
      <CardItem dataItems={filteredPosts} text={"All Products"} filterData={DATA_ALL_PRODUCTS} setFilteredPosts={setFilteredPosts}/>
    </section>
  );
};
