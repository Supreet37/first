import React from "react";
import { FaQuoteLeft } from "react-icons/fa"; 

const FeedbackCard = ({ name, role, feedback, image }) => {
  return (
    <div className="customer-card">
      <div className="sub-customer">
        <img src={image} alt="profile" />
        <div>
          <h3>{name}</h3>
          <h5>{role}</h5>
        </div>

       <div className="icon"><FaQuoteLeft style={{ stroke: "black", strokeWidth: 20 }} /></div> 

      </div>

      <p>{feedback}</p>
    </div>
  );
};

export default FeedbackCard;
