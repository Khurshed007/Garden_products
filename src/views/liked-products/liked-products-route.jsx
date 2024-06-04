import { Route, Routes } from "react-router-dom"
import { Product } from "../product/product"
import { LikeProducts } from "./liked-products"



export const LikedProductsRoute =  () =>  {

      return (
        <>
        <Routes>
        <Route path='/' element={<LikeProducts/>} />
        <Route path='/product/:productId' element={<Product/>} />
        </Routes>
        </>
      )

}
