import React from "react";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Services from "./Components/Services"

export const allRoutes = [
  {
    path:"/",
    component: <Home/>
  },
  {
    path:"/about-us",
    component: <AboutUs/>
  },
  {
    path:"/services",
    component: <Services/>
  },
  {
    path:"/contact-us",
    component: <ContactUs/>
  },
  {
    path:"/login",
    component: <Login/>
  }
]

