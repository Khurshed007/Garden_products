import React, { useEffect, useMemo } from "react";
import { CardItem } from "../../components/card-item/card-item";
import { Head } from "./head/head";
import { Categories } from "../categories";

// Redux
import { requestAllProductItem } from "../../store/async-action";
import { useSelector } from "react-redux";
import { getAllItems, getDiscountItems } from "../../store/selectors";
// Кастомный хук
import { DiscountForm } from "../discount-form/discount-form";
import { useDispatch } from "react-redux";
export const Main = () => {
  const dispatch = useDispatch();
  const discountItems = useSelector(getDiscountItems);
  const items = useSelector(getAllItems);
  useEffect(() => {
    if (!items.length || !items) {
      dispatch(requestAllProductItem());
    }
  }, [dispatch, items]);

  const fourDiscountItems = useMemo(() => {
    return [...discountItems].sort(() => Math.random() - 0.5).slice(0, 4);
  }, [discountItems]);




  return (
    <>
      <Head />

      <Categories
        categoriesItem={4}
        btnText={"All Categories"}
        btnDispplay={true}
        hideBreadCrumbs={true}
        gap={true}
      />
      <DiscountForm />
      <section>
        <CardItem
          dataItems={fourDiscountItems}
          text={"Sales"}
          btnText={"All Sales"}
          btnDispplay={true}
          hideBreadCrumbs={true}
        />
      </section>
    </>
  );
};
