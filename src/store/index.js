import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./cart-slice"
import shopReducer from './shop-slice';


export const store = configureStore({
    reducer: {
        shop: shopReducer,
        cart: cartReducer,
        
    }
});
