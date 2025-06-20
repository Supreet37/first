import React from "react";
import img1 from "../assets/icon (4).png";
import img2 from "../assets/icon (5).png";
import img3 from "../assets/icon (6).png";
import img4 from "../assets/icon (7).png";

const Followers = () => {
return(
  <div id="follower">
    <div className="follower-para">
      <h1>Helping a local <span>business reinvent itself</span></h1>
      <p>We reached here with our hard work and dedication</p>
    </div>

    <div className="follower-grid">
      <div className="grid">
      <img src={img1} alt="" />
      <div className="grid-para">
        <h1>2,245,341</h1>
        <p>Members</p>
      </div>
      </div>
      <div className="grid">
      <img src={img2} alt="" />
      <div className="grid-para">
        <h1>46,328</h1>
        <p>Clubs</p>
      </div>
      </div>
      <div className="grid">
      <img src={img3} alt="" />
      <div className="grid-para">
        <h1>828,867</h1>
        <p>Event Bookings</p>
      </div>
      </div>
      <div className="grid">
      <img src={img4} alt="" />
      <div className="grid-para">
        <h1>1,926,436</h1>
        <p>Payments</p>
      </div>
      </div>
    </div>
  </div>
)
}

export default Followers;