import React, { useState } from 'react';
import { CART_URL, LOGO_URL } from '../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearuserInfo } from '../utils/ConfigSlice';
const Header=()=>{
    const [searchQuery,setsearchQuery]=useState("");
    const [lang,setlang]=useState("");
    const dispatch=useDispatch();
    const token=useSelector(store=>store.config.userInfo.token);
    const userName=useSelector(store=>store.config.userInfo.user);
    const navigate=useNavigate();
    const handleSearch=()=>{
        console.log(searchQuery);
        setsearchQuery("");
    }
    const handleLogout=async()=>{
        try{
            const response=await fetch(`http://localhost:5000/api/auth/logout`,{
                method:`POST`,
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({token:token})
            });
            if(!response.ok){
                const errorData = await response.json();
                throw new Error(errorData.message || 'Logout failed, please try again!');
            }
            sessionStorage.clear();
            dispatch(clearuserInfo({
                isAuthenticated: false,
                userName: "",
                token: "",
            }));
            setTimeout(() => {
                navigate('/');
                console.log('Navigation completed');
            }, 0);
        }catch(err){
            console.log(`Error: ${err}`);
        }
    }
    return (
        <div className=' shadow-lg h-28 flex bg-slate-800 text-white'>
            {/*logo && location container*/ }
            <div>
                <img className='w-36 h-28 ' alt='logo' src={LOGO_URL}/>
            </div>
            <div className=''>
                <input 
                        className='bg-white border-2 border-black w-[400px] h-9 ml-[400px] mt-8 rounded-md text-black' 
                        type='text'
                        value={searchQuery}
                        onChange={(e)=>setsearchQuery(e.target.value)}/>
                <button onClick={handleSearch} type='button' className='bg-slate-500 rounded-r-md h-9'>Search</button>
            </div>
            <div className='flex'>
                <div className='mt-9 ml-4'>
                    <p>User: {userName}</p>
                </div>
                <div className='mt-9 ml-4'>
                    <label htmlFor='lang'>lang</label>
                    <select className='text-black' onChange={(e)=>setlang(e.target.value)} value={lang}>
                        <option value="EN">English</option>
                        <option value="HI">Hindi</option>
                        <option value="TE">Telugu</option>
                    </select>
                </div>
                <div>
                    <img className='w-11 ml-7 mt-7' alt='cart' src={CART_URL}/>
                </div>
                <div>
                    <button type='button' onClick={handleLogout} className='ml-7 mt-7'>logout</button>
                </div>
            </div>
        </div>
    )
}
export default Header;