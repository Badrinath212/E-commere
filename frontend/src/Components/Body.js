import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import {useDispatch, useSelector} from 'react-redux'
import { addProductsData, removesubCategory } from '../utils/dataSlice';

const Body = () => {
    const dispatch = useDispatch();
    const productsData = useSelector(store=>store.data.productsData);
    const subCategory = useSelector(store => store.data.subCategory);
    useEffect(()=>{
        if(subCategory!==""){
            const fetchProductData=async()=>{
                try {
                    const response = await fetch(`http://localhost:5000/api/products?subcategory=${subCategory}`,{
                        method : `GET`,
                        headers : {'Content-type':'application/json'},
                    });
                    if (!response.ok) {
                        dispatch(addProductsData([]));
                        const errorData = await response.json();
                        throw new Error(errorData.message || response.statusText);
                    }                
                    const data=await response.json();
                    dispatch(addProductsData(data));
                    dispatch(removesubCategory(""));
                } catch(err){
                    console.log(`Error : ${err}`);
                }
            }
            fetchProductData();
    }},[dispatch, subCategory])
  return (
    <div className='flex'>
        {productsData.map((productData)=>
                    <ProductCard  key={productData._id} data={productData}/>)}
    </div>
  )
}

export default Body