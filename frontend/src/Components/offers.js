import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOffersData } from '../utils/dataSlice';
import Offer from './offer';

const Offers = () => {
  const dispatch = useDispatch();
  const offersData = useSelector((store) => store.data.offersData);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products/offers', {
          method: 'GET',
          headers: { 'content-type': 'application/json' },
        });
        if (!response.ok) {
          const errorMessage = response.statusText;
          throw new Error(`Error: ${errorMessage} ${response.status}`);
        }
        const offersData = await response.json();
        dispatch(addOffersData(offersData));
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offersData.length);
    }, 3000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [offersData]);

  // Function to handle manual navigation
  const handlePrevOffer = () => {
    setCurrentOfferIndex((prevIndex) =>
      prevIndex === 0 ? offersData.length - 1 : prevIndex - 1
    );
  };

  const handleNextOffer = () => {
    setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offersData.length);
  };

  return (
    <div className="relative">
      {offersData.length > 0 && <Offer offer={offersData[currentOfferIndex]} />}
      {/* Manual navigation buttons */}
      <button
        onClick={handlePrevOffer}
        className="absolute left-0 top-[150px] transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        &#8592; {/* Left arrow icon */}
      </button>
      <button
        onClick={handleNextOffer}
        className="absolute right-0 top-[150px] transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        &#8594; {/* Right arrow icon */}
      </button>
    </div>
  );
};

export default Offers;
