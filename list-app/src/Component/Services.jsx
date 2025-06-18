import React from "react";
import appDownload from "../assets/cffd89f0c4d59851723a05299424857791c11d74.png";
import appImage from "../assets/Group 37270.png";

const Services = () => {
  return (
    <div id="service">
      <div className="service-wrapper">
        <div className="service-section">
          <h3>Mobile Apps</h3>
          <h1>Best Service to fulfill your expectations</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            viverra orci sed risus tincidunt tempor. Nulla malesuada vestibulum
            nibh.
          </p>
          <h2>Download Our Mobile App</h2>
          <img src={appDownload} alt="Download Button" />
        </div>

        <div className="service-img">
          <img src={appImage} alt="Mobile App" />
        </div>
      </div>
    </div>
  );
};

export default Services;
