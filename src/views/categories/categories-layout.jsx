
import React from "react";
import styles from "./index.module.scss";
import cn from "classnames"
import { CategoryList } from "./categories-list";
import { BreadCrumbs } from "../../components/bread-crumbs/bread-crumbs";
import { Title } from "../../components/title/title";

export const CategoriesLayout = ({categoriesItem, text, btnText, btnDispplay, hideBreadCrumbs, gap,categorys}) => {

  const DATA_CATEGORY = categoriesItem ? categorys.slice(0,categoriesItem) : categorys;
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
