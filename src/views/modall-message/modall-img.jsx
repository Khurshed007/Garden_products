import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../../constants";
import { getDiscountItems } from "../../store/selectors";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { useDispatch, useSelector } from "react-redux";


export const ModallImg = ({
  setIsModallOpen,
  isModallOpen,
  productImg,
}) => {

   const dataItems = useSelector((state) => state.shop.items)
   let mostDiscountedItem = useSelector(getDiscountItems)[0]
   mostDiscountedItem =  dataItems ?  mostDiscountedItem : {description, id, image, price, title, discont_price }

  const { description, id, image, price, title, discont_price } =
    mostDiscountedItem;

  const handleCloseModal = () => {
    setIsModallOpen(false);
  };
  return (
    <>
      <div className={styles.overlay} onClick={handleCloseModal}></div>
      <div className={styles.modal}>
        <img src={BASE_URL + productImg} alt="Secateurs" />
      </div>
    </>
  );
};
