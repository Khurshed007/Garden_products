import { createSelector } from "reselect"; // Мемоизация для Selectors
import { getDiscountPercent } from "../utils/getDiscountPercent";






// Селекторы без операции от shop
export const getAllItems = (state) => state.shop.items;
export const getCategorys = (state) => state.shop.category; // 5 CategoryItems
export const getLikesData = (state) => state.shop.likesData;
export const getTheme = (state) => state.shop.theme;
export const getIsLoading = (state) => state.shop.isLoading;
export const getError = (state) => state.shop.error;
export const getPath = (state) => state.shop.path;
export const getCurrenCategoryProducts = (state) => state.shop.categoryProducts;
export const getIsDiscountApplied = (state) => state.shop.discountApplied;
export const getIsOrderApplied = (state) => state.shop.orderApplied
export const getModallState = (state) => state.shop.isModallOpen;
export const getIsError = (state) => state.shop.isError;
//  export const mostDiscountItem = (getDiscountItems)[0]


// Селекторы c операциями от shop
// export const getLikesCounter = (state) => {
//   alert("Likes") // срабатывает бесконечно

//   return Object.values(state.shop.likesData).filter((liked) => liked).length;
// }
export const getDiscountItems = createSelector(
  // getDiscountItems возвращает новый массив или объект при каждом вызове, даже если данные в состоянии Redux не изменились
  [getAllItems],
  (items) => {
    return items
      .filter(({ discont_price }) => discont_price !== null)

      .sort(
        (elem, elem2) =>
          getDiscountPercent(elem2.price, elem2.discont_price) -
          getDiscountPercent(elem.price, elem.discont_price)
      );
  }
);


export const getLikesCounter = createSelector([getLikesData], (likesData) => {
  return Object.values(likesData).filter((liked) => liked).length;
})





export const getGoodsData = (state) => state.cart.goodsData;



// export const getCartCounter = (state) =>{
// alert("123")
//   return Object.values(state.cart.goodsData).reduce((accu, item) => {
//     accu += item;
//     return accu;
//   }, 0)};

export const getCartCounter = createSelector([getGoodsData], (goodsData) => {
  //  alert("asdasds") // Запускается только тогда когда goodsData мутирует
  return Object.values(goodsData).reduce((accu, item) => {
    accu += item;
    return accu;
  }, 0);
});







