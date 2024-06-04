import React from "react";
import styles from "./index.module.scss"; // Подключение модуля стилей
import { useSelector } from "react-redux";
import { getAllItems } from "../../store/selectors";
import { BASE_URL } from "../../constants";
import cn from "classnames";
import { memo } from "react";

const CartView =  memo(({
  goodsData,
  counter,
  addtoCart,
  deleteFromCart,
  articul,
  id,
  deleteCart,
}) => {
  const DATA_ALL_PRODUCTS = useSelector(getAllItems);
  const currentPrice = DATA_ALL_PRODUCTS[Number(articul) - 1]["price"];
  const currenttitle = DATA_ALL_PRODUCTS[Number(articul) - 1]["title"];
  const image = DATA_ALL_PRODUCTS[Number(articul) - 1]["image"];
  const currentDiscontPrice =
    DATA_ALL_PRODUCTS[Number(articul) - 1]["discont_price"];
  const totalSum = Number(
    currentDiscontPrice ? currentDiscontPrice * counter : currentPrice * counter
  ); // Если Discont то будет цена браться по Discont
  const currentOrderSum = goodsData[articul];
    console.log("I am Memo")
  return  Boolean(goodsData[id]) && ( // Завернул goodsData[id] в Boolean потому что иначе будет 0 рисоваться
    
    <>
      <div key="" className={styles.cart_item}>
        <div className={styles.img_box}>
          <img src={BASE_URL + image} className={styles.img} />
        </div>
        <div className={styles.product_details}>
          <div className={styles.product_header}>
            <h2>{currenttitle}</h2>
            <button onClick={() => deleteCart(id)} className={styles.remove_item}>x</button>
          </div>
          <div className={styles.product_details_down}>
            <div className={cn(styles.quantity, styles.gap_bottom)}>
              <div className={styles.quantity_item}>
                <button
                  className={styles.btn}
                  onClick={() => deleteFromCart(id)}
                >
                  -
                </button>
                {/* <input type="number" value={productCounter} /> */}
                <span className={styles.counter}>{counter} </span>
                <button className={styles.btn} onClick={() => addtoCart(id)}>
                  +
                </button>
              </div>
            </div>
            <div className={cn(styles.price_details, styles.gap_bottom)}>
              {currentDiscontPrice ? (
                <>
                  <span className={styles.price}>${currentPrice}</span>
                  <del>${currentDiscontPrice}</del>
                  <span className={styles.discount_item}></span>
                </>
              ) : (
                <span className={styles.price}>${currentPrice}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default CartView;
