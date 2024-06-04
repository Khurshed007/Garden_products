import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../../constants";
import { getDiscountItems } from "../../store/selectors";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { useDispatch, useSelector } from "react-redux";
import { useCartAction } from "../../hooks/useCartAction";
import { XMark } from "../../assets/icons";
import { CardItemView } from "../../components/card-item/card-item-view";
export const ModallMostDiscounted = ({
  setIsModallOpen,
  isModallOpen,
  productImg,
}) => {
  const dataItems = useSelector((state) => state.shop.items);
  let mostDiscountedItem = useSelector(getDiscountItems)[0];
  const { description, id, image, price, title, discont_price } =
    mostDiscountedItem;
  const { handleAddToCart } = useCartAction();
  const handleCloseModal = () => {
    setIsModallOpen(false);
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.modalClose} onClick={handleCloseModal}>
          <XMark className={styles.mark_x} />
        </button>

        <div className={styles.title_details}>
          <h2>
            {getDiscountPercent(price, discont_price)}% discount on product of
            the day!
          </h2>
          <CardItemView
            description={description}
            id={id}
            image={image}
            price={price}
            title={title}
            discont={discont_price}
            discontPercent={getDiscountPercent(price, discont_price)}
            noMargin = {true}
          />
          <button
            onClick={() => handleAddToCart(id)}
            className={styles.orderButton}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
