import React from "react";
import logo1 from "../assets/Logo (1).png";
import logo2 from "../assets/Logo (2).png";
import logo3 from "../assets/Logo (3).png";
import logo4 from "../assets/Logo (4).png";
import logo5 from "../assets/Logo (5).png";
import logo6 from "../assets/Logo (6).png";
import logo7 from "../assets/Logo (7).png";

const Client = () => {
  return(
    <div id="client">
      <div className="client-head">
        <h1>Our Clients</h1>
        <p>We have been working with some Fortune 500+ clients</p>
      </div>
      <div className="client-logo">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
        <img src={logo7} alt="" />
      </div>
    </div>
  )
}

export default Client;