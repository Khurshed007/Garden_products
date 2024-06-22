import {createSlice} from '@reduxjs/toolkit';
import { requestAllProductItem } from './async-action';
import { requestCurrentCategoryProducts } from './async-action';
import { requestCategoryItem } from './async-action';
import { sendSaleData,sendOrderData } from './async-action';




const initialState = {
    category: [],
    categoryProducts: [],
    items: [],
    likesData: {},
    isLoading: false,
    path: [],
    theme : "light",
    isError: null,
    likesData: {},
    discountApplied : false,
    orderApplied:false
};

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        setItems: (state, {payload}) => {
            state.items = payload;
        },
   
        setCategory: (state,  {payload}) => {
            state.category = payload;
        },
        setIsLoading: (state,  {payload}) => {
            state.isLoading = payload;
        },
        setPath: (state,  {payload}) => {
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
            state.items = payload
        })
        builder.addCase(requestAllProductItem.rejected, (state, {payload}) => {
            state.isError = true;
            state.isLoading = false;
        })
        
        builder.addCase(requestCategoryItem.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.category = payload;
            
        })
        
        builder.addCase(requestCategoryItem.pending, (state) => {
            state.isLoading = true;
            
        })

        
        builder.addCase(requestCurrentCategoryProducts.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.categoryProducts = payload;
            
        })
        builder.addCase(requestCurrentCategoryProducts.rejected, (state, {payload}) => {
              alert(payload, "pat err")
              state.categoryProducts = payload;
        })
        
        builder.addCase(sendSaleData.fulfilled, (state, action) => {
            if (action.payload.status === 'OK') {
                state.discountApplied = true;
            }
        })
        builder.addCase(sendOrderData.fulfilled, (state, action) => {
            if (action.payload.status === 'OK') {
                state.orderApplied = true;
            }
        })
    
    }
});


export const {setItems, setCategory, setIsLoading,setPath, switchTheme,toggleLikes,seCategoryProducts,discountApplied,orderApplied} = shopSlice.actions;
export default shopSlice.reducer;
