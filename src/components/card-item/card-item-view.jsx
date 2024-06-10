import React from "react";
import { HeartIcon, CartIcon } from "../../assets/icons";
import styles from "./index.module.scss";
import { BASE_URL } from "../../constants";
import { Link, useParams } from "react-router-dom";


import { useCartAction } from "../../hooks/useCartAction";
import cn from "classnames"
import { useSelector } from "react-redux";
import { useShopAction } from "../../hooks/useShopAction";
import { memo } from "react";


 const CardItemView = ({
  price,
  image,
  discont,
  discontPercent,
  title,
  id,
  noMargin
}) => {

 const {likesCounter} = useShopAction()
 const likesData = useSelector((state) => state.shop.likesData);
 const {toggleToLikes} = useShopAction()
const {handleCartState,goodsData } = useCartAction()
let isDiscont = discont !== null;
  return (
    <div key={id} className={cn(styles.wrapper, {[styles.wrapper__no_margin] : noMargin})}>
    <div className={styles.header}>
      {isDiscont && (
        <div className={styles.discount}>{discontPercent}%</div>
      )}
      <img src={BASE_URL + image} alt="card" className={styles.cardImage} />

      <HeartIcon
        className={cn(styles.heart, {
          [styles.checked]: likesData[id],
        })}
        likesCounter={likesCounter}
        toggleToLikes={toggleToLikes}
        id={id}
        likesData={likesData}
      />
    {noMargin || <CartIcon id = {id} select = {id} handleCartState = {handleCartState}  className={cn(styles.cart, {
          [styles.checked]: goodsData[id],
        })} />  } 

    </div>
    <div className={styles.info}>
      <div className={styles.title}>{title}</div>
      <Link to={`product/${id}`}>
      <div className={styles.prices}>
        {isDiscont ? (
          <><div className={styles.oldPrice}>${discont} </div>
          <div className={styles.newPrice}>${price}</div>
          </>
        ) :  (<div className={styles.oldPrice}>${price} </div>)}
      </div>
      </Link>
    </div>
  </div>
  );
};

export const MemoCardItemView = memo(CardItemView)