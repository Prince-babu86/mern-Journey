import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Product from "../components/Product"
import About from "../components/About"
import Home from "../components/Home"
import Service from "../components/Service"
import ProductDetails from '../components/ProductDetails'
import ServiceDetails from '../components/ServiceDetails'


const MainRoute = () => {
  return (
   <Routes>
 
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
         <Route path='/product/detail/:name' element={<ProductDetails/>}/>
        <Route path='/service' element={<Service/>}>
          <Route path='/service/detail' element={<ServiceDetails/>}/>
        </Route>
      
        <Route path='/about' element={<About/>}/>
      </Routes>
  )
}

export default MainRoute