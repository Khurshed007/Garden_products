import { Route, Routes } from "react-router-dom"
import { Product } from "../product/product"
import { AllSales } from "."
import { NotFound } from "../404/not found"


export const AllSalesRoute =  () =>  {

      return (
        <>
        <Routes>
        <Route path='/' element={<AllSales/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/*' element={<NotFound/>} />
        </Routes>
        </>
      )

}
