import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CardItem } from "../../components/card-item/card-item";
import { requestCurrentCategoryProducts } from "../../store/async-action";
import { useShopAction } from "../../hooks/useShopAction";

export const Category = () => {
  const { categoryId } = useParams();

  const dispatch = useDispatch()
  const {categoryProducts} = useShopAction()
  useEffect(() => {
   if(!categoryProducts.length || !categoryProducts){ // Запрос только тогда, когда его не было ранее
      dispatch(requestCurrentCategoryProducts(+categoryId))  
   }
  }, [dispatch])
   

  const [filteredPosts, setFilteredPosts] = useState([categoryProducts]);

  return (
    <section>
      <CardItem
        dataItems={filteredPosts}
        filterData={categoryProducts}
        setFilteredPosts={setFilteredPosts}
      />
    </section>
  );
};
