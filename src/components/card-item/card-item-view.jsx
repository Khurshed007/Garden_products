import React from "react";
import { HeartIcon, CartIcon } from "../../assets/icons";
import styles from "./index.module.scss";
import { BASE_URL } from "../../constants";
import { Link } from "react-router-dom";

import cn from "classnames";

import { memo } from "react";

export const MemoCardItemView = memo(
  ({
    price,
    image,
    discont,
    discontPercent,
    title,
    id,
    noMargin,
    toggleToLikes,
    handleCartState,
    goodsData,
    likesData,
  }) => {
    console.log("CardItemView Render");
    let isDiscont = discont !== null;
    return (
      <div
        key={id}
        className={cn(styles.wrapper, {
          [styles.wrapper__no_margin]: noMargin,
        })}
      >
        <div className={styles.header}>
          {isDiscont && (
            <div className={styles.discount}>{discontPercent}%</div>
          )}
          <img src={BASE_URL + image} alt="card" className={styles.cardImage} />

          <HeartIcon
            className={cn(styles.heart, {
              [styles.checked]: likesData,
            })}
            toggleToLikes={toggleToLikes}
            id={id}
          />
          {noMargin || (
            <CartIcon
              id={id}
              select={id}
              handleCartState={handleCartState}
              className={cn(styles.cart, {
                [styles.checked]: goodsData,
              })}
            />
          )}
        </div>
        <div className={styles.info}>
          <div className={styles.title}>{title}</div>
          <Link to={`product/${id}`}>
            <div className={styles.prices}>
              {isDiscont ? (
                <>
                  <div className={styles.old_price}>${discont} </div>
                  <div className={styles.new_price}>${price}</div>
                </>
              ) : (
                <div className={styles.old_price}>${price} </div>
              )}
            </div>
          </Link>
        </div>
      </div>
    );
  }
);
