import React from "react"
import "./App.css"
import Navbar from "./Components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";
import Login from "./Components/Login";

const App = () => {
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route  path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
  </div>
  )
}

export default App;