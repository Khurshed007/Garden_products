export const getCategorys = (state) => state.shop.category; // 5 CategoryItems

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

