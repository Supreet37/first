import React from "react";
import img1 from "../assets/image 45.png";
import img2 from "../assets/image 44.png";
import img3 from "../assets/image.png";

const Features = () => {
  return (
    <div id="features">
      <h1>What We Feature</h1>
      <p className="para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        viverra orci sed risus tincidunt tempor. Nulla malesuada vestibulum.
      </p>

      <div className="feature-grid">
        <div className="feature-card">
          <div className="feature-img">
            <img src={img1} alt="Faster Delivery" />
          </div>
          <h2>Faster Delivery</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-img">
            <img src={img2} alt="Easy To Use" />
          </div>
          <h2>Easy To Use</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-img">
            <img src={img3} alt="24/7 Support" />
          </div>
          <h2>24/7 Support</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
