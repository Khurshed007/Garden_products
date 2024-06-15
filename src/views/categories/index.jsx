import React from "react";
import { Routes, Route } from "react-router-dom";
import { CategoriesLayout } from "./categories-layout";
import {Category} from '../category';
import { Product } from "../product/product";
import useData from "../../hooks/useData";
import { requestCategoryItem } from "../../store/async-action";
import { getCategorys } from "../../store/selectors";
export const Categories = ({categoriesItem, btnText, btnDispplay, hideBreadCrumbs,gap}) => {
    const allCategories = useData(requestCategoryItem, getCategorys);
    return (
         <>

        <Routes>
            <Route path='/' element={<CategoriesLayout gap={gap} hideBreadCrumbs = {hideBreadCrumbs}  categoriesItem = {categoriesItem} text = {"Categories"} btnText = {btnText} btnDispplay = {btnDispplay}/>} />
            <Route path='/:categoryId/*' element={<Category allCategories= {allCategories}/>}/>
            <Route path='/:categoryId/product/:productId' element={<Product/>}/>
        </Routes>
        </>
    );

  
};
