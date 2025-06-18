import React from "react";
import customerIcon from "../assets/customer-loyalty 1.png";
import deliveredIcon from "../assets/delivered 1.png";
import partnerIcon from "../assets/handshake 1.png";
import driverIcon from "../assets/driver 1.png";

const Followers = () => {
  return (
    <div id="followers">
      <h2>Look at Our Numbers</h2>
      <div className="followers-grid">
        <div className="followers-card">
          <img src={customerIcon} alt="Satisfied Customer" />
          <h1>10K</h1>
          <p>Satisfied Customer</p>
        </div>
        <div className="followers-card">
          <img src={deliveredIcon} alt="Food Delivered" />
          <h1>45K</h1>
          <p>Food Delivered</p>
        </div>
        <div className="followers-card">
          <img src={partnerIcon} alt="Trusted Partner" />
          <h1>25K</h1>
          <p>Trusted Partner</p>
        </div>
        <div className="followers-card">
          <img src={driverIcon} alt="Experienced Driver" />
          <h1>15K</h1>
          <p>Experience Driver</p>
        </div>
      </div>
    </div>
  );
};

export default Followers;
