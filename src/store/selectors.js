import { createSelector } from "reselect"; // Мемоизация для Selectors
import { getDiscountPercent } from "../utils/getDiscountPercent";

// Пример состояния
export const getAllItems = (state) => state.shop.items;
export const getGoodsData = (state) => state.cart.goodsData;
export const getLikesData = (state) => state.shop.likesData;

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

export const getCategorys = (state) => state.shop.category; // 5 CategoryItems

export const getIsLoading = (state) => state.shop.isLoading;

export const getError = (state) => state.shop.error;

export const getCurrenCategoryProducts = (state) => state.shop.categoryProducts;

// export const getLikesCounter = (state) => {
//   alert("Likes") // срабатывает бесконечно

//   return Object.values(state.shop.likesData).filter((liked) => liked).length;
// }


export const getLikesCounter = createSelector([getLikesData], (likesData) => {
  //  alert("Likes")
   return Object.values(likesData).filter((liked) => liked).length;
})

export const getModallState = (state) => state.shop.isModallOpen;

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
