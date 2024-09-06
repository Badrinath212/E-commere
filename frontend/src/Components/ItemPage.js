import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const ItemPage = () => {
    const location = useLocation();
    const { product } = location.state || {};
    const [imageIndex, setImageIndex] = useState(0);
    const [howerIndex, setHowerIndex] = useState(null);
    const itemAttributesKeys = Object.keys(product?.attributes);
    console.log(product);
    const handleClick = (index) =>{
        setImageIndex(index);
    }
    const handleMouseEnter = (index)=>{
        setHowerIndex(index);
    }
    const handleMouseLeave = () =>{
        setHowerIndex(null);
    }
  return  (
    <div className='flex m-2 ml-16'>
        <div>
            {product.image.map((img, index)=>(
                <img className='border-[3.5px] border-blue-200 w-12 h-12 m-2 rounded-lg mt-4 ml-4 cursor-pointer hover:border-blue-700 ' 
                    key={index} 
                    onClick={() =>handleClick(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    alt='icon' src={img}/>
            ))}
        </div>
        <div>
            <img className='m-2 ml-8 w-[679px] h-[679px]' alt='productImage' src={product.image[howerIndex!=null ? howerIndex : imageIndex]}/>
        </div>
        <div>
            <div className='ml-2 w-[500px]'>
                <h1 className='font-sans text-2xl'>{product.name}</h1>
            </div>
            <div className='mt-20'>
                {itemAttributesKeys.map((att, index) => (
                    <div key={index} className='flex p-2'>
                        <span className='w-48 font-semibold'>{att}</span>
                        <span className='ml-7'>{product.attributes[att]}</span>
                    </div>
                ))}
            </div>
            <div className="space-y-4 ml-16">
                <div>
                    <label htmlFor='quantity'>quantity:</label>
                    <select>
                        <option></option>
                    </select>
                </div>
                <button className='bg-yellow-400 p-3 rounded-full w-[75%]'>Add to cart</button>
                <button className='bg-yellow-400 p-3 rounded-full w-[75%]'>Buy Now</button>
            </div>

        </div>
    </div>
  )
}

export default ItemPage