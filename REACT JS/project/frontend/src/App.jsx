import React, { useEffect } from 'react'
import axios from "./api/Axiosconfig"

const App = () => {

  const getusers = async () => {
    try {
      const res = await axios.get("/products")
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
    getusers()
  },[])

  return (
    <div>
      App
    </div>
  )
}

export default App