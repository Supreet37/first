import React from "react";
import "./App.css";
import TopNavbar from "./Component/TopNavbar";
import MainNavbar from "./Component/MainNavbar";
import AboutUs from "./Component/AboutUs";
import FoodGallery from "./Component/FoodGallery";

const App = () => {
  return (
    <div>
      <TopNavbar />
      <MainNavbar />
      <FoodGallery />
      <AboutUs />
    </div>
  );
  
};

export default App;
