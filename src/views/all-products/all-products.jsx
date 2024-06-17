import React, { useState} from "react";
import { requestAllProductItem } from "../../store/async-action";
import { useShopAction } from "../../hooks/useShopAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CardItem } from "../../components/card-item/card-item";
 

export const AllProducts = () => {
 const dispatch = useDispatch()
  const {items} = useShopAction()
  useEffect(() => {
   if(!items.length || !items){
      dispatch(requestAllProductItem())  
   }
  }, [dispatch])



  let [filteredPosts, setFilteredPosts] = useState([items]);

  return (
    <section>
      <CardItem dataItems={filteredPosts} text={"All Products"} filterData={items} setFilteredPosts={setFilteredPosts}/>
    </section>
  );
};
