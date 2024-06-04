import React, { useContext, useEffect, useState } from "react";
import styles from "./index.module.scss"; // Подключение модуля стилей
import CartView from "./cart-view";
import { cartContext } from "../../context/cart-context";

import { useCartAction } from "../../hooks/useCartAction";
import { useSelector } from "react-redux";
import { getAllItems, getCartCounter } from "../../store/selectors";
import cn from "classnames";
import { Title } from "../title/title";
import { ModallMessage } from "../../views/modall-message/modall-message";
import { ModallNotFound } from "../../views/modall-message/modall-not-found";
import { Modallordered } from "../../views/modall-message/modal-order/modall_ordered";

let s = 0;
const CartContent = () => {
  const {
    handleAddToCart,
    handleDeleteFromCart,
    goodsData,
    goodsCounter,
    cartId,
    getCartId,
    DeleteCart,
  } = useCartAction();
  // Calculate total sum whenever goodsData or DATA_ALL_PRODUCTS changes
  const [totalSum, setTotalSum] = useState(0);
  const DATA_ALL_PRODUCTS = useSelector(getAllItems);
  const [isModallOpen, setIsModallOpen] = useState(false)
  const cartCounter = useSelector(getCartCounter)


  const handleOpenModal = ()=> {
    setIsModallOpen(true)
  }

  const goodsDataKeys =
    Object.keys(goodsData)
      .map((item) => Number(item))
      .filter((item) => typeof item === "number") || [];
  useEffect(() => {
    let sum = 0;
    goodsDataKeys.forEach((key) => {
      const product = DATA_ALL_PRODUCTS[key - 1]; // Assuming cartId is 1-based index
      if (product) {
        const price = product.discont_price
          ? product.discont_price
          : product.price;
        const quantity = goodsData[key];
        sum += price * quantity;
      }
    });
    setTotalSum(sum);
  }, [goodsData, DATA_ALL_PRODUCTS]);
  // const currentPrice = DATA_ALL_PRODUCTS[Number(cartId) - 1]["price"];
  // const currenttitle = DATA_ALL_PRODUCTS[Number(cartId) - 1]["title"];
  // const currentDiscontPrice =
  //   DATA_ALL_PRODUCTS[Number(cartId) - 1]["discont_price"];
  const totalItem = Object.keys(goodsData).length;
  // const currentOrderSum = goodsData[goodsCounter]



  const renderContent = () => {
    return !cartCounter ? (
      <>
        <ModallNotFound
          message={"Looks like you have no items in your basket currently."}
          btnText={"Continue Shopping"}
          flexStart={true}
        />
      </>
    ) : (
      <>
        <div className={styles.shopping_cart}>
          <div className={styles.cart_content}>
            {goodsDataKeys.map((articul) => (
              <CartView
                key={articul}
                articul={articul}
                goodsData={goodsData}
                counter={goodsData[articul]}
                addtoCart={handleAddToCart}
                deleteFromCart={handleDeleteFromCart}
                getCartId={getCartId}
                id={articul}
                deleteCart={DeleteCart}
              />
            ))}
          </div>
          <div className={styles.order_details}>
            <h2>Order details</h2>
            <div className={styles.summary}>
              <span className={cn(styles.total_item, styles.litle_font)}>
                {totalItem} items
              </span>
              <div className={styles.total_price_details}>
                <span className={styles.litle_font}>Total</span>
                <span className={styles.total_price}>
                  ${totalSum.toFixed(2)}
                </span>
              </div>
            </div>
            <form className={styles.order_form}>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Phone number" />
              <input type="email" placeholder="Email" />
              <div className={styles.btn_item}>
                <button onClick={(e) => {
                    e.preventDefault(); // чтобы остановить обновления страницы
                    handleOpenModal();
                }} className={styles.btn} >
                  Order
                </button>
              </div>
            </form>
          </div>
        </div>
        <Modallordered isModallOpen={isModallOpen} setIsModallOpen={setIsModallOpen}/>
      </>
    );
  };

  return (
    <section>
      <Title
        text={"Shopping cart"}
        btnText={"Back To the Store"}
        btnDispplay={true}
      />
      {renderContent()}
    </section>
  );
};

export default CartContent;
