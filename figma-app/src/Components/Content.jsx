import React from "react";
import image from "../assets/rafiki.png"

const Content = () => {
  return(
    <div id="content">
      <img src={image} alt="" />
      <div className="content-para">
        <h1>The unseen of spending three years at Pixelgrade</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
        <button>Learn More</button>
      </div>
    </div>
  )
}

export default Content;