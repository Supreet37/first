import React from 'react';

const TrendingCard = ({ image, name, category, price }) => {
  return (
    <div className="trending-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{category}</p>
      <h4><strong>MRP : {price}</strong></h4>
    </div>
  );
};

export default TrendingCard;
