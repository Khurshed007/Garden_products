import React from "react";
import { useForm, Controller } from "react-hook-form";
import { sendSaleData } from "../../store/async-action";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss";
import image from "../../images/form.png";
import { PHONE_REGEX } from "../../constants";

export const DiscountForm = () => {
  const dispatch = useDispatch();
  const isDiscountApplied = useSelector((state) => state.shop.discountApplied);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
  } = useForm();

  const onFormSubmit = (formData) => {
    dispatch(sendSaleData(formData));
  };

  console.log(errors);

  const { userPhone } = errors;
  const isPhoneNotValid = userPhone?.type && userPhone.type === "pattern";
  const isPhoneEmpty = userPhone?.type && userPhone.type === "required";

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
              <div>
                <input
                  className={styles.form__input}
                  type="text"
                  placeholder="Name"
                  {...register("userName")}
                />
              </div>
             
              <Controller
         
                name="phone"
                type="tel"
                control={control}
                pattern="\d+"
                
                render={({ field }) => (
                  
                  <input
                  className={styles.form__input}
                  placeholder= "Phone Number"
                    {...field}
                    onChange={(e) =>
                      field.onChange(e.target.value.replace(/\D/g, ""))
                    }
                  />
                )}
              />
              
              {isPhoneEmpty && <h1>ЭТО ПОЛЕ ОБЯЗАТЕЛЬНО!</h1>}
              {isPhoneNotValid && <h1>ТУТ ДОЛЖНЫ БЫТЬ ТОЛЬКО ЧИСЛА!</h1>}
              {/* <input
                type="tel"
                className={styles.form__input}
                placeholder="Phone"
                {...register("userPhone", {
                  required: true,
                  pattern: PHONE_REGEX,
                  valueAsNumber: true,
                })}
              /> */}
              <input
                type="email"
                placeholder="Email"
                {...register("userEmail")}
                className={styles.form__input}
              />
              <button
                disabled={isDiscountApplied}
                type="submit"
                className={styles.form__button}
              >
                {isDiscountApplied ? "Request applied" : "Get a discount"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
{
  /* <form className={styles.form__form}>
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
        </form> */
}
