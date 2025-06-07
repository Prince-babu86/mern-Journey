import React, { useEffect } from 'react'
import axios from "./api/Axiosconfig"
import { getusers } from './store/UserAction'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {

  

 const  dispatch = useDispatch()
 const data = useSelector((state) => state)
console.log(data);
  useEffect(()=>{
   dispatch(getusers())
  },[])

  return (
    <div>
      App
    </div>
  )
}

export default App