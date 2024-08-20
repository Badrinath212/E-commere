import React, { useRef, useState } from "react";

const CategoryForm = ()=> {
    const [categoryList, setCategoryList] = useState({
        category: "",
        attributes: {} 
    });
    const attrname = useRef('');
    const attravlue = useRef('');
    
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setCategoryList((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const handleAttribute = ()=>{
        const Key=attrname.current.value;
        const Value=attravlue.current.value;
        setCategoryList((prev)=>({
            ...prev,
            attributes:{
                ...prev.attributes,
                [Key]:Value
            }
        }));
        attrname.current.value = "";
        attravlue.current.value = "";
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(categoryList);
        try{
            const response = await fetch("http://localhost:5000/register/category",{
                method : "POST",
                headers : {"content-type":"application/json"},
                body : JSON.stringify(categoryList)
            })
            if(!response.ok){
                throw new Error(`${response.status}`);
            }
            const message = await response.json();
            console.log(message);
            setCategoryList({
                category:"",
                attributes:{}
            })
        } catch(err){
            console.log(`Error: ${err}`)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>category</label><br/>
                <input type="text" name="category" value={categoryList.category} onChange={handleChange}/><br/>
                <input type="text" ref={attrname} placeholder="key"/>
                <input type="text" ref={attravlue} placeholder="value"/><br/>
                <button type="button" onClick={()=>handleAttribute()}>addatr</button><br/>
                <button type="submit">add</button>
            </form>
        </div>
    )
}

export default CategoryForm;