import React, { useContext } from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

export const Title = ({ text, btnText, btnDispplay, path}) => {
  return (
    <>
      <div className={styles.title} >
        <h1 className={styles.text}>{text}</h1>
        {btnDispplay && (
          <div className={styles.btn_item}>
            <Link to={path} className={styles.btn}>
              {btnText}
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
