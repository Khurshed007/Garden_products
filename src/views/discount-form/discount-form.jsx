import React from "react";
import styles from "./index.module.scss";
import image from "../../images/form.png";
import { DiscountInput } from ".";
import { sendSaleData } from "../../store/async-action";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export const DiscountForm = () => {
  const isDiscountApplied = useSelector((state) => state.shop.discountApplied);
  const onFormSubmit = (formData) => {
    dispatch(sendSaleData(formData)); // хранит инфо о ф-ях в объекте
  };
  const dispatch = useDispatch();
  const {
    // register,
    handleSubmit, // HOF ПРИНИМАЕТ ДРУГУЮ ФУНКЦИЮ
    formState: { errors }, 
    control, // хранит в себе специальные методы все спец. методы и также fields {инфо о names}. Заменяет register
  } = useForm();

  
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
            <form
              onSubmit={handleSubmit(onFormSubmit)} // handleSubmit нужен для отключения поведения по умолч.
              className={styles.form__form} 
            >
              <DiscountInput
                // register={register}
                errors={errors}
                control={control}
                text={"Get a discount"}
                lightColor={true}
              />
                    <button
          disabled={isDiscountApplied}
          type="submit"
          className={styles.form__button}
        >
          {isDiscountApplied ? "Request applied" : 'Get a discount'}
        </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
