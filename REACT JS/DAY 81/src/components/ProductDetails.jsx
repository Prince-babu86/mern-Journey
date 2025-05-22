import React from 'react'
import { Link, useParams } from 'react-router-dom'


const ProductDetails = () => {

    const productname = useParams()

    // console.log(productname.name);
   
  return (
    <div>
        <h1 className='text-5xl font-thin mb-10'>Product Details</h1>
        <h2 className='text-3xl font-thin mb-5'>{productname.name}</h2>
       <Link to={`/product`} className='bg-white px-4 py-2 text-black mb-4 rounded'>Go Back</Link>
    </div>
  )
}

export default ProductDetails