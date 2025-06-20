import React from "react";
import "./App.css"
import Header from "./Components/Header"
import Banner from "./Components/Banner"
import Client from "./Components/Client"
import About from "./Components/About"
import Content from "./Components/Content"
import Followers from "./Components/Followers"
import Mobile from "./Components/Mobile"
import Company from "./Components/Company"
import Market from "./Components/Market"
import Subscribe from "./Components/Subscribe"
import Footer from "./Components/Footer"

const App = () => {
  return(
    <div>
      <Header/>
      <Banner/>
      <Client/>
      <About/>
      <Content/>
      <Followers/>
      <Mobile/>
      <Market/>
      <Company/>
      <Subscribe/>
      <Footer/> 
     
    </div>
  );

};

export default App;