import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        isUserAlready:false
    },
    reducers:{
        setisUserTheir:(state,action)=>{
            state.isUserAlready=action.payload;
        }
    }
});

export const {setisUserTheir}=configSlice.actions;
export default configSlice.reducer;