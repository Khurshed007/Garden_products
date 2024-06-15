import React from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.scss";
import { getAllItems } from "../../store/selectors";
import { requestAllProductItem } from "../../store/async-action";
import useData from "../../hooks/useData";
import { BASE_URL } from "../../constants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setProductCart } from "../../store/cart-slice";
import { HeartIcon } from "../../assets/icons";
import cn from "classnames";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { BreadCrumbs } from "../../components/bread-crumbs/bread-crumbs";
import { MemoModallMessage } from "../modall-message/modall-message";
import { useShopAction } from "../../hooks/useShopAction";
export const Product = () => {
  const { productId } = useParams();
  const data = useData(requestAllProductItem, getAllItems);
  console.log(data[+productId], "Id of Product");
  const [isModallOpen, setIsModallOpen] = useState(false);
  const { toggleToLikes, likesData } = useShopAction();
  const discoveredItem = productId ? data[+productId] : [];
  const title = discoveredItem ? discoveredItem["title"] : "";
  const id = discoveredItem ? discoveredItem["id"] : "";
  const image = discoveredItem ? discoveredItem["image"] : "";
  const price = discoveredItem ? discoveredItem["price"] : "";
  const description = discoveredItem ? discoveredItem["description"] : "";
  const discont_price = discoveredItem ? discoveredItem["discont_price"] : "";

  const dispatch = useDispatch();
  const [productCounter, setProductCounter] = useState(0);
  const discontPercent = getDiscountPercent(price, discont_price).toFixed(0);

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
            [styles.checked]: likesData[id],
          })}
          toggleToLikes={toggleToLikes}
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
                    [styles.checked]: likesData[id],
                  })}
                  toggleToLikes={toggleToLikes}
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
      <MemoModallMessage
        onlyImg={true}
        productImg={image}
        isModallOpen={isModallOpen}
        setIsModallOpen={setIsModallOpen}
      />
    </>
  );
};
