import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nabvar = () => {
  return (
    <div>
        <nav className='flex items-center justify-center p-5 bg-gray-900'>
            {/* <h1 className='text-3xl'>Routing</h1> */}
            <div className="center flex gap-5">
                <NavLink to={`/`} className={(e)=> e.isActive ? 'cursor-pointer text-md text-red-400 ' : 'cursor-pointer text-md '}>Home</NavLink>
                <NavLink to={`/product`} className={(e)=> e.isActive ? 'cursor-pointer text-md text-red-400 ' : 'cursor-pointer text-md '}>Product</NavLink>
                <NavLink to={`/service`} className={(e)=> e.isActive ? 'cursor-pointer text-md text-red-400 ' : 'cursor-pointer text-md '}>Service</NavLink>
                <NavLink to={`/about`} className={(e)=> e.isActive ? 'cursor-pointer text-md text-red-400 ' : 'cursor-pointer text-md '}>About</NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Nabvar