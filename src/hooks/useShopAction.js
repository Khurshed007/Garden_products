import { useDispatch, useSelector } from "react-redux";

import {setPath, switchTheme,toggleLikes   } from "../store/shop-slice";
import { getLikesCounter } from "../store/selectors";

export const useShopAction =  () => {
   let likesData = useSelector((state) => state.shop.likesData);
   let theme = useSelector((state) => state.shop.theme);
   let isLoading = useSelector((state) => state.shop.isLoading);
   let isError = useSelector((state) => state.shop.error);
   let path = useSelector((state) => state.shop.path);
   let likesCounter = useSelector(getLikesCounter);
   let dispatch = useDispatch()

    const toggleToLikes = (articul) => {
        dispatch(toggleLikes(articul));
      };
 
      const setPathValue = (path) => {
        dispatch(setPath(path));
      };
      const toggleTheme = () => {
        dispatch(switchTheme())
      }

      return {toggleToLikes,  setPathValue, toggleTheme, likesData, theme, isLoading, isError, path, likesCounter}
}

