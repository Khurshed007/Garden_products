import {createSlice} from '@reduxjs/toolkit';
import { requestAllProductItem } from './async-action';
import { requestCategoryItem } from './async-action';



const initialState = {
    category: [],
    items: [],
    likesData: {},
    isLoading: false,
    path: [],
    theme : "light",
    error: null,
    likesData: {},
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
            state.items = payload;
        })
        builder.addCase(requestAllProductItem.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
});


export const {setItems, setCategory, setIsLoading,setPath, switchTheme,toggleLikes} = shopSlice.actions;

export default shopSlice.reducer;
