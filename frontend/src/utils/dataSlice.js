import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name : "data",
    initialState : {
        productsData : [],
        itemName : "",
        categoryList : [],
        category : "",
        subCategory : "",
        offersData : [],
        cartData : [],
    },
    reducers:{
        addProductsData : (state, action) => {
            state.productsData = action.payload;
        },
        addItemName : (state, action) => {
            state.itemName = action.payload;
        },
        addCategoryList : (state, action) => {
            state.categoryList = action.payload;
        },
        addCategory : (state, action) => {
            state.category = action.payload;
        },
        addSubCategory : (state, action) => {
            state.subCategory = action.payload;
        },
        removesubCategory : (state, action) =>{
            state.subCategory = action.payload;
        },
        addOffersData : (state, action) =>{
            state.offersData = action.payload;
        },
        addCartData : (state, action) =>{
            state.cartData = action.payload;
        },
        deleteCartItem : (state, action) =>{
            state.cartData = state.cartData.filter((item) =>{
                return item.productId !== action.payload;
            })
        }
    }
});

export const {addProductsData, 
                addItemName, addCategoryList, 
                addCategory, addSubCategory, 
                removesubCategory, addOffersData, addCartData, deleteCartItem} = dataSlice.actions;
export default dataSlice.reducer;