import React from "react";
import illustration from "../assets/Illustration (1).png";

const Banner = () => {
  return(
    <div id="Banner">
      <div className="main">
      <div className="banner-container">
        <h1>Lessons and insights <span> from 8 years</span></h1>
        <p>Where to grow your business as a photographer: site or social media?</p>
        <button>Register</button>
      </div>

        <img src={illustration} alt="" />
    </div>
    <div className="btn">
      <button></button>
      <button></button>
      <button></button>
    </div>
    </div>
  )
}

export default Banner;