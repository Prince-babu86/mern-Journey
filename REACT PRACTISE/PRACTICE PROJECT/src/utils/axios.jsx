import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  // withCredentials:true
});


instance.interceptors.request.use(
    
)

export default instance;
