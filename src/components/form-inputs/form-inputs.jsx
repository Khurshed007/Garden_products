import React from "react";
import { Controller } from "react-hook-form";
import styles from "./index.module.scss";
import { XOctagon } from "../../assets/icons";

export const FormInputs = ({
  inputPlaceholder,
  inputTyp,
  inputRegular,
  name,
  rules,
  register,
  control,
  errors,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <div className={styles.input_wrapper}>
          <input
            {...register(name)}
            className={styles.form__input}
            placeholder={inputPlaceholder}
            type={inputTyp}
            {...field}
            onChange={(e) =>
              field.onChange(e.target.value.replace(inputRegular, ""))
            }
          />
          {errors[name] && (
            <div className={styles.error_content}>
              {" "}
              <XOctagon className={styles.icon} />{" "}
              <span className={styles.message}>{errors[name].message}</span>
            </div>
          )}
        </div>
      )}
    />
  );
};
