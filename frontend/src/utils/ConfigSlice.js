import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        isUserAlready:false,
        userInfo:{
            isAuthenticated:false,
            userName:"",
            token:"",
        }
    },
    reducers:{
        setisUserTheir:(state,action)=>{
            state.isUserAlready=action.payload;
        },
        setuserInfo:(state,action)=>{
            state.userInfo=action.payload;
        },
        clearuserInfo:(state,action)=>{
            state.userInfo=action.payload;
        }
    }
});

export const {setisUserTheir,setuserInfo,clearuserInfo}=configSlice.actions;
export default configSlice.reducer;