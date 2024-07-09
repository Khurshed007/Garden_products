// import { useDispatch, useSelector } from "react-redux";
// import { useCallback } from "react";
// import { setPath, switchTheme, toggleLikes } from "../store/shop-slice";
// import { getLikesCounter, getAllItems, getCategorys,getDiscountItems } from "../store/selectors";

// export const useShopAction = () => {
//   const likesData = useSelector((state) => state.shop.likesData);
//   const theme = useSelector((state) => state.shop.theme);
//   const isLoading = useSelector((state) => state.shop.isLoading);
//   const isError = useSelector((state) => state.shop.error);
//   const path = useSelector((state) => state.shop.path);
  
//   const likesCounter = useSelector(getLikesCounter);
//   const categoryProducts = useSelector((state) => state.shop.categoryProducts);
//   const isDiscountApplied = useSelector((state) => state.shop.discountApplied);
//   const isOrderApplied = useSelector((state) => state.shop.orderApplied);
//   const items = useSelector(getAllItems);
//   const categorys = useSelector(getCategorys);
//   const discountItems = useSelector(getDiscountItems)
//   const mostDiscountItem = useSelector(getDiscountItems)[0]
//   const dispatch = useDispatch();

//   // const toggleToLikes = (articul) => {
//   //   dispatch(toggleLikes(articul));
//   // };

//   // const setPathValue = (path) => {
//   //   dispatch(setPath(path));
//   // };
//   // const toggleTheme = () => {
//   //   dispatch(switchTheme());
//   // };
//   const toggleToLikes = useCallback((articul) => {
//     dispatch(toggleLikes(articul));
//   }, [dispatch]);

//   const setPathValue = useCallback((path) => {
//     dispatch(setPath(path));
//   }, [dispatch]);

//   const toggleTheme = useCallback(() => {
//     dispatch(switchTheme());
//   }, [dispatch]);



//   return {
//     toggleToLikes,
//     discountItems,
//     categorys,
//     items,
//     isOrderApplied,
//     setPathValue,
//     toggleTheme,
//     likesData,
//     theme,
//     isLoading,
//     isError,
//     path,
//     likesCounter,
//     categoryProducts,
//     isDiscountApplied,
//     mostDiscountItem
//   };
// };
