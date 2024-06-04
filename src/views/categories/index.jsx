import React from "react";
import { Routes, Route } from "react-router-dom";
import { CategoriesLayout } from "./categories-layout";
import {Category} from '../category';
import { Product } from "../product/product";


export const Categories = ({showBreadCrumbs,categoriesItem, btnText, btnDispplay}) => {


    return (
         <>

        <Routes>
            <Route path='/' element={<CategoriesLayout showBreadCrumbs = {showBreadCrumbs}  categoriesItem = {categoriesItem} text = {"Categories"} btnText = {btnText} btnDispplay = {btnDispplay}/>} />
            <Route path='/:categoryId/*' element={<Category/>}/>
            <Route path='/:categoryId/product/:productId' element={<Product/>}/>
        </Routes>
        </>
    );

  
};
