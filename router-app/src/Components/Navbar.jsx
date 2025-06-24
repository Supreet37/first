import React from 'react'
import {Link, useNavigate} from "react-router";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div id="Navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        
      </ul>
      <button onClick={ () => navigate("/login")}>Login</button>
    </div>
  )
}

export default Navbar;