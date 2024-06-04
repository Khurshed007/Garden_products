import React, { useContext } from "react";
import { HeartIcon, CartIcon } from "../../assets/icons";
import styles from "./index.module.scss";
import { BASE_URL } from "../../constants";
import { Link } from "react-router-dom";


import { useCartAction } from "../../hooks/useCartAction";
import cn from "classnames"
import { useSelector } from "react-redux";
import { toggleLikes } from "../../store/shop-slice";
import { useShopAction } from "../../hooks/useShopAction";

export const CardItemView = ({
  price,
  description,
  image,
  discont,
  discontPercent,
  title,
  id,
  noMargin
}) => {
 const {likesCounter} = useShopAction()
 const likesData = useSelector((state) => state.shop.likesData);
const {handleCartState,goodsData } = useCartAction()
let isDiscont = discont !== null;
//  console.log(discont, "Discont")

  return (
    <div className={cn(styles.wrapper, {[styles.wrapper__no_margin] : noMargin})}>
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
        addtoLikes={toggleLikes}
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
        {/* <div className={styles.oldPrice}>${discont} </div> */}
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
