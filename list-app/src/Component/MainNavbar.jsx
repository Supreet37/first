import React from "react";
import logo from "../assets/logo.png"
import { FaCircleArrowRight } from "react-icons/fa6";
import {Link} from "react-router";

const MainNavbar = () => {
  return (
    <div className="main-navbar">
      <img src={logo} alt="logo" />

      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>

      <button>
        <FaCircleArrowRight /> Log In
      </button>
    </div>
  );
};

export default MainNavbar;