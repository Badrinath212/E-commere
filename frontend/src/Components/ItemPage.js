import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { addCartData } from '../utils/dataSlice';

const ItemPage = () => {
    const location = useLocation();
    const { product } = location.state || {};
    const [imageIndex, setImageIndex] = useState(0);
    const [howerIndex, setHowerIndex] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const itemAttributesKeys = Object.keys(product?.attributes);
    const quantityArray = Array.from({length : 20}, (_, i) => i+1);
    const cartData = useSelector(store => store.data.cartData);
    const dispatch = useDispatch();
    const handleClick = (index) =>{
        setImageIndex(index);
    }
    const handleMouseEnter = (index) => {
        setHowerIndex(index);
    }
    const handleMouseLeave = () => {
        setHowerIndex(null);
    }
    const handleCart = () => {
        dispatch(addCartData([...cartData,{productId : product._id, product : product, Qty : quantity}]));
    }
  return  product && (
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
                <div>
                    <h1 className='font-sans text-2xl'>{product.name}</h1>
                </div>
                <div>
                    <h1>Price: <sup className='w-6 font-bold text-xl'>₹</sup><span  className='font-bold text-2xl'>{product.price}</span></h1>
                </div>
            </div>
            <div className='mt-20'>
                {itemAttributesKeys.map((att, index) => (
                    <div key={index} className='flex p-2'>
                        <span className='w-48 font-semibold'>{att}</span>
                        <span className='ml-7'>{product.attributes[att]}</span>
                    </div>
                ))}
            </div>
            <div className="space-y-4 ml-16 border-2 border-cyan-300 p-2 rounded-lg mt-6">
                <div className='p-2'>
                    <label htmlFor='quantity' className='font-bold'>Quantity:</label>
                    <select className='space-x-9' onChange={(e) => setQuantity(e.target.value)}>
                        {quantityArray.map((option,index) =>(
                            <option key={index} 
                                value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <button 
                    type='button'
                    onClick={()=> handleCart()}
                    className='bg-yellow-400 p-3 rounded-full w-[75%]'>Add to cart
                </button>
                <button className='bg-yellow-400 p-3 rounded-full w-[75%]'>Buy Now</button>
            </div>

        </div>
    </div>
  )
}

export default ItemPage