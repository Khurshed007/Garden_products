import { Route, Routes } from "react-router-dom"
import { Product } from "../product/product"
import { AllSales } from "."



export const AllSalesRoute =  () =>  {

      return (
        <>
        <Routes>
        <Route path='/' element={<AllSales/>} />
        <Route path='/product/:productId' element={<Product/>} />
        </Routes>
        </>
      )

}
