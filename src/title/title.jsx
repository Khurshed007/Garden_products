import React, { useContext } from "react";
import styles from "./index.module.scss";

export const Title = ({ text, btnText, btnDispplay }) => {
  return (
      <>
      <div className={styles.categories_title}>
        <h1 className={styles.categories_text}>{text}</h1>
        {btnDispplay && (
          <div className={styles.btn_item}>
            <button className={styles.btn}>{btnText}</button>
          </div>
        )}
      </div>
    </>
  );
};
