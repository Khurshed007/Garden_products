import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import { addToCart, deleteFromCart,deleteAllCart,toggleCartItem,resetGoodsData  } from "../store/cart-slice";

export const useCartAction =  () => {

   let goodsData = useSelector((state) => state.cart.goodsData)

let dispatch = useDispatch()

    // const handleAddToCart = (articul,price,discont) => {
    //     dispatch(addToCart({  articul,price,discont }));
    //   };
    
    //   const handleDeleteFromCart = (articul, price,discont) => {
    //     dispatch(deleteFromCart({ articul,price,discont }));
    //   };
    //   const  deleteCart = (articul, price,discont) => {
    //     dispatch(deleteAllCart({ articul,price,discont }));
    //   };

    //   const handleCartState = (articul, select) => {
    //     dispatch(toggleCartItem({ articul,select }));
    //   };

    //   const resetCart = () => {
    //     dispatch(resetGoodsData());
    //   };

    const handleAddToCart = useCallback((articul, price, discont) => {
      dispatch(addToCart({ articul, price, discont }));
    }, [dispatch, goodsData]);
  
    const handleDeleteFromCart = useCallback((articul, price, discont) => {
      dispatch(deleteFromCart({ articul, price, discont }));
    }, [dispatch,goodsData]);
  
    const deleteCart = useCallback((articul, price, discont) => {
      dispatch(deleteAllCart({ articul, price, discont }));
    }, [dispatch,goodsData]);
  
    const handleCartState = useCallback((articul, select) => {
      dispatch(toggleCartItem({ articul, select }));
    }, [dispatch,goodsData]);
  
    const resetCart = useCallback(() => {
      dispatch(resetGoodsData());
    }, [dispatch,goodsData]);
      
     return {handleAddToCart, handleDeleteFromCart,resetCart, goodsData,deleteCart,handleCartState}
}

