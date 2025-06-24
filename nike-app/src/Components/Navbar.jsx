import React from 'react'
import { MdOutlineSearch } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div id="navbar">
      <svg aria-hidden="true" class="swoosh-svg" focusable="false" viewBox="0 0 24 24" role="img" width="70px" height="70px" fill="none">
        <path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path>
        </svg>

          <ul className="nav-links">
            <li><a href="">New & Featured</a></li>
            <li><a href="">Men</a></li>
            <li><a href="">Women</a></li>
            <li><a href="">Kids</a></li>
            <li><a href="">Sale</a></li>
            <li><a href="">SNKRS</a></li>
          </ul>
          
        <div className="nav-icons">
        <MdOutlineSearch style={{ fontSize: "25px", transform: "translate(60px,1px)" }} />
        <input type="text" placeholder='Search'/>
        <FiHeart style={{fontSize:"25px"}}/>
        <IoBagOutline style={{fontSize:"25px"}}/>
        </div>
    </div>
  )
}

export default Navbar