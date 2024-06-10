import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { CardItem } from "../../components/card-item/card-item";
import useData from "../../hooks/useData";
import { requestCurrentCategoryProducts } from "../../store/async-action";
import { getCurrenCategoryProducts } from "../../store/selectors";

export const Category = () => {
  const { categoryId } = useParams();

  const data = useData(
    () => requestCurrentCategoryProducts(+categoryId),
    getCurrenCategoryProducts
  );

  const [filteredPosts, setFilteredPosts] = useState([data]);

  return (
    <section>
      <CardItem
        dataItems={filteredPosts}
        filterData={data}
        setFilteredPosts={setFilteredPosts}
      />
    </section>
  );
};
