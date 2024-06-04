import React, { useCallback, useMemo, useState } from "react";

import { getAllItems } from "../../store/selectors";
import { useSelector } from "react-redux";
import { CardItem } from "../../components/card-item/card-item";

export const LikeProducts = () => {
  // const { handleAddLike, likesCounter } = useLikesAction();
  const data = useSelector(getAllItems);
  // const likesData = useSelector(state => Object.entries(state.shop.likesData).filter(([keys,values]) => values ? keys : "").map(([num, _]) => +num));

  const likesData = useSelector((state) => state.shop.likesData);
  console.log(likesData, "Im LikesData");
  // // Вычисляем ключи лайков
  const likeDataKeys = useMemo(() => {
    return (
      // Object.keys(likesData)
      //   .map((item) => Number(item))
      //   .filter((item) => typeof item === "number") || []
      Object.entries(likesData)
        .filter(([keys, values]) => (values ? keys : ""))
        .map(([num, _]) => +num)
    );
  }, [likesData]);

  // Фильтруем данные на основе ключей лайков
  const likeData = useMemo(() => {
    return data.filter(({ id }) => likeDataKeys.includes(id));
  }, [data, likeDataKeys]);

  // // Состояние для отфильтрованных постов
  const [filteredPosts, setFilteredPosts] = useState([...likeData]);

  // //TODO Для этой функции нужно использовать Hook UseCallback

  const updateFilteredPosts = useCallback(
    (updatedPosts) => {
      setFilteredPosts(updatedPosts);
    },
    [setFilteredPosts]
  );
  //  const updateFilteredPosts = ((updatedPosts) => {
  //      setFilteredPosts(updatedPosts);
  //    },
  //    [filteredPosts]
  //   )

  return (
    <section>
      {/* <BreadCrumbs/>    */}
      {/* <FilterBlock posts={likeData} setFilteredPosts={updateFilteredPosts} /> */}

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

// import React, { useCallback, useEffect, useMemo, useState } from "react";

// import { useLikesAction } from "../../hooks/useLikesAction";
// import { getAllItems } from "../../store/selectors";
// import { useSelector } from "react-redux";
// import { CardItem } from "../../components/card-item/card-item";

// export const LikeProducts = () => {
//   const { handleAddLike, likesData, likesCounter } = useLikesAction();
//   const data = useSelector(getAllItems);

//   // Вычисляем ключи лайков
//   const likeDataKeys = useMemo(() => {
//     return (
//       Object.keys(likesData)
//         .map((item) => Number(item))
//         .filter((item) => typeof item === "number") || []
//     );
//   }, [likesData]);

//   // Фильтруем данные на основе ключей лайков
//   const likeData = useMemo(() => {
//     return data.filter(({ id }) => likeDataKeys.includes(id));
//   }, [data, likeDataKeys]);

//   // Состояние для отфильтрованных постов
//   const [filteredPosts, setFilteredPosts] = useState([...likeData]);

//   useEffect(() => {
//     setFilteredPosts(likeData);
//   }, [likeData]);
//   //TODO Для этой функции нужно использовать Hook UseCallback
//   // const updateFilteredPosts = (updatedPosts) => {
//   //   setFilteredPosts(updatedPosts);
//   // };
//   const updateFilteredPosts = useCallback(
//     (updatedPosts) => {
//       setFilteredPosts(updatedPosts);
//     },
//     [setFilteredPosts]
//   );
//   // const updateFilteredPosts = useMemo(
//   //   (updatedPosts) => {
//   //     setFilteredPosts(updatedPosts);
//   //   },
//   //   [setFilteredPosts]
//   // );

//   return (
//     <section>
//       {/* <BreadCrumbs/>    */}
//       {/* <FilterBlock posts={likeData} setFilteredPosts={updateFilteredPosts} /> */}

//       <CardItem dataItems={filteredPosts} text={"Liked Products"}  filterData = {likeData} setFilteredPosts= {updateFilteredPosts} />
//     </section>
//   );
// };
