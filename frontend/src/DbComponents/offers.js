import React, { useState } from 'react'

const Offers = () => {
    const [offer,setOffer] = useState("");
    const handleChange = (e)=>{
        setOffer(e.target.value);
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/offer/add`,{
                method : "POST",
                headers : {'content-type':'application/json'},
                body : JSON.stringify({offer})
            });
            if(!response.ok){
                throw new Error(`Error: ${response.status} ${response.message}`);
            }
            const data = await response.json();
            console.log(data.message);
            setOffer("");

        } catch(err){
            console.log(`Error: ${err}`);
        }
    }
  return (
    <div>
        <input type='text' placeholder='offer' value={offer} onChange={handleChange}/>
        <button type='button' onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default Offers;