import React from "react";
import img1 from "../assets/Group 146.png";
import vector1 from "../assets/Vector 43.png";
import vector2 from "../assets/Vector 42.png";

const Banner = () => {
  return (
    <div id="banner">
      <div className="container">
        <div className="banner-left">
          <h3>Welcome to</h3>
          <h1>We Provide Delivery Within 30 Min</h1>
          <p>
            Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Phasellus
            viverra orci sed risus tinci dunt tempor. Nulla malesuada vestibulum
            nibh.
          </p>
          <div className="btn">
            <button className="btn1">
              Get Started
            </button>
            <button className="btn2">Order Step</button>
          </div>
          <div className="custom">
            <div className="custom1">
              <h2>40K</h2>
              <p>Satisfied Customer</p>
            </div>
            <div className="custom1">
              <h2>45K</h2>
              <p>Food Delivered</p>
            </div>
          </div>
        </div>
      </div>

      <img src={img1} className="img1" alt="Banner Illustration" />
      <img src={vector1} className="img2" alt="Vector 1" />
      <img src={vector2} className="img3" alt="Vector 2" />
    </div>
  );
};

export default Banner;
