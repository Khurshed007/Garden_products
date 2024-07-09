import styles from "./index.module.scss";

import { BASE_URL } from "../../../constants";

export const ModallImg = ({ setIsModallOpen, productImg }) => {
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
