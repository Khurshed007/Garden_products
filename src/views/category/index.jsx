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

export const Category = () => {
  const { categoryId } = useParams();
  let currentCategory = useSelector(getCategorys)[+categoryId - 1];
  let currentCategoryTitle = currentCategory.title;
  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/categories/${categoryId}`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then(({ data }) => {
        // У нашего возвр obj есть поле data-massive у которого элементы объекты
        console.log(Array.isArray(data));
        setCategoryItems([...data]);
      });
  }, []);

  let [filteredPosts, setFilteredPosts] = useState([categoryItems]);

  return (
    <section>
      <CardItem dataItems={filteredPosts} text={currentCategoryTitle} filterData={categoryItems} setFilteredPosts={setFilteredPosts} />
    </section>
  );
};
