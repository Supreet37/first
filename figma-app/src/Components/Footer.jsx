import React from "react";
import logo from "../assets/header-logo.png";
import social1 from "../assets/Social Icons.png";
import social2 from "../assets/Social Icons2.png";
import social3 from "../assets/Social Icons (2).png";
import social4 from "../assets/Social Icons4.png";
import send from "../assets/send icon.png"

const Footer = () => {
return(
  <div id="footer">
    <div className="footer-left">
      <div className="logo">
        <img src={logo} alt="" />
        <h1 style={{ color: "white" }}>Nexcent</h1>
      </div>
      <p>Copyright c 2020 Landify UI kit.<br></br>All rights reserved</p>
      <div className="social">
        <img src={social1} alt="" />
        <img src={social2} alt="" />
        <img src={social3} alt="" />
        <img src={social4} alt="" />
      </div>
    </div>


    <div className="footer-right">
      <div className="foot-links">
        <ul>
          <li>Company</li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Photos</a></li>
          <li><a href="#">Testimonials</a></li>
        </ul>
      </div>
      <div className="foot-links">
        <ul>
          <li>Support</li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Terms of service</a></li>
          <li><a href="#">Legal</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Status</a></li>
        </ul>
      </div>
      <div className="contact">
        <h2>Stay up to date</h2>
        <input type="email" placeholder="Your email address"/>
        <img src={send} alt="" />
      </div>
    </div>

  </div>
)
}

export default Footer;