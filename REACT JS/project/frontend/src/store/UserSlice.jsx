import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const initialState = {
  data: [],
  
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loaduser: (state, action) => {
        // console.log(action);
        state.data = action.payload
        // console.log(action);
    }, // action api data and state is intailState
  },
});

export const { loaduser } = userSlice.actions;
export default userSlice.reducer;
