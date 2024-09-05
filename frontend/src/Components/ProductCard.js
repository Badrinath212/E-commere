import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ data }) => {
  const { name, price, rating, image } = data;
  const formatPrice=(price)=>{
    return new Intl.NumberFormat('en-IN').format(price);
  }
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/home/category/products/item", {state : {product : data}});
  }
  return (
    <div onClick={handleClick} className="w-96 mt-4 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <div className="w-full h-56">
        <img
          alt="Product"
          src={image[0]}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <p
          className="text-gray-900 font-serif text-lg font-semibold overflow-hidden"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            lineHeight: '1.5rem',
            maxHeight: '4.5rem',
          }}
        >
          {name}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-yellow-500 font-medium text-sm">{rating} ★</p>
          <p className="text-green-600 font-bold text-lg">₹{formatPrice(price)}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
