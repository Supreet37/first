import React from "react";
import "./App.css";
import TopNavbar from "./Component/TopNavbar";
import MainNavbar from "./Component/MainNavbar";
import AboutUs from "./Component/AboutUs";
import FoodGallery from "./Component/FoodGallery";
import Banner from "./Component/Banner";
import Features from "./Component/Features";
import Services from "./Component/Services";
import Followers from "./Component/Followers";
import Delivery from "./Component/Delivery";
import Subscribe from "./Component/Subscribe";
import Foot from "./Component/Foot";
import Footer from "./Component/Footer"

const App = () => {
  return (
    <div>
      <TopNavbar />
      <MainNavbar />
      <Banner/>
      <FoodGallery />
      <Features/>
      <Services/>
      <Followers/>
      <Delivery/>
      <AboutUs />
      <Subscribe/>
      <Foot/>
      <Footer/>
    </div>
  );
  
};

export default App;
