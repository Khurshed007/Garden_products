


export const getSortedPosts = (posts, sortOption, showDiscountedItems) => {
    return posts.sort((a, b) => {
      switch (sortOption) {
        case "price-low-high":
          return showDiscountedItems
            ? a.discont_price - b.discont_price
            : a.price - b.price;

        case "price-high-low":
          return showDiscountedItems
            ? b.discont_price - a.discont_price
            : b.price - a.price;

        case "newest":
          return a.title.localeCompare(b.title); // По алфавиту

        default:
          return a.id - b.id; // По умолчанию сортируем по id
      }
    });
  };