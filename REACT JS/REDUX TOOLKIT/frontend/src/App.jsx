import axios from "./api/axiosconfig";
import React, { useEffect } from "react";

const App = () => {
  const getproducts = async () => {
    try {
      const res = await axios.get("/products");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  return <div>App</div>;
};

export default App;
