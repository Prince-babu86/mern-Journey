import React from 'react'
import { useNavigate } from 'react-router-dom'

const ServiceDetails = () => {
    const navigate = useNavigate()
    
  return (
    <div>
         <h1 className='text-5xl font-thin mb-10'>Services are not avilable</h1>
          <button onClick={() => navigate(-1)} className='bg-white text-black px-4 py-2 rounded inline-block'>Go back</button>
    </div>
  )
}

export default ServiceDetails