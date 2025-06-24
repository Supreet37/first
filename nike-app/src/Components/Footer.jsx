import React from 'react';
import { BsGlobe2 } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-left">
        <div className="footer-col">
      <ul>
        <li>Resources</li>
        <li><a href="#">Find A Store</a></li>
        <li><a href="#">Become A Member</a></li>
        <li><a href="#">Running Shoe Finder</a></li>
        <li><a href="#">Product Advice</a></li>
        <li><a href="#">Send Us Feedback</a></li>
    </ul>

    <ul>
      <li>Help</li>
      <li><a href="#">Get Help</a></li>
      <li><a href="#">Order Status</a></li>
      <li><a href="#">Delivery</a></li>
      <li><a href="#">Returns</a></li>
      <li><a href="#">Payment Options</a></li>
      <li><a href="#">Contact Us On Nike.com Inquiries</a></li>
      <li><a href="#">Contact Us On All Other Inquiries</a></li>
    </ul>

    <ul>
      <li>Company</li>
      <li><a href="#">About Nike</a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">Careers</a></li>
      <li><a href="#">Investors</a></li>
      <li><a href="#">Sustainability</a></li>
      <li><a href="#">Impact</a></li>
      <li><a href="#">Report a Concern</a></li>
    </ul>
        </div>
        <div className="footer-right">
          <h3><BsGlobe2 />India</h3>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Nike, Inc. All rights reserved</p>
          <select name="" id="">
            <option value="">Guides</option>
          </select>
          <p>Terms of Sale</p>
          <p>Terms of Use</p>
          <p>Nike Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
