import styles from "./index.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { XMark } from "../../../assets/icons";
import { useCartAction } from "../../../hooks/useCartAction";

export const Modallordered = ({
  setIsModallOpen,
  isModallOpen,
  productImg,
}) => {
  const handleCloseModal = () => {
    setIsModallOpen(false);
  };
   const {resetCart} = useCartAction()
  return (
    <>
      {isModallOpen && (
        <>
          <div className={styles.overlay} onClick={handleCloseModal}>
          <div className={styles.content}>
            {isModallOpen && (
              <div className={styles.modal}>
                <div className={styles.title_details}>
                  <h2>Congratulations!</h2>
               
                </div>
                <button
                    className={styles.modalClose}
                    onClick={handleCloseModal}
                  >
                    <XMark className={styles.mark_x}  resetCart={resetCart}/>
                  </button>
                <p>Your order has been successfully placed on the website.</p>
                <p>A manager will contact you shortly to confirm your order.</p>
              </div>
            )}
          </div>
          </div>
        </>
      )}
    </>
  );
};
