import { useSelector } from "react-redux";
import { getDiscountPercent } from "../utils/getDiscountPercent";

export const getCategorys = (state) => state.shop.category; // 5 CategoryItems

export const getIsLoading = (state) => state.shop.isLoading;

export const getError = (state) => state.shop.error;

export const getProductById = (state, itemId) =>
  state.shop.items.find((item) => String(item.id) === itemId);

export const getMostDiscountedItem = (state, itemId) =>
  state.shop.items.reduce((accu, items, index) => {
    if (items.discont_price > accu) {
      return items;
    }
    return accu;
  }, 0);

  export const getLikesCounter = (state => Object.values(state.shop.likesData).filter(liked => liked).length);


export const getModallState = (state) => state.shop.isModallOpen;

export const getCartCounter = (state) =>
  Object.values(state.cart.goodsData).reduce((accu, item) => {
    accu += item;
    return accu;
  }, 0);
export const getDiscountItems = (state) => {
  const items = [...state.shop.items];

  return items
  // .sort(() => Math.random() - 0.5) // Перемешиваем элементы в случайном порядке
  .sort(
    (elem, elem2) =>
      getDiscountPercent(elem2.price, elem2.discont_price) -
      getDiscountPercent(elem.price, elem.discont_price)
  )
  .filter(({ discont_price }, index) => discont_price !== null && index < 4);
};

export const getAllItems = (state) => state.shop.items;

export const getAllSales = (state) => {
  const items = [...state.shop.items];

  return items
    .sort(
      (elem, elem2) =>
        getDiscountPercent(elem2.price, elem2.discont_price) -
        getDiscountPercent(elem.price, elem.discont_price)
    )
    .filter(({ discont_price }, index) => discont_price !== null);
};

export const catrChange = (state) => {
  const items = [...state.shop.items];

  return items
    .sort(
      (elem, elem2) =>
        getDiscountPercent(elem2.price, elem2.discont_price) -
        getDiscountPercent(elem.price, elem.discont_price)
    )
    .filter(({ discont_price }, index) => discont_price !== null);
};

export const getCart = (state) => {
  const newData = { ...state.shop.cart };
  function addtoCart(e) {
    let target = e.target.dataset.articul;

    if (!newData[target]) {
      // Если элемент с таким articul еще не существует, добавляем его в объект с начальным счетчиком 1
      newData[target] = 1;
    } else {
      // Если элемент с таким articul уже существует, увеличиваем его счетчик на 1
      newData[target] += 1;
    }

    return newData;
  }

  return addtoCart;
};

// function deleteFromCart(e) {
//  let target = e.target.dataset.articul;
//  setGoodsData(prevData => {
//    const newData = { ...prevData };

//    if (newData[target] <= 1) {
//      // Если элемент с таким articul еще не существует, добавляем его в объект с начальным счетчиком 1
//      delete newData[target]
//    } else if(newData[target] > 0 && !Number.isNaN(newData[target])){
//      // Если элемент с таким articul уже существует, увеличиваем его счетчик на 1
//      newData[target]--
//    }
//    // else if(newData)

//    return newData;
//  });
//  SetCounter((prev) => --prev)
// }
