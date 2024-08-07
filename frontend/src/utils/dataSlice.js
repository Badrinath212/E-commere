import { createSlice } from "@reduxjs/toolkit";

const dataSlice=createSlice({
    name:"data",
    initialState:{
        productsData:[],
    },
    reducers:{
        addProductsData:(state,action)=>{
            state.productsData=action.payload;
        }
    }
});

export const {addProductsData}=dataSlice.actions;
export default dataSlice.reducer;