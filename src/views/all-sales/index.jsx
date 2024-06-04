import React, { useState } from "react";
import FilterBlock from "../category/filtered-block/filtered-block";
import AllSalesView from "./all-sales-view";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { CardItemView } from "../../components/card-item/card-item-view";

// Redux store
import { requestAllProductItem } from "../../store/async-action";
import { getAllSales } from "../../store/selectors";

// Кастомный Хук
import useData from "../../hooks/useData";
import { BreadCrumbs } from "../../components/bread-crumbs/bread-crumbs";
import { CardItem } from "../../components/card-item/card-item";

export const AllSales = () => {
  const DATA_ALL_SALES = useData(requestAllProductItem, getAllSales);
  let [filteredPosts, setFilteredPosts] = useState([DATA_ALL_SALES]);
  const DiscontItemsList = filteredPosts.filter(
    ({ discont_price }) => discont_price !== null
  );
  return (
    <section>
      <CardItem allSales = {true} dataItems={DiscontItemsList} text={"Discounted Items"} filterData={DATA_ALL_SALES} setFilteredPosts={setFilteredPosts}/>
    </section>
  );
};
