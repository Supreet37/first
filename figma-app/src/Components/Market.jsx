import React from "react";
import image from "../assets/image 9.png";
import logo1 from "../assets/Logo (9).png";
import logo2 from "../assets/Logo (10).png";
import logo3 from "../assets/Logo (11).png";
import logo4 from "../assets/Logo (12).png";
import logo5 from "../assets/Logo (13).png";
import logo6 from "../assets/Logo (14).png";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Market = () => {
  return(
    <div id="market">
      <div className="market-image"><img src={image} alt="" /></div>
      <div className="market-para">
        <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
        <h3>Tim Smith</h3>
        <h5>British Dragon Boat Racing Association</h5>
        <div className="market-logo">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
          <a href="">Meet all customers <MdOutlineArrowRightAlt /></a>
        </div>
      </div>
    </div>
  )
}

export default Market;