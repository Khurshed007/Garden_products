// import { useDispatch, useSelector } from "react-redux";
// import { useCallback } from "react";

// import { addToCart, deleteFromCart,deleteAllCart,toggleCartItem,resetGoodsData  } from "../store/cart-slice";

// export const useCartAction =  () => {

//    let goodsData = useSelector((state) => state.cart.goodsData)

// let dispatch = useDispatch()

//     // const handleAddToCart = (articul,price,discont) => {
//     //     dispatch(addToCart({  articul,price,discont }));
//     //   };
    
//     //   const handleDeleteFromCart = (articul, price,discont) => {
//     //     dispatch(deleteFromCart({ articul,price,discont }));
//     //   };
//     //   const  deleteCart = (articul, price,discont) => {
//     //     dispatch(deleteAllCart({ articul,price,discont }));
//     //   };

//     //   const handleCartState = (articul, select) => {
//     //     dispatch(toggleCartItem({ articul,select }));
//     //   };

//     //   const resetCart = () => {
//     //     dispatch(resetGoodsData());
//     //   };

//     const handleAddToCart = useCallback((articul) => {
//       dispatch(addToCart(articul));
//     }, [dispatch]);
  
//     const handleDeleteFromCart = useCallback((articul) => {
//       dispatch(deleteFromCart(articul));
//     }, [dispatch]);
  
//     const deleteCart = useCallback((articul) => {
//       dispatch(deleteAllCart(articul));
//     }, [dispatch]);
  
//     const handleCartState = useCallback((articul) => {
//       dispatch(toggleCartItem( articul));
//     }, [dispatch]);
  
//     const resetCart = useCallback(() => {
//       dispatch(resetGoodsData());
//     }, [dispatch]);
      
//      return {handleAddToCart, handleDeleteFromCart,resetCart, goodsData,deleteCart,handleCartState}
// }

