import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";


const initialState = {
    data:[],
   
    
}


const userSlice =  createSlice({
    name:"user",
    initialState,
    reducers:{
        loaduser:(state , action)=>{
           state.data = action.payload
           console.log(action);                                                         

        },
    }
});

export const {loaduser} = userSlice.actions;

export default userSlice.reducer;