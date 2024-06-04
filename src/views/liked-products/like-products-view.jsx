// import { Link } from "react-router-dom";
// import React, { useState, useContext } from "react";
// import styles from "./index.module.scss";

// import cn from "classnames";
// import { themeContext } from "../../context/theme";
// import { BASE_URL } from "../../constants";
// import { HeartIcon } from "../../assets/icons";
// import { CartIcon } from "../../assets/icons";
// import { cartContext } from "../../context/cart-context";
// import { likeContext } from "../../context/likes-context";

// import { getAllItems } from "../../store/selectors";
// import { useSelector } from "react-redux";
// import { LikesAction } from "../../utils/LikesAction";
// import { CartAction } from "../../utils/CartAction";
// import { getDiscountPercent } from "../../utils/getDiscountPercent";

// function LikeProductsView({
//   id,
//   likesData,
//   image,
//   discontPercent,
//   title,
// }) {
//   const { theme, switchTheme } = useContext(themeContext);

//   const { handleAddToCart,handleCartState,selectedData } = CartAction();
//   const DATA_ALL_PRODUCTS = useSelector(getAllItems);
//   const currentPrice = DATA_ALL_PRODUCTS[Number(id) - 1]["price"];
//   const currentDiscontPrice =
//     DATA_ALL_PRODUCTS[Number(id) - 1]["discont_price"];

//   const { handleAddLike, handleDeleteLike, likesCounter, getLikeId } =
//     LikesAction();
//   let isDiscont = currentDiscontPrice !== null;

//   return (
//     <>
//       <div className={styles.wrapper}>
//         <div className={styles.header}>
//           {isDiscont && (
//             <div className={styles.discount}>{discontPercent}%</div>
//           )}
//           <img src={BASE_URL + image} alt="card" className={styles.cardImage} />
//           <HeartIcon
//             getId={getLikeId}
//             className={cn(styles.heart, {
//               [styles.dark]: theme === "light",
//               [styles.checked]: likesData[id] === "liked",
//             })}
//             likesCounter={likesCounter}
//             addtoLikes={handleAddLike}
//             deleteLikes={handleDeleteLike}
//             id={id}
//             likesData={likesData}
//           />
//               <CartIcon id = {id} select = {id} handleCartState = {handleCartState}  className={cn(styles.cart, {
//               [styles.dark]: theme === "light",
//               [styles.checked]: selectedData[id] === "selected",
//             })} /> 
//           <button
//             onClick={() => {
//               handleAddToCart(id);
//             }}
//             className={styles.btn}
//           >
//             Add to Cart
//           </button>
//         </div>
//         <div className={styles.info}>
//           <div className={styles.title}>{title}</div>
//           <div className={styles.prices}>
//             <div className={styles.oldPrice}>{currentPrice} </div>
//             {isDiscont && (
//               <div className={styles.newPrice}>${currentDiscontPrice}</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default LikeProductsView;
