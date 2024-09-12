import React from 'react'
import CartCard from './CartCard';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartData = useSelector(store => store.data.cartData);
  console.log(cartData);
  return (
    <div>
      <div className='p-2 mt-8 ml-5'>
          <h1 className='text-3xl'>Shopping Cart</h1>
      </div>
      <div>
        {cartData && cartData.map((item) =>(
          <CartCard key={item.product_id} productData={item.product} Qty={item.Qty}/>
        ))}
      </div>
    </div>
  )
}

export default Cart;