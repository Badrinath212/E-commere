import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import {useDispatch, useSelector} from 'react-redux'
import { addProductsData } from '../utils/dataSlice';

const Body = () => {
    const dispatch=useDispatch();
    const productsData=useSelector(store=>store.data.productsData);
    useEffect(()=>{
        try{
            const fetchProductData=async()=>{
                const response=await fetch(`http://localhost:5000/api/products`,{
                    method:`GET`,
                    headers:{'Content-type':'application/json'}
                });
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || response.statusText);
                }                
                const data=await response.json();
                dispatch(addProductsData(data));
            }
            fetchProductData();
        }catch(err){
            console.log(`Error: ${err}`);
        }
    },[dispatch])
  return (
    <div className='flex'>
        {productsData.map((productData)=>
                    <ProductCard  key={productData._id} data={productData}/>)}
    </div>
  )
}

export default Body