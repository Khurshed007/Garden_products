import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { BASE_URL } from "../../constants";

// import { Categories } from "../../../categories";
import { themeContext } from "../../context/theme";

export const CategoryList = ({image,id,title}) => {
  const {theme, switchTheme} = useContext(themeContext);



  return (
    <>

          <Link to ={`/categories/${id}`} >
            <div className={styles.categories_cards}>
              <div className={styles.categories_cards_img}>
                <img src={BASE_URL+image} alt="" />
              </div>
              <span className={cn(styles.categories_cards_text)}>{title}</span>
            </div>
          </Link>


    </>
  );
};
