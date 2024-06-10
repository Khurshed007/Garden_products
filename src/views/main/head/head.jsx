import React, { useState, useContext } from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";

export const Head = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.txt}>
          <h1>Amazing Discounts on Garden Products!</h1>
          <Link to={"all-sales"}>
          <button className={cn(styles.btn, styles.card)}> Check out</button>
          </Link>
   
        </div>
      </header>
    </>
  );
};
