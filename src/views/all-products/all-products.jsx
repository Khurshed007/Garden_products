import React, { useState } from "react";
import { requestAllProductItem } from "../../store/async-action";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardItem } from "../../components/card-item/card-item";
import { getAllItems } from "../../store/selectors";

export const AllProducts = () => {
  const dispatch = useDispatch();
  const items = useSelector(getAllItems);
  useEffect(() => {
    if (!items.length || !items) {
      dispatch(requestAllProductItem());
    }
  }, [dispatch]);

  let [filteredPosts, setFilteredPosts] = useState([items]);

  return (
    <section>
      <CardItem
        dataItems={filteredPosts}
        text={"All Products"}
        filterData={items}
        setFilteredPosts={setFilteredPosts}
 
      />
    </section>
  );
};
