import React, { useState, useContext } from "react";
import styles from "./index.module.scss";
import cn from "classnames";

export const Head = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.txt}>
          <h1>Amazing Discounts on Garden Products!</h1>
          <button className={cn(styles.btn, styles.card)}> Check out</button>
        </div>
      </div>
    </>
  );
};
