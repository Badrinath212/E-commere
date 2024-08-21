import React from "react";
import { Link } from "react-router-dom";

const NavBar = ()=>{
    return (
        <div className="bg-slate-600 text-white">
            <ul className="flex ml-5">
                <Link to={'/home/electronics'}><li 
                    className="p-2 m-1 cursor-pointer border-r-2 border-r-white"
                    >Electronics</li></Link>
                <Link to={'/home/fashion'}><li 
                    className="p-2 m-1 cursor-pointer border-r-2 border-r-white"
                    >Fashion</li></Link>
                <Link to={'/home/grocery'}><li 
                    className="p-2 m-1 cursor-pointer border-r-2 border-r-white">Grocery</li></Link>
                <li className="p-2 m-1 cursor-pointer border-r-2 border-r-white">Mobiles</li>
                <Link to={'/home/home&furniture'}><li className="p-2 m-1 cursor-pointer border-r-2 border-r-white"
                    >Home & Furniture</li></Link>
                <Link to={'/home/appliances'}><li 
                    className="p-2 m-1 cursor-pointer border-r-2 border-r-white">Appliances</li></Link>
                <Link to={'/home/books'}><li 
                    className="p-2 m-1 cursor-pointer border-r-2 border-r-white">Books</li></Link>
                <Link to={'/home/cars&bikes'}><li 
                    className="p-2 m-1 cursor-pointer border-r-2 border-r-white">Cars & Bikes</li></Link>
                <Link to={'/home/computers'}><li 
                    className="p-2 m-1 cursor-pointer border-r-2 border-r-white">Computers</li></Link>
                <li className="p-2 m-1 cursor-pointer border-r-2 border-r-white">Travel</li>
                <li className="p-2 m-1 cursor-pointer border-r-2 border-r-white">Beauty, Toys & More</li>
                <li className="p-2 m-1 cursor-pointer border-r-2 border-r-white">New Releases</li>
                <li className="p-2 m-1 cursor-pointer border-r-2 border-r-white">Sell</li>
                <li className="p-2 m-1 cursor-pointer">Customer Service</li>
            </ul>
        </div>
    );
}

export default NavBar;