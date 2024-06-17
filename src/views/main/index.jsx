import React, {useEffect} from "react";
import { CardItem } from "../../components/card-item/card-item";
import { Head } from "./head/head";
import { Categories } from "../categories";

// Redux
import { requestAllProductItem } from "../../store/async-action";
import { getDiscountItems } from "../../store/selectors";
// Кастомный хук
import { DiscountForm } from "../discount-form/discount-form";
import { useShopAction } from "../../hooks/useShopAction";
import { useDispatch } from "react-redux";
export const Main = () => {
  const dispatch = useDispatch()
  const { discountItems,items} = useShopAction()
  useEffect(() => {
   if(!items.length || !items){
      dispatch(requestAllProductItem())  
   }
  }, [dispatch])

  return   (
    <>
      <Head />
      
      <Categories categoriesItem = {4} btnText = {"All Categories"} btnDispplay = {true} hideBreadCrumbs = {true} gap={true}/>
      {<DiscountForm/>}
      <section>
        <CardItem
          dataItems={ discountItems}
          text={"Sales"}
          btnText={"All Sales"}
          btnDispplay={true}
          hideBreadCrumbs = {true}
          path={"all-sales"}
        />
      </section>
      
    </>
  );
};
