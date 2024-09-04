import React from 'react';

const Offer = ({ offer }) => {
  return (
    <div className="a-carousel-display-single a-carousel-card">
      <img
        alt="offerImg"
        src={offer.offer}
        className="max-w-full max-h-full w-full h-full object-cover border-0"
        style={{
          height: '100%',
          width: '100%',
          visibility: 'visible',
          margin: '0px',
        }}
      />
    </div>
  );
};

export default Offer;
