import { useDispatch, useSelector } from "react-redux";

import { addToCart, deleteFromCart, setCartId, deleteAllCart,toggleCartItem  } from "../store/cart-slice";

export const useCartAction =  () => {

   let goodsData = useSelector((state) => state.cart.goodsData)
   let goodsCounter = useSelector((state) => state.cart.counter)
   let cartId = useSelector((state) => state.cart.cartId);
   let selectedData = useSelector((state) => state.cart.selectedData)

let dispatch = useDispatch()

    const handleAddToCart = (articul,price,discont) => {
        dispatch(addToCart({  articul,price,discont }));
      };
    
      const handleDeleteFromCart = (articul, price,discont) => {
        dispatch(deleteFromCart({ articul,price,discont }));
      };
      const  DeleteCart = (articul, price,discont) => {
        dispatch(deleteAllCart({ articul,price,discont }));
      };

      const getCartId = (id) => {
        dispatch(setCartId({ id })); // потм будет устанавливаться как {id: Нажатое Id}
      };
      const handleCartState = (articul, select) => {
        dispatch(toggleCartItem({ articul,select }));
      };

      return {handleAddToCart, handleDeleteFromCart, goodsData, goodsCounter, cartId, getCartId, DeleteCart,handleCartState,selectedData}
}

