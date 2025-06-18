import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Subscribe = () => {
  return (
    <div id="subscribe">
      <h1>Subscribe to Our Newsletter</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        viverra orci sed risus tincidunt tempor. Nulla malesuada vestibulum
        nibh.
      </p>

      <div className="subscribe-input">
        <input type="email" placeholder="Email Address" />
        <button>
          Subscribe <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
