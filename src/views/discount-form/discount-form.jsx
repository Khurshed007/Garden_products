import React from "react";
import styles from "./index.module.scss";
import image from "../../images/form.png";
import { DiscountInput } from ".";

export const DiscountForm = () => {


  return (
    <section>
      <div className={styles.form_container}>
        <h1 className={styles.form__title}>5% off on the first order</h1>
        <div className={styles.form_content}>
          <div className={styles.img_block}>
            <div className={styles.img_block__img}>
              <img src={image} alt="" />
            </div>
          </div>
          <div className={styles.form}> 
          <DiscountInput text={"Get a discount"}/>
          </div>
         
        </div>
      </div>
    </section>
  );
};
