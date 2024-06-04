import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./cart-slice"
import shopReducer from './shop-slice';
import LikesReducer from "./like-slice"


export const store = configureStore({
    reducer: {
        shop: shopReducer,
        cart: cartReducer,
        like : LikesReducer
    }
});
