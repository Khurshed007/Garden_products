import React, {useEffect} from "react";
import { CardItem } from "../../components/card-item/card-item";
import { Head } from "./head/head";
import { Categories } from "../categories";

// Redux
import { requestAllProductItem } from "../../store/async-action";
import { getDiscountItems } from "../../store/selectors";
// Кастомный хук
import useData from "../../hooks/useData";


export const Main = () => {
  const DATA_DISCOUNT_ITEMS = useData(requestAllProductItem, getDiscountItems);


  return   (
    <>
      <Head />
      <section>
        <CardItem
          dataItems={DATA_DISCOUNT_ITEMS}
          text={"Sales"}
          btnText={"All Sales"}
          btnDispplay={true}
          hideBreadCrumbs = {true}
        />
      </section>
    </>
  );
};
