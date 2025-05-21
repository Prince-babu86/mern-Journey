import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nabvar from './components/Nabvar'
import Product from "./components/Product"
import About from "./components/About"
import Home from "./components/Home"
import Service from "./components/Service"

const App = () => {
  
  return (
    <div className='h-screen w-screen bg-gray-800 text-white'>
      <Nabvar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App