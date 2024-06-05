
import {createAsyncThunk} from '@reduxjs/toolkit';
import { BASE_URL } from "../constants";
import { setCategory,seCategoryProducts } from './shop-slice';
import { setItems } from './shop-slice';
export const requestCategoryItem = createAsyncThunk('shop/requestCategoryItem', async (_, thunkApi) => {
   const {dispatch} = thunkApi
    // console.log(thunkApi);

    try {
        const rawData = await  fetch(`${BASE_URL}/categories/all`);
        const data = await rawData.json();
        dispatch(setCategory(data))
        return thunkApi.fulfillWithValue(data);
    } catch (err) {
        return thunkApi.rejectWithValue(err);
     }
   
     
});


export const requestAllProductItem = createAsyncThunk('shop/requestAllProductItem', async (_, thunkApi) => {
    const {dispatch} = thunkApi
 
     try {
         const rawData = await fetch(`${BASE_URL}/products/all`);
         const data = await rawData.json();
         dispatch(setItems(data))
         return thunkApi.fulfillWithValue(data);
     } catch (err) {
         return thunkApi.rejectWithValue(err);
      }
    
      
 });

 export const requestCurrentCategoryProducts = createAsyncThunk('shop/requestCurrentCategoryProducts', async (categoryId, thunkApi) => {
    const {dispatch} = thunkApi
 
     try {
         const rawData = await  fetch(`${BASE_URL}/categories/${categoryId}`);
         const {data} = await rawData.json(); // так как на вернется массив из 2х объектов category и data, то мы извлкаем из него только data
          console.log(data,"CategoryProducts")
         dispatch(seCategoryProducts(data))
         return thunkApi.fulfillWithValue(data);
     } catch (err) {
         return thunkApi.rejectWithValue(err);
      }
    
      
 });


 export const sendSaleData = createAsyncThunk(
    "shop/sendSaleData",
    async (formData, thunkApi) => {
      try {
        const serverResponse = await fetch(`${BASE_URL}/sale/send`, {
          method: "POST",
          body: JSON.stringify(formData),
        });
        const data = await serverResponse.json();
  
        return thunkApi.fulfillWithValue(data);
      } catch (err) {
        return thunkApi.rejectWithValue(err);
      }
    }
  );
  
 