import React from "react";
import prawns from "../assets/Frame 1102.png";
import omlet from "../assets/Frame 1103.png";
import noodles from "../assets/Frame 1104.png";
import corn from "../assets/Frame 1117.png";
import cauliflower from "../assets/Frame 1116.png";
import vegetables from "../assets/Frame 1114.png";

const FoodGallery = () => {
  return (
    <section id="food-section">
      <h2>Food & Grocery</h2>

      <div className="food-grid">
        <div className="food-card wide">
          <div className="image-wrapper">
            <img src={prawns} alt="Special Prawns" />
          </div>
          <h3>Special Prawns</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
        </div>

        <div className="food-card">
          <div className="image-wrapper">
            <img src={omlet} alt="Egg Omlet" />
          </div>
          <h3>Egg Omlet</h3>
          <p></p>
        </div>

        <div className="food-card">
          <div className="image-wrapper">
            <img src={noodles} alt="Egg Noodles" />
          </div>
          <h3>Egg Noodles</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
        </div>

        <div className="food-card">
          <div className="image-wrapper">
            <img src={corn} alt="Sweet Corn" />
          </div>
          <h3>Sweet Corn</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diarn nonumy</p>
        </div>

        <div className="food-card">
          <div className="image-wrapper">
            <img src={cauliflower} alt="Cauli Flower" />
          </div>
          <h3>Cauli Flower</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diarn nonumy</p>
        </div>

        <div className="food-card wide">
          <div className="image-wrapper">
            <img src={vegetables} alt="Fresh Vegetables" />
          </div>
          <h3>Fresh Vegetables</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diarn nonumy</p>
        </div>
      </div>
    </section>
  );
};

export default FoodGallery;
