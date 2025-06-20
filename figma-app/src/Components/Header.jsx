import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import logo from "../assets/logo.png";

const Header = () => {
  return(
    <div id="header">
      <div className="logo">
        <img src={logo} alt="" />
        <h1>Nexcent</h1>
      </div>

      <div className="Navbar">
        <ul className="nav-links">
          <li>Home</li>
          <li>Features</li>
          <li>Community</li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>
        <button>Register Now <MdOutlineArrowRightAlt />
        </button>
      </div>
    </div>
  )
}

export default Header;