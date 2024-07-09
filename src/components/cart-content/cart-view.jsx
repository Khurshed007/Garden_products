import React from "react";
import styles from "./index.module.scss"; // Подключение модуля стилей
import { BASE_URL } from "../../constants";
import cn from "classnames";
import { memo } from "react";
import { XMark } from "../../assets/icons";


const CartView =  memo(({
  counter,
  addtoCart,
  deleteFromCart,
  id,
  deleteCart,
  items
}) => {
  const DATA_ALL_PRODUCTS = items.find((e) => e.id === id);



const {price:currentPrice,title:currenttitle,image, discont_price:currentDiscontPrice} = DATA_ALL_PRODUCTS;
    console.log("I am Memo")

    
  return  Boolean(counter) && ( // Завернул goodsData[id] в Boolean потому что иначе будет 0 рисоваться
    
    <>
      <div key="" className={styles.cart_item}>
        <div className={styles.img_box}>
          <img alt={image} src={BASE_URL + image} className={styles.img} />
        </div>
        <div className={styles.product_details}>
          <div className={styles.product_header}>
            <h2>{currenttitle}</h2>
            <XMark resetCart={deleteCart} id={id} className={styles.remove_item}/>
            {/* <button onClick={() => deleteCart(id)} className={styles.remove_item}>{<XMark className={styles.remove_item}/>}</button> */}
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
                  <span className={styles.price}>${currentDiscontPrice}</span>
                  <del>${currentPrice}</del>
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
  )
});

export const MemoCartView = memo(CartView);
