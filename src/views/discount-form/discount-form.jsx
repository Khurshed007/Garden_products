import React from "react";
import styles from "./index.module.scss";
import image from "../../images/form.png";
import { DiscountInput } from ".";
import { sendSaleData } from "../../store/async-action";
import { useForm} from "react-hook-form";
import { useDispatch} from "react-redux";


export const DiscountForm = () => {
  const onFormSubmit = (formData) => {
    dispatch(sendSaleData(formData));
   };
   const dispatch = useDispatch();
   const {
    register,
    handleSubmit,
    formState: { errors },
    control,
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
              onSubmit={handleSubmit(onFormSubmit)}
              className={styles.form__form}
            >
              <DiscountInput register={register} errors={errors} control={control} text={"Get a discount"} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
