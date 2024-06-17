import React, { useEffect, useState, useMemo } from "react";
import styles from "./index.module.scss"; // Подключение модуля стилей
import { MemoCartView } from "./cart-view";

import { useCartAction } from "../../hooks/useCartAction";
import { useSelector } from "react-redux";
import { getAllItems, getCartCounter } from "../../store/selectors";
import cn from "classnames";
import { Title } from "../title/title";
import { ModallNotFound } from "../../views/modall-message/modall-not-found";
import { Modallordered } from "../../views/modall-message/modal-order/modall_ordered";
import { useShopAction } from "../../hooks/useShopAction";
import { getFivePercentDiscount } from "../../utils/getFivePercentDiscount";
import { DiscountInput } from "../../views/discount-form";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { sendOrderData } from "../../store/async-action";
const CartContent = () => {
  const onFormSubmit = (formData) => {
    dispatch(sendOrderData(formData));
    setIsModallOpen(true);
  };
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const {
    handleAddToCart,
    handleDeleteFromCart,
    goodsData,
    getCartId,
    deleteCart,
  } = useCartAction();

  const DATA_ALL_PRODUCTS = useSelector(getAllItems);
  const [isModallOpen, setIsModallOpen] = useState(false);
  const cartCounter = useSelector(getCartCounter);
  const { isDiscountApplied, items } = useShopAction();

  const goodsDataKeys = useMemo(
    () =>
      Object.keys(goodsData)
        .map((item) => Number(item))
        .filter((item) => typeof item === "number"),
    [goodsData]
  );

  const totalSum = useMemo(() => {
    let sum = 0;
    goodsDataKeys.forEach((key) => {
      const product = DATA_ALL_PRODUCTS[key - 1]; // Суммирую из всех дост. ключей всех продуктов
      if (product) {
        const price = product.discont_price
          ? product.discont_price
          : product.price;
        const quantity = goodsData[key];
        sum += price * quantity;
      }
    });
    return sum;
  }, [goodsData, DATA_ALL_PRODUCTS]);
  const totalItem = Object.keys(goodsData).length;

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
              <MemoCartView
                key={articul}
                articul={articul}
                goodsData={goodsData}
                counter={goodsData[articul]}
                addtoCart={handleAddToCart}
                deleteFromCart={handleDeleteFromCart}
                getCartId={getCartId}
                id={articul}
                deleteCart={deleteCart}
                items={items}
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
                  {isDiscountApplied
                    ? `$${getFivePercentDiscount(totalSum)}`
                    : `$${totalSum.toFixed(2)}`}
                </span>
              </div>
            </div>
            <form
              className={styles.order_form}
              onSubmit={handleSubmit(onFormSubmit)}
            >
              <DiscountInput
                register={register}
                errors={errors}
                control={control}
                text={"Order"}
                disable={false}
              />
              <button type="submit" className={styles.form__button}>
                Order
              </button>
            </form>
          </div>
        </div>
        <Modallordered
          isModallOpen={isModallOpen}
          setIsModallOpen={setIsModallOpen}
        />
      </>
    );
  };

  return (
    <section>
      <Title
        text={"Shopping cart"}
        btnText={"Back To the Store"}
        btnDispplay={true}
        path={"/"}
      />
      {renderContent()}
    </section>
  );
};

export default CartContent;
