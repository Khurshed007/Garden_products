import React, { useRef, useEffect } from "react";
import image from "../../images/form.png";
import styles from "./index.module.scss";

export const DiscountForm = () => {
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      console.log(inputRef.current.focus);
    }
  }, [inputRef]);

  return (
    <section >
      <div className={styles.form_container}>
         <h1 className={styles.form__title}>5% off on the first order</h1>
         <div className={styles.form_content}>
        <div className={styles.img_block} >
          <div className={styles.img_block__img}>
            <img src={image} alt="" />
          </div>
        </div>
        <form className={styles.form}>
          <form className={styles.form__form}>
            <input
              type="text"
              placeholder="Name"
              className={styles.form__input}
            />
            <input
              type="text"
              placeholder="Phone number"
              className={styles.form__input}
            />
            <input
              type="email"
              placeholder="Email"
              className={styles.form__input}
            />
            <button type="submit" className={styles.form__button}>
              Get a discount
            </button>
          </form>
        </form>
        </div>
      </div>
    </section>
  );
};
