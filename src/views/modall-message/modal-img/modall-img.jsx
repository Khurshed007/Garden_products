import styles from "./index.module.scss";

import { BASE_URL } from "../../../constants";
import { getDiscountItems } from "../../../store/selectors";
import { useSelector } from "react-redux";

export const ModallImg = ({ setIsModallOpen, productImg }) => {
  const dataItems = useSelector((state) => state.shop.items);
  let mostDiscountedItem = useSelector(getDiscountItems)[0];
  mostDiscountedItem = dataItems
    ? mostDiscountedItem
    : { description, id, image, price, title, discont_price };

  const { description, id, image, price, title, discont_price } =
    mostDiscountedItem;

  const handleCloseModal = () => {
    setIsModallOpen(false);
  };
  return (
    <>
      <div className={styles.overlay} onClick={handleCloseModal}>
        <div
          className={styles.modal}
          style={{ backgroundImage: `url(${BASE_URL + productImg})` }}
        >
          {/* <img src={BASE_URL + productImg} alt="Secateurs" /> */}
        </div>
      </div>
    </>
  );
};
