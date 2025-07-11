import axios from "./api/axiosconfig";
import React, { useEffect } from "react";
import {asyncGetUsers} from './store/UserActions'
import { useDispatch, useSelector } from "react-redux";
const App = () => {

 const dispatch =  useDispatch();  // for actions only 

 let data = useSelector((state)=> state)

 console.log(data);
  
  useEffect(()=>{
    dispatch(asyncGetUsers());
  },[])

  return <div className="h-screen w-screen bg-slate-950">App</div>;
};

export default App;
