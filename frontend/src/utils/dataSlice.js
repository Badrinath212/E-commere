import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name : "data",
    initialState : {
        productsData : [],
        itemName : "",
        categoryList : []
    },
    reducers:{
        addProductsData : (state, action) =>{
            state.productsData = action.payload;
        },
        addItemName : (state, action)=>{
            state.itemName = action.payload;
        },
        addCategoryList : (state, action) =>{
            state.categoryList = action.payload;
        }
    }
});

export const {addProductsData, addItemName, addCategoryList} = dataSlice.actions;
export default dataSlice.reducer;