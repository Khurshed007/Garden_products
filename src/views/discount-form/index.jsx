import React from "react";
import { useForm} from "react-hook-form";
import { sendSaleData } from "../../store/async-action";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss";
import image from "../../images/form.png";
import { PHONE_REGEX } from "../../constants";
import { FormInputs } from "../../components/form-inputs/form-inputs";
import { EMAIL_REGEX } from "../../constants";
import { TEXT_REGULAR } from "../../constants";
import { NAME_REGEX } from "../../constants";
import { PHONE_REGULAR } from "../../constants";
import cn from "classnames"
export const DiscountInput = ({fullWidth, text, order, register, errors,control,lightColor}) => {
    const dispatch = useDispatch();
    const isDiscountApplied = useSelector((state) => state.shop.discountApplied);
  
    // const {
    //   register,
    //   handleSubmit,
    //   formState: { errors },
    //   control,
    // } = useForm();
  
    const onFormSubmit = (formData) => {
     dispatch(sendSaleData(formData));
    };
  
    return (
      
      <>
        <FormInputs
          lightColor = {lightColor}
          inputPlaceholder={"Name"}
          inputTyp={"text"}
          inputRegular={TEXT_REGULAR}
          register={register}
          control={control}
          errors={errors}
          name="userName"
          rules={{
            required: "Wrong input. Try again",
            pattern: {
              value: NAME_REGEX,
              message: "Only letters should be here",
            },
          }}
        />

        <FormInputs
        lightColor = {lightColor}
          inputPlaceholder={"Phone Number"}
          inputTyp={"tel"}
          inputRegular={PHONE_REGULAR}
          register={register}
          control={control}
          errors={errors}
          name="userPhone"
          rules={{
            required: "Wrong input. Try again",
            pattern: {
              value: PHONE_REGEX,
              message: "Every third number must be followed by -",
            },
          }}
        />

        <FormInputs
        lightColor = {lightColor}
          inputPlaceholder={"Email"}
          inputTyp={"email"}
          inputRegular={/\d/g}
          inputRegex={EMAIL_REGEX}
          register={register}
          control={control}
          errors={errors}
          name="userEmail"
          rules={{
            required: "Wrong input. Try again",
            pattern: {
              value: EMAIL_REGEX,
              message: "Enter @ and part of your address",
            },
          }}
        />

        <button
          disabled={isDiscountApplied}
          type="submit"
          className={styles.form__button}
        >
          {isDiscountApplied ? "Request applied" : text}
        </button>
       </>
      // </form>

    );
  };
  