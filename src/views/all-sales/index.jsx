import React, { useState, useEffect } from "react";


// Redux store
import { requestAllProductItem } from "../../store/async-action";
import { useDispatch } from "react-redux";

import { CardItem } from "../../components/card-item/card-item";
import { useShopAction } from "../../hooks/useShopAction";

export const AllSales = () => {
  const dispatch = useDispatch()
  const {items,allSales} = useShopAction()
  useEffect(() => {
   if(!items.length || !items){
      dispatch(requestAllProductItem())  
   }
  }, [dispatch])


  let [filteredPosts, setFilteredPosts] = useState([allSales]);
  const DiscontItemsList = filteredPosts.filter(
    ({ discont_price }) => discont_price !== null
  );
  return (
    <section>
      <CardItem  allSales = {true} dataItems={DiscontItemsList} text={"Discounted Items"} filterData={allSales} setFilteredPosts={setFilteredPosts} />
    </section>
  );
};
