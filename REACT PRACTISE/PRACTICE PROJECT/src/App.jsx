import React, { useEffect } from "react";
import Net from "./Net";
// import axios from "axios";
import axios from "./utils/axios";

const App = () => {
  const getproducts = async () => {
    try {
      const { data } = await axios.get("/products");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("mounted");   // when page start 
      getproducts();
    return () => {
      console.log("Unmounded");  // when page end 
    }
  
  }, []);  // when update something 

  return (
    <div className="p-4 bg-slate-900 text-white h-screen w-full">
      <button
        onClick={getproducts}
        className="w-[300px] bg-[#FB641B] py-2 rounded cursor-pointer"
      >
        Get Products
      </button>
    </div>
  );
};

export default App;
