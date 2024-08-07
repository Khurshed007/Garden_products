import styles from "./index.module.scss";

import { XMark } from "../../../assets/icons";


export const Modallordered = ({
  setIsModallOpen,
  isModallOpen,
  resetCart
}) => {
  
  const handleCloseModal = () => {
    setIsModallOpen(false);
  };



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
                    className={styles.modal_close}
                    onClick={handleCloseModal}
                  >
                    <XMark className={styles.mark_x} resetCart={resetCart} />
                  </button>
                  <p>Your order has been successfully placed on the website.</p>
                  <p>
                    A manager will contact you shortly to confirm your order.
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};
