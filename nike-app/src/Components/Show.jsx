import React from 'react'
import image from "../assets/show.png"

const Show = () => {
  return (
    <div id='show'>
      <h3>Dont miss</h3>
        <img src={image} alt="" />
      <div id="about">
      <h4>Men's Air Jordan Collection</h4>
      <h1><i>SHOW 'EM UP</i></h1>
      <p style={{fontSize:"14px"}}>Crafted for your flyest self, the new Air Jordan Collection brings iconic prints and elevated cuts.</p>
      <button>Shop</button>
    </div>
    </div>
  )
}

export default Show