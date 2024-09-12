import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteCartItem } from '../utils/dataSlice';

const CartCard = ({productData, Qty}) => {
    const [quantity, setQuantity] = useState(Qty);
    const quantityArray = Array.from({length : 10}, (_, i) => i+1);
    const dispatch = useDispatch();
    const handleItemDelete = (id) =>{
        dispatch(deleteCartItem(id));
    }
  return (
    <div className='flex pl-60'>
        <div>
            <img className='w-4/12' alt='itemImg' src={productData.image[0]}/>
        </div>
        <div className='mt-9 -ml-[445px] w-5/12'>
            <div>
                <h1 className=''>{productData.name}</h1>
                <h1 className='pt-3'><span className='font-serif'>Colour :</span> {productData?.attributes?.Colour}</h1>
            </div>
            <div className='mt-2 flex'>
                <div className='rounded-lg p-2 bg-slate-200 w-24'>
                    <label htmlFor='qty'>Qty: </label>
                    <select className='bg-slate-200' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                        {quantityArray.map((qty) => (
                            <option value={qty}>{qty}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <button 
                        onClick={() => handleItemDelete(productData._id)}
                        className='p-2 ml-4 text-blue-500' type='button'>Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartCard;