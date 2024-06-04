// import { Link } from "react-router-dom";
// import React, { useState, useContext } from "react";
// import styles from "./index.module.scss";
// import { cartContext } from "../../context/cart-context";
// import cn from "classnames";
// import { themeContext } from "../../context/theme";
// import { BASE_URL } from "../../constants";
// import { HeartIcon } from "../../assets/icons";
// import { CartIcon } from "../../assets/icons";
// import { LikesAction } from "../../utils/LikesAction";
// import { CartAction } from "../../utils/CartAction";

// function AllSalesView({
//   description,
//   image,
//   discont_price,
//   id,
//   price,
//   title,
//   discontPercent,
//   key,
// }) {
//   const { theme, switchTheme } = useContext(themeContext);
//   const {handleCartState,selectedData, handleAddToCart } = CartAction();
//   let isDiscont = discont_price !== null;


//   const {
//     handleAddLike,
//     handleDeleteLike,
//     likesData,
//     likesCounter,
//     getLikeId,
//   } = LikesAction();
//   return (
//     <>
//    <div className={styles.wrapper}>
//     <div className={styles.header}>
   
//         <div className={styles.discount}>{discontPercent}%</div>
  
//       <img src={BASE_URL + image} alt="card" className={styles.cardImage} />

//       <HeartIcon
//         getId={getLikeId}
//         className={cn(styles.heart, {
//           [styles.dark]: theme === "light",
//           [styles.checked]: likesData[id] === "liked",
//         })}
//         likesCounter={likesCounter}
//         addtoLikes={handleAddLike}
//         deleteLikes={handleDeleteLike}
//         id={id}
//         likesData={likesData}
//       />
//               <CartIcon id = {id} select = {id} handleCartState = {handleCartState}  className={cn(styles.cart, {
//               [styles.dark]: theme === "light",
//               [styles.checked]: selectedData[id] === "selected",
//             })} />
//       <button onClick={() =>  handleAddToCart(id)} className={styles.btn}>
//         Add to Cart
//       </button>
//     </div>
//     <div className={styles.info}>
//       <div className={styles.title}>{title}</div>
//       <Link to={`product/${id}`}>
//       <div className={styles.prices}>
//         <div className={styles.oldPrice}>{price} </div>

//           <div className={styles.newPrice}>${ discont_price}</div>
    
//       </div>
//       </Link>
//     </div>
//   </div>

//     </>
//   );
// }

// export default AllSalesView;
