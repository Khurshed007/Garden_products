
import React from "react";
import styles from "./index.module.scss";
import cn from "classnames"
import { CategoryList } from "./categories-list";

// Кастомный Хук useCategory для запроса и чтения
import useData from "../../hooks/useData";
import { requestCategoryItem } from "../../store/async-action";
import { getCategorys } from "../../store/selectors";
import { BreadCrumbs } from "../../components/bread-crumbs/bread-crumbs";
import { Title } from "../../components/title/title";

export const CategoriesLayout = ({categoriesItem, text, btnText, btnDispplay, hideBreadCrumbs, gap}) => {
  const allCategories = useData(requestCategoryItem, getCategorys);
  const DATA_CATEGORY = categoriesItem ? allCategories.slice(0,categoriesItem) : allCategories;
  return (
    <>
      <section>
      
        <Title  text = {text} btnText = {btnText} btnDispplay = {btnDispplay} path={"categories"}/>
      {hideBreadCrumbs || <BreadCrumbs />} 
        <div className={cn(styles.list, {[styles.gap] : gap})}>
          {DATA_CATEGORY.map(({ image, id, title }) => (
            <CategoryList id={id} image={image} title={title} key={id}/>
          ))}
        </div>
      </section>
    </>
  );
};
