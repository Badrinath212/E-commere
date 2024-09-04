import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCategory } from "../utils/dataSlice";

const NavBar = ()=>{
    const dispatch = useDispatch();
    const handleClick = (item)=>{
        dispatch(addCategory(item));
    }
    return (
        <div className="bg-slate-600 text-white">
            <ul className="flex ml-5">
                <Link to={'/home/electronics'}><li 
                    onClick={() => handleClick('Electronics')}
                    className="p-2 m-1 cursor-pointer border-r-2 border-r-white"
                    >Electronics</li></Link>
                <Link to={'/home/fashion'}><li 
                    onClick={() => handleClick('Fashion')}
                    className="p-2 m-1 cursor-pointer border-r-2 border-r-white"
                    >Fashion</li></Link>
                <Link to={'/home/grocery'}><li 
                    onClick={() => handleClick('Grocery')}
                    className="p-2 m-1 cursor-pointer border-r-2 border-r-white">Grocery</li></Link>
                <li className="p-2 m-1 cursor-pointer border-r-2 border-r-white">Mobiles</li>
                <Link to={'/home/home&furniture'}><li 
                    onClick={() => handleClick('Home & Furniture')}
                    className="p-2 m-1 cursor-pointer border-r-2 border-r-white"
                    >Home & Furniture</li></Link>
                <Link to={'/home/appliances'}><li 
                    onClick={() => handleClick('Appliances')}
                    className="p-2 m-1 cursor-pointer border-r-2 border-r-white">Appliances</li></Link>
                <Link to={'/home/books'}><li 
                    onClick={() => handleClick('Books')}
                    className="p-2 m-1 cursor-pointer border-r-2 border-r-white">Books</li></Link>
                <Link to={'/home/cars&bikes'}><li 
                    onClick={() => handleClick('Cars & Bikes')}
                    className="p-2 m-1 cursor-pointer border-r-2 border-r-white">Cars & Bikes</li></Link>
                <Link to={'/home/computers'}><li 
                    onClick={() => handleClick('Computers')}
                    className="p-2 m-1 cursor-pointer border-r-2 border-r-white">Computers</li></Link>
                <li 
                    onClick={() => handleClick('Travel')}
                    className="p-2 m-1 cursor-pointer border-r-2 border-r-white">Travel</li>
                <li 
                    onClick={() => handleClick('Beauty, Toys & More')}
                    className="p-2 m-1 cursor-pointer border-r-2 border-r-white">Beauty, Toys & More</li>
                <li 
                    onClick={() => handleClick('New Releases')}
                    className="p-2 m-1 cursor-pointer border-r-2 border-r-white">New Releases</li>
                <li 
                    onClick={() => handleClick('Sell')}
                    className="p-2 m-1 cursor-pointer border-r-2 border-r-white">Sell</li>
                <li 
                    onClick={() => handleClick('Customer Service')}
                    className="p-2 m-1 cursor-pointer">Customer Service</li>
            </ul>
        </div>
    );
}

export default NavBar;