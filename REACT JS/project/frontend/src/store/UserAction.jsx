import axios from "../api/Axiosconfig";
import { loaduser } from "./UserSlice";


export const getusers =  () => async (dispatch , getState) => {
   
    try {
        //  console.log(getState());
        let res = await axios.get("/users")
        console.log(res.data);
        dispatch(loaduser(res.data))
    } catch (error) {
        console.log(error);
    }
}

