import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { CardItem } from "../../components/card-item/card-item";


export const Category = (allCategories) => {
  const { categoryId } = useParams();


  const [filteredPosts, setFilteredPosts] = useState([allCategories]);

  return (
    <section>
      <CardItem
        dataItems={filteredPosts}
        filterData={allCategories}
        setFilteredPosts={setFilteredPosts}
      />
    </section>
  );
};
