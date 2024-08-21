import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCategoryList } from '../utils/dataSlice';

const CategoryList = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    const captilizeWord = (str)=>{
        return str.split('&').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' & ');
    }
    const checkCategory = captilizeWord(category);
    const categoryData = useSelector(store => store.data.categoryList);
    useEffect(()=>{
        const FetchData = async ()=>{
            const isCategoryPresent = categoryData.some(item => item.category===checkCategory);
            if(isCategoryPresent){
                return;
            }
            else {
                try {
                    const response = await fetch(`http://localhost:5000/api/category/${category}`,{
                        method : "GET",
                        headers : {"content-type" : "application/json"},
                    });
                    if(!response.ok){
                        throw new Error(`Error: ${response.status}`);
                    }
                    const fetchedData = await response.json();
                    dispatch(addCategoryList([...categoryData,...fetchedData]));

                } catch (err) {
                    console.log(`Error: ${err}`);
                }
            }
        }
        FetchData();
    },[category, dispatch, categoryData, checkCategory]);
  return categoryData.length>0 && (
    <div>
        {categoryData.map((item)=>item.category===checkCategory && (

            <div key={item._id}>
                <h1 className='mt-8 p-2 text-2xl text-blue-900 font-bold'>{item.category}</h1>
                <ul className='flex p-4'>
                    {item.attributes && Object.entries(item.attributes).map(([key, value])=>(
                        <li className='p-2 text-center' key={key}>
                            <img className='mt-3 cursor-pointer w-[200px]' alt='categoryicon' src={value}/>
                            {category!=='computers' && <strong>{key}</strong>}
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default CategoryList