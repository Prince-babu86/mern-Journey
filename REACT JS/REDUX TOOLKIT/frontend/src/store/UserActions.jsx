import axios from '../api/axiosconfig'
import { loaduser } from './UserSlice';


export const asyncGetUsers =  () =>  async (dispatch , getstate) =>  {
    try {
        console.log("current state" ,getstate());
        const res = await axios.get("/users");
        // console.log(res.data);
        dispatch(loaduser(res.data));
    } catch (error) {
        console.log(error);
    }
}

