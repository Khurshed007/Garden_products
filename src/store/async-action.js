
import {createAsyncThunk} from '@reduxjs/toolkit';
import { BASE_URL } from "../constants";
import { setCategory } from './shop-slice';
export const requestCategoryItem = createAsyncThunk('shop/requestCategoryItem', async (_, thunkApi) => {
   const {dispatch} = thunkApi
    try {
        const rawData = await  fetch(`${BASE_URL}/categories/all`);
        const data = await rawData.json();
        dispatch(setCategory(data))
        return thunkApi.fulfillWithValue(data);
    } catch (err) {
        return thunkApi.rejectWithValue(err);
     }
});




