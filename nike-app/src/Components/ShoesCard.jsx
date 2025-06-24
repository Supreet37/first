import React from 'react';

const ShoesCard = ({ image, name }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
    </div>
  );
};

export default ShoesCard;