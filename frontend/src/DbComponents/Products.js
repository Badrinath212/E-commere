import React, { useState } from 'react'

const Products = () => {
    const [productAttrKey,setproductAttrKey] = useState("");
    const [productAttrValue,setproductAttrValue] = useState("");
    const [productDetails,setproductDetails]=useState({
        name:"",
        image:"",
        brand:"",
        price:0,
        category:"",
        description:"",
        rating:"",
        subcategory:"",
        countInStock:100,
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
                price:0,
                category:"",
                description:"",
                rating:"",
                subcategory:"",
                countInStock:100,
                productAttributes:{}
            });
        }catch(err){
            console.log(`Error : ${err}`);
        }
    };
    const handleAttributes=()=>{
        setproductDetails((prev)=>({
            ...prev,
            productAttributes:{
                ...prev.productAttributes,
                [productAttrKey]:productAttrValue
            }
        }))
        setproductAttrKey("");
        setproductAttrValue("");
    };
  return (
    <div>
        <form onSubmit={handleSubmit} className='ml-32 bg-slate-500'>
            <h1>Product Data</h1>
            <input onChange={handleChange} type='text' className='p-2 border border-blue-400' name='name' placeholder='name' value={productDetails.name} required/><br/>
            <input onChange={handleChange} type='url' className='p-2 border border-blue-400' name='image' placeholder='image' value={productDetails.image} required/><br/>
            <input onChange={handleChange} type='number' className='p-2 border border-blue-400' name='price' placeholder='price' value={productDetails.price} required/><br/>
            <input onChange={handleChange} type='text' className='p-2 border border-blue-400' name='brand' placeholder='brand' value={productDetails.brand} required/><br/>
            <input onChange={handleChange} type='text' className='p-2 border border-blue-400' name='category' placeholder='category' value={productDetails.category} required/><br/>
            <input onChange={handleChange} type='text' className='p-2 border border-blue-400' name='description' placeholder='description' value={productDetails.description} /><br/>
            <input onChange={handleChange} type='number' className='p-2 border border-blue-400' name='rating' placeholder='rating' value={productDetails.rating} required/><br/>
            <input onChange={handleChange} type='text' className='p-2 border border-blue-400' name='subcategory' placeholder='subCategory' value={productDetails.subcategory} required/><br/>
            <input onChange={handleChange} type='number' className='p-2 border border-blue-400' name='countInStock' placeholder='countInStock' value={productDetails.countInStock} required/><br/>
            <input type='text' onChange={(e)=>setproductAttrKey(e.target.value)}  placeholder='AttributeName' className='p-2 border border-blue-400' name='attrName' value={productAttrKey}/>
            <input type='text' onChange={(e)=>setproductAttrValue(e.target.value)}  placeholder='AttributeValue' className='p-2 border border-blue-400' name='attrValue' value={productAttrValue}/><br/>
            <button type='button' onClick={handleAttributes}>ADD</button><br/><br/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Products