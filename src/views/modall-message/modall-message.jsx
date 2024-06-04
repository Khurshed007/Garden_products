import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../../constants";
import { useSelector } from "react-redux";
import { getDiscountItems } from "../../store/selectors";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { useDispatch } from "react-redux";

import { ModallImg } from "./modall-img";
import { ModallMostDiscounted } from "./modall-most-discount";
import { ModallNotFound } from "./modall-not-found";
import { Modallordered } from "./modal-order/modall_ordered";
export const ModallMessage = ({
  setIsModallOpen,
  isModallOpen,
  onlyImg,
  currentImage,
  productImg,
  notFound,
  congrates,
}) => {
  // const mostDiscountedItem = useSelector(getDiscountItems)[0];

  // const { description, id, image, price, title, discont_price } =
  //   mostDiscountedItem;

  const dispatch = useDispatch();
  const handleCloseModal = () => {
    setIsModallOpen(false);
  };

  console.log(notFound, "Not Found, Alo");

  const renderModalContent = () => {
    if (onlyImg) {
      return (
        <ModallImg
          setIsModallOpen={setIsModallOpen}
          isModallOpen={isModallOpen}
          productImg={productImg}
        />
      );
    } else if (congrates) {
      return (
        <Modallordered
          setIsModallOpen={setIsModallOpen}
          isModallOpen={isModallOpen}
          productImg={productImg}
        />
      );
    } else {
      return (
        <ModallMostDiscounted
          setIsModallOpen={setIsModallOpen}
          isModallOpen={isModallOpen}
          productImg={productImg}
        />
      );
    }
  };

  return <>{isModallOpen && <>{renderModalContent()}</>}</>;
};

// <div className={styles.container}>
//   <p>
//     We're sorry, the page you requested could not be found. Please go back
//     to the homepage.
//   </p>
//   <Link to="/" className={styles.btn}>
//     Go Home
//   </Link>
//   <br />
// </div>
