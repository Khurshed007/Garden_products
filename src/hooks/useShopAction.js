import { useDispatch, useSelector } from "react-redux";

import {setPath, switchTheme,toggleLikes   } from "../store/shop-slice";
import { getLikesCounter } from "../store/selectors";

export const useShopAction =  () => {
   const likesData = useSelector((state) => state.shop.likesData);
   const theme = useSelector((state) => state.shop.theme);
   const isLoading = useSelector((state) => state.shop.isLoading);
   const isError = useSelector((state) => state.shop.error);
   const path = useSelector((state) => state.shop.path);
   const likesCounter = useSelector(getLikesCounter);
   const categoryProducts = useSelector((state) => state.shop.categoryProducts);
   const isDiscountApplied = useSelector((state) => state.shop.discountApplied);
   const isOrderApplied = useSelector((state) => state.shop.orderApplied);
   const dispatch = useDispatch()

    const toggleToLikes = (articul) => {
        dispatch(toggleLikes(articul));
      };
 
      const setPathValue = (path) => {
        dispatch(setPath(path));
      };
      const toggleTheme = () => {
        dispatch(switchTheme())
      }
      return {toggleToLikes,isOrderApplied,setPathValue, toggleTheme, likesData, theme, isLoading, isError, path, likesCounter,categoryProducts,isDiscountApplied}
}

