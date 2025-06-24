import React from 'react'
import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import "./App.css"
import Headline from './Components/Headline'
import Banner  from './Components/Banner'
import About from "./Components/About"
import Latest from "./Components/Latest"
import Featured from './Components/Featured'
import Show from './Components/Show'
import Shoes from './Components/Shoes'
import TrendingNow from "./Components/TrendingNow"
import Sports from "./Components/Sports"
import Footer from "./Components/Footer"


const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Headline/>
      <Banner/>
      <About/>
      <Latest/>
      <Featured/>
      <Show/>
      <Shoes/>
      <TrendingNow/>
      <Sports/>
      <Footer/>
    </div>
  )
}

export default App