import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    goodsData: {},
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const articul  = payload;
      !state.goodsData[articul] // Доп. учловие на случай если articulа нет
        ? (state.goodsData[articul] = 1)
        : (state.goodsData[articul] += 1);
    },
    deleteFromCart: (state, action) => {
      const  articul  = action.payload;
      state.goodsData[articul]--;
      if (state.goodsData[articul] === 0) return;
    },
    deleteAllCart: (state, action) => {
      const  articul  = action.payload;
      state.goodsData[articul] = 0;
    },
    resetGoodsData : (state, _) => {
      state.goodsData = {}
    },

    setProductCart: (state, { payload }) => { // Этот reducer для одного продукта
      const { productCounter, id } = payload; // productCounter(число) приходит от личного стейта внутри компонента одного product
     if(!state.goodsData[id]) state.goodsData[id] = 0; // Чтобы я мог увеличить счетчик goodsData, то нужно установить goodsData[id] какое то число, увеличить буду с нуля
      state.goodsData[id] += productCounter; 
    },

    toggleCartItem: (state, { payload }) => {
      const articul = payload;
      state.goodsData[articul] = Number(!state.goodsData[articul]); // В Number потому что в дальнейшем нужно будет увеличить счетчик
    },
  },
  
});

export const {
  addToCart,
  deleteFromCart,
  deleteAllCart,
  setProductCart,
  toggleCartItem,
  resetGoodsData
} = cartSlice.actions;
export default cartSlice.reducer;
