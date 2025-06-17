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
      <AboutUs />
      <FoodGallery />
    </div>
  );
  
};

export default App;
