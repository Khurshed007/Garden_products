import React, { useCallback, useMemo, useState } from "react";

import { getAllItems } from "../../store/selectors";
import { useSelector } from "react-redux";
import { CardItem } from "../../components/card-item/card-item";

export const LikeProducts = () => {
  const data = useSelector(getAllItems);

  const likesData = useSelector((state) => state.shop.likesData);
  //  Вычисляем ключи лайков
  const likeDataKeys = useMemo(() => {
    return Object.entries(likesData)
      .filter(([keys, values]) => (values ? keys : ""))
      .map(([num, _]) => +num);
  }, [likesData]);

  // Фильтруем данные на основе ключей лайков
  const likeData = useMemo(() => {
    return data.filter(({ id }) => likeDataKeys.includes(id));
  }, [data, likeDataKeys]);

  //  Состояние для отфильтрованных постов
  const [filteredPosts, setFilteredPosts] = useState([...likeData]);

  const updateFilteredPosts = useCallback(
    (updatedPosts) => {
      setFilteredPosts(updatedPosts);
    },
    [setFilteredPosts]
  );

  return (
    <section>
      <CardItem
        dataItems={filteredPosts}
        text={"Liked Products"}
        filterData={likeData}
        setFilteredPosts={updateFilteredPosts}
        allSales={true}
      />
    </section>
  );
};
