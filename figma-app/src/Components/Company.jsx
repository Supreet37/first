import React from "react";
import img1 from "../assets/image 18.png";
import img2 from "../assets/image 19.png";
import img3 from "../assets/image 20.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Company = () => {
return(
  <div id="company">
    <div className="company-head">
      <h1>Caring is the new marketing</h1>
      <p>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
    </div>
    <div className="company-grid">
      <div className="grid-cards">
        <img src= {img1} alt="" />
        <div className="sub-card">
          <h2>Creating Streamlined Safeguarding Processes with OneRen</h2>
          <h3>Readmore <MdOutlineArrowRightAlt /></h3>
        </div>
      </div>
      <div className="grid-cards">
        <img src= {img2} alt="" />
        <div className="sub-card">
          <h2>What are your safeguarding responsibilities and how can you manage them?</h2>
          <h3>Readmore <MdOutlineArrowRightAlt /></h3>
        </div>
      </div>
      <div className="grid-cards">
        <img src= {img3} alt="" />
        <div className="sub-card">
          <h2>Revamping the Membership Model with Triathlon Australia</h2>
          <h3>Readmore <MdOutlineArrowRightAlt /></h3>
        </div>
      </div>
    </div>
  </div>
)
}

export default Company;