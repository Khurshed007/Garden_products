import {createSlice} from '@reduxjs/toolkit';




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

        setCategory: (state,  {payload}) => {
            state.category = payload;
        },
  
    },

});


export const {setCategory} = shopSlice.actions;

export default shopSlice.reducer;
