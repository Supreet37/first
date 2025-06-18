import React from "react";
import deliveryImage from "../assets/pixelcut-export-tbKB_IPzx-transformed (2) 1.png";

const Delivery = () => {
  return (
    <div id="delivery">
      <div className="delivery-banner">
        <img src={deliveryImage} alt="Delivery Banner" />
      </div>
      <div className="delivery-btn">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default Delivery;
