import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { BASE_URL } from "../../constants";

export const CategoryList = ({ image, id, title }) => {
  return (
    <>
      <Link to={`/categories/${id}`}>
        <div  className={styles.categories_cards}>
          <div className={styles.categories_cards_img} style={{backgroundImage:`url(${BASE_URL+image})`}}>
          </div>
          <span className={cn(styles.categories_cards_text)}>{title}</span>
        </div>
      </Link>
    </>
  );
};
