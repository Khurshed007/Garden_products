import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import styles from "./index.module.scss";
import { getAllItems } from "../../store/selectors";
import { requestAllProductItem } from "../../store/async-action";
import useData from "../../hooks/useData";
import { BASE_URL } from "../../constants";
import { useState } from "react";
import { useCartAction } from "../../hooks/useCartAction";
import { useDispatch } from "react-redux";
import { setProductCart } from "../../store/cart-slice";
import { HeartIcon } from "../../assets/icons";
import cn from "classnames";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { BreadCrumbs } from "../../components/bread-crumbs/bread-crumbs";
import { ModallMessage } from "../modall-message/modall-message";
import { useShopAction } from "../../hooks/useShopAction";
export const Product = () => {
  const { productId } = useParams();
  const data = useData(requestAllProductItem, getAllItems);
  const [isModallOpen, setIsModallOpen] = useState(false);
 const {toggleToLikes,likesData} = useShopAction()
  const discoveredItem = data.find(({ id }) => +id === +productId);
  console.log(discoveredItem.title);
  const { title, price, discont_price, image, description, id } =
    discoveredItem;
  const {
    handleAddToCart,
    handleDeleteFromCart,
    goodsData,
    goodsCounter,
    cartId,
    getCartId,
  } = useCartAction();

  let dispatch = useDispatch();
  let [productCounter, setProductCounter] = useState(0);
  let discontPercent = getDiscountPercent(price, discont_price).toFixed(0);

  const addCounter = () => {
    setProductCounter((prev) => (prev += 1));
  };

  const deleteCounter = () => {
    if (productCounter > 0) {
      setProductCounter((prev) => (prev -= 1));
    }
  };
  const addOrder = (id) => {
    dispatch(setProductCart({ productCounter, id }));
    setProductCounter(0);
  };

  const handModallOpen = () => {
    setIsModallOpen(true);
  };

  // ### /products/${itemId}     - ссылка на первый продукт

  //   return <div>product name {itemId}</div>;
  return (
    <>
      <div
        className={cn(
          styles.product_header,
          styles.gap_bottom,
          styles.small_size_displayer
        )}
      >
        <h2 className={cn(styles.product_title)}>{title}</h2>
        <HeartIcon

          className={cn(styles.heart, {
            // [styles.dark]: theme === "light",
            [styles.checked]: likesData[id] ,
          })}
          addtoLikes={toggleToLikes}
          id={id}
          likesData={likesData}
        />
      </div>
      <div className={styles.wrapper}>
        <BreadCrumbs />
        <div className={styles.product_card}>
          <div className={styles.left_card}>
            <div className={styles.product_image}>
              {discont_price && (
                <span className={cn(styles.discount, styles.image_discount)}>
                  {" "}
                  -{discontPercent}%
                </span>
              )}
              <img
                onClick={handModallOpen}
                src={BASE_URL + image}
                alt="Secateurs"
              />
            </div>
          </div>
          <div className={styles.right_card}>
            <div className={styles.product_details}>
              <div className={cn(styles.product_header, styles.gap_bottom)}>
                <h2 className={cn(styles.product_title)}>{title}</h2>
                <HeartIcon
             
                  className={cn(styles.heart, {
                    [styles.checked]: likesData[id]
                  })}
                  addtoLikes={toggleToLikes}
                  id={id}
                  likesData={likesData}
                />
              </div>

              <div className={cn(styles.price_details, styles.gap_bottom)}>
                {discont_price ? (
                  <>
                    <span className={styles.price}>${discont_price}</span>
                    <del>${price}</del>
                    <span className={styles.discount_item}>
                      <span className={styles.discount}>
                        -{discontPercent}%
                      </span>
                    </span>
                  </>
                ) : (
                  <span className={styles.price}>${price}</span>
                )}
              </div>
              <div className={cn(styles.quantity, styles.gap_bottom)}>
                <div className={styles.quantity_item}>
                  <button className={styles.btn} onClick={deleteCounter}>
                    -
                  </button>
                  {/* <input type="number" value={productCounter} /> */}
                  <span className={styles.counter}>{productCounter} </span>
                  <button className={styles.btn} onClick={addCounter}>
                    +
                  </button>
                </div>
                <button
                  onClick={() => addOrder(id)}
                  className={styles.add_to_cart}
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className={cn(styles.description, styles.gap_bottom)}>
              <h3 className={styles.description_title}>Description</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div
          className={cn(
            styles.description,
            styles.gap_bottom,
            styles.small_size_description
          )}
        >
          <h3 className={styles.description_title}>Description</h3>
          <p>{description}</p>
        </div>
      </div>
      <ModallMessage
        onlyImg={true}
        productImg={image}
        isModallOpen={isModallOpen}
        setIsModallOpen={setIsModallOpen}
      />
    </>
  );
};
