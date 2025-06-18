import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import logo from "../assets/565c3f61c8700097262297ba4d696a6b14fa5a6a.png";
import appImg from "../assets/cffd89f0c4d59851723a05299424857791c11d74.png";

const Foot = () => {
  return (
    <div id="foot">
  <div className="foot-left">
    <div className="foot1">
      <img src={logo} alt="Logo" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        viverra orci sed.
      </p>
      <div className="social-icons">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaYoutube />
        <FaPinterest />
      </div>
    </div>

    <div className="foot2">
      <ul>
        <li><strong>QUICKLINKS</strong></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>
    </div>
  </div>

  <div className="foot-right">
    <div className="foot3">
      <h3>GET IN TOUCH</h3>
      <p><span><FaLocationDot /> </span>Plot No-1187, Jagatsinghpur, Odisha - 754294</p>
      <p><span><FaEnvelope /></span> directorsaipl@gmail.com</p>
      <p><span><FaPhone /></span> 08068499992 Ext: 997</p>
    </div>

    <div className="foot4">
      <h3>DOWNLOAD APP</h3>
      <img src={appImg} alt="Download App" />
    </div>
  </div>
</div>

  );
};

export default Foot;
