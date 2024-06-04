import { Route, Routes } from "react-router-dom"
import { AllProducts } from "./all-products"
import { Product } from "../product/product"



export const AllProductsRoute =  () =>  {

      return (
        <>
        <Routes>
        <Route path='/' element={<AllProducts/>} />
        <Route path='/product/:productId' element={<Product/>} />
        </Routes>
        </>
      )

}



