import React, { useState } from 'react'

const Products = () => {
    const [productDetails,setproductDetails]=useState({
        name:"",
        image:"",
        brand:"",
        category:"",
        description:"",
        rating:"",
        countInStock:undefined,
    });
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setproductDetails((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(productDetails);
        try{
            const response= await fetch("http://localhost:5000/register",{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(productDetails)
            })
            if(!response.ok){
                throw new Error(`Error: ${response.status}`);
            }
            const res=await response.json();
            console.log(res);
            setproductDetails({
                name:"",
                image:"",
                brand:"",
                category:"",
                description:"",
                rating:"",
                countInStock:undefined,
            });
        }catch(err){
            console.log(`Error : ${err}`);
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Product Data</h1>
            <input onChange={handleChange} type='text' className='p-2 border border-blue-400' name='name' placeholder='name' value={productDetails.name} required/>
            <input onChange={handleChange} type='url' className='p-2 border border-blue-400' name='image' placeholder='image' value={productDetails.image} required/>
            <input onChange={handleChange} type='text' className='p-2 border border-blue-400' name='brand' placeholder='brand' value={productDetails.brand} required/>
            <input onChange={handleChange} type='text' className='p-2 border border-blue-400' name='category' placeholder='category' value={productDetails.category} required/>
            <input onChange={handleChange} type='text' className='p-2 border border-blue-400' name='description' placeholder='description' value={productDetails.description} required/>
            <input onChange={handleChange} type='number' className='p-2 border border-blue-400' name='rating' placeholder='rating' value={productDetails.rating} required/>
            <input onChange={handleChange} type='number' className='p-2 border border-blue-400' name='countInStock' placeholder='countInStock' value={productDetails.countInStock} required/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Products