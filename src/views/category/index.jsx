import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { BASE_URL } from "../../constants";
import FilterBlock from "./filtered-block/filtered-block";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { getCategorys } from "../../store/selectors";
import { useSelector } from "react-redux";
import { CardItemView } from "../../components/card-item/card-item-view";
import { BreadCrumbs } from "../../components/bread-crumbs/bread-crumbs";
import { CardItem } from "../../components/card-item/card-item";
import useData from "../../hooks/useData";
import { requestCurrentCategoryProducts } from "../../store/async-action";
import { getCurrenCategoryProducts } from "../../store/selectors";
import shopSlice from "../../store/shop-slice";
import {useDispatch } from "react-redux";
import { seCategoryProducts } from "../../store/shop-slice";


export const Category = (allCategories) => {
  const {isLoading} = useSelector((state) => state.shop.isLoading)
  const { categoryId } = useParams();
  const currentCategory = useSelector(getCategorys)[+categoryId - 1];
  const dispatch = useDispatch()
   
   const data = useData(() => requestCurrentCategoryProducts(+categoryId), getCurrenCategoryProducts);
  
   const [filteredPosts, setFilteredPosts] = useState([data]);
       
 return  (
    <section>
      <CardItem dataItems={filteredPosts}  filterData={data} setFilteredPosts={setFilteredPosts} />  
    </section>
  );
};
