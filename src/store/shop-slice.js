import {createSlice} from '@reduxjs/toolkit';
import { requestAllProductItem } from './async-action';
import { requestCurrentCategoryProducts } from './async-action';
import { requestCategoryItem } from './async-action';
import { sendSaleData } from './async-action';



const initialState = {
    category: [],
    categoryProducts: [],
    items: [],
    likesData: {},
    isLoading: false,
    path: [],
    theme : "light",
    error: null,
    likesData: {},
    discountApplied : false
};

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        setItems: (state, {payload}) => {
            state.items = payload;
        },
        seCategoryProducts: (state, {payload}) => {
            state.categoryProducts = payload;
        },
        setCategory: (state,  {payload}) => {
            state.category = payload;
        },
        setIsLoading: (state,  {payload}) => {
            state.isLoading = payload;
        },
        setPath: (state,  {payload}) => {
             console.log(payload, "for Path")
            state.path = ["Main Page",...payload];
        },
        switchTheme: (state) => {
             state.theme = state.theme === "light" ? "dark" : "light";
        },
        toggleLikes: (state, { payload }) => {
             
            state.likesData[payload] = !state.likesData[payload]; // В true или false потому что больше 1 раза не нужно будет мутировать
          },
    },
    extraReducers: (builder) => {
        builder.addCase(requestAllProductItem.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(requestAllProductItem.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            
        })
        builder.addCase(requestCategoryItem.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
        builder.addCase(requestCategoryItem.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(requestCategoryItem.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            
        })

        builder.addCase(requestCurrentCategoryProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
        builder.addCase(requestCurrentCategoryProducts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(requestCurrentCategoryProducts.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            
        })
        builder.addCase(sendSaleData.fulfilled, (state, action) => {
            if (action.payload.status === 'OK') {
                state.discountApplied = true;
            }
        })
    
    }
});


export const {setItems, setCategory, setIsLoading,setPath, switchTheme,toggleLikes,seCategoryProducts} = shopSlice.actions;

export default shopSlice.reducer;
